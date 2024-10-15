import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";

// Setting the worker for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PDFSection = ({ file, numPages, onDocumentLoadSuccess }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset error on file change
    setError(null);
  }, [file]);

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="min-w-[300px] h-screen border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-auto transition-transform transform hover:scale-105"
    >
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(err) => setError(err)}
        loading={<Skeleton height={800} />}
        error={
          <div className="flex items-center justify-center h-full dark:text-white">
            {error ? error.message : "Error Loading PDF..."}
          </div>
        }
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div
            key={`page_${index + 1}`}
            className="border-b border-gray-300 dark:border-gray-600 pb-4"
          >
            <Page
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={<Skeleton height={800} />}
            />
            <p className="text-right dark:text-gray-200 text-gray-500">
              Page {index + 1}
            </p>
          </div>
        ))}
      </Document>
    </motion.div>
  );
};

export default PDFSection;
