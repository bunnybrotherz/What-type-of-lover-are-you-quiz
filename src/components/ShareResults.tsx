import { motion } from "framer-motion";
import { type RefObject, useState } from "react";
import html2canvas from "html2canvas";
import { type Archetype } from "@/data/archetypes";

interface ShareResultsProps {
  archetype: Archetype;
  resultsRef?: RefObject<HTMLDivElement>;
  delay?: number;
}

const ShareResults = ({ archetype, resultsRef, delay = 1.3 }: ShareResultsProps) => {
  const [isCopiedModalOpen, setIsCopiedModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadAsImage = async () => {
    if (!resultsRef?.current || isDownloading) return;

    try {
      setIsDownloading(true);
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const target = resultsRef.current;
      target.setAttribute("data-export-root", "true");
      const captureWidth = Math.max(target.scrollWidth, target.offsetWidth);
      const captureHeight = Math.max(target.scrollHeight, target.offsetHeight);
      const canvas = await html2canvas(target, {
        backgroundColor: "#faf8f6",
        scale: Math.max(2, Math.min(3, window.devicePixelRatio || 2)),
        logging: false,
        useCORS: true,
        width: captureWidth,
        height: captureHeight,
        windowWidth: captureWidth,
        windowHeight: captureHeight,
        scrollX: 0,
        scrollY: -window.scrollY,
        onclone: (clonedDoc) => {
          const clonedTarget = clonedDoc.querySelector("[data-export-root='true']") as HTMLElement | null;
          if (!clonedTarget) return;

          clonedTarget.querySelectorAll("[data-export-ignore='true']").forEach((node) => {
            (node as HTMLElement).style.display = "none";
          });

          clonedTarget.querySelectorAll(".text-gradient").forEach((node) => {
            const el = node as HTMLElement;
            el.style.background = "none";
            el.style.webkitTextFillColor = "currentColor";
            el.style.color = "hsl(345 40% 30%)";
          });

          clonedTarget.querySelectorAll("*").forEach((node) => {
            const el = node as HTMLElement;
            el.style.animation = "none";
            el.style.transition = "none";
          });
        },
      });

      const link = document.createElement("a");
      link.download = `my-love-type-${archetype.key}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Failed to download image:", error);
    } finally {
      resultsRef.current?.removeAttribute("data-export-root");
      setIsDownloading(false);
    }
  };

  const copyShareLink = async () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set("result", archetype.key);
      const shareUrl = url.toString();
      await navigator.clipboard.writeText(shareUrl);
      setIsCopiedModalOpen(true);
    } catch (error) {
      console.error("Failed to copy share link:", error);
    }
  };

  return (
    <motion.div
      data-export-ignore="true"
      className="mt-12 pt-8 border-t border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Share Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <motion.button
          onClick={downloadAsImage}
          disabled={isDownloading}
          aria-busy={isDownloading}
          className="flex-1 px-6 py-3 rounded-full bg-accent/20 border border-accent hover:bg-accent/30 transition-colors font-display text-sm font-semibold text-foreground flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          {isDownloading ? "Preparing PNG..." : "Download as PNG"}
        </motion.button>

        <motion.button
          onClick={copyShareLink}
          className="flex-1 px-6 py-3 rounded-full bg-blush/20 border border-blush hover:bg-blush/30 transition-colors font-display text-sm font-semibold text-foreground flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C9.839 10.319 12.75 8 16 8c3.866 0 7 2.239 7 5s-3.134 5-7 5c-.993 0-1.927-.184-2.769-.526m-6.004-2.948-.003-.003m0 0a7.005 7.005 0 016.7-5.666M9.016 19.968v.001m0 0a7.005 7.005 0 01-6.7-5.666m6.7 5.666v-1a1 1 0 00-1-1H5a2 2 0 00-2 2v1m2-5.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
          </svg>
          Copy Share Link
        </motion.button>
      </div>

      {isCopiedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsCopiedModalOpen(false)} />
          <motion.div
            className="relative bg-card rounded-xl p-6 max-w-lg w-full shadow-xl border border-border"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
          >
            <button
              onClick={() => setIsCopiedModalOpen(false)}
              className="absolute top-3 right-3 text-muted-foreground"
              aria-label="Close copied link modal"
            >
              x
            </button>
            <h3 className="text-lg font-display font-semibold text-center">Link copied</h3>
            <p className="mt-2 text-sm text-muted-foreground font-body text-center">
              Your share link is on the clipboard and points to this same archetype result.
            </p>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setIsCopiedModalOpen(false)}
                className="px-5 py-2 rounded-full border-2 border-primary text-primary font-display hover:bg-primary/10 transition-colors"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default ShareResults;
