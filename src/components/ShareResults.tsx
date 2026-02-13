import { motion } from "framer-motion";
import { type RefObject } from "react";
import html2canvas from "html2canvas";
import { type Archetype } from "@/data/archetypes";
import { archetypeIllustrations } from "@/data/archetypeIllustrations";

interface ShareResultsProps {
  archetype: Archetype;
  resultsRef?: RefObject<HTMLDivElement>;
  delay?: number;
}

const ShareResults = ({ archetype, resultsRef, delay = 1.3 }: ShareResultsProps) => {
  const downloadAsImage = async () => {
    // Download the entire results page
    if (!resultsRef?.current) return;

    try {
      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: "#faf8f6",
        scale: 2,
        logging: false,
        width: resultsRef.current.offsetWidth,
        height: resultsRef.current.offsetHeight,
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `my-love-type-${archetype.key}.png`;
      link.click();
    } catch (error) {
      console.error("Failed to download image:", error);
    }
  };

  const copyShareLink = () => {
    const baseUrl = window.location.origin;
    // Generate shareable URL with the archetype key
    const shareUrl = `${baseUrl}?result=${archetype.key}`;
    navigator.clipboard.writeText(shareUrl);
    // Open the results page in a new tab
    window.open(shareUrl, '_blank');
  };

  return (
    <motion.div
      className="mt-12 pt-8 border-t border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Share Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <motion.button
          onClick={downloadAsImage}
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
          Download as PNG
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
    </motion.div>
  );
};

export default ShareResults;
