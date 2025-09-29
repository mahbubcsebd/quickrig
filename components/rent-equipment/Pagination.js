'use client';

import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
  startIndex,
  itemsPerPage,
  totalResults,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </button>

        <div className="flex items-center space-x-2">
          {Array.from({ length: Math.min(totalPages, 4) }, (_, i) => i + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            )
          )}
          {totalPages > 4 && (
            <>
              <span className="text-gray-400">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className={`px-3 py-1 text-sm rounded transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-700 transition-colors">
            <RotateCcw className="w-4 h-4 mr-2" />
            Re-center Shift+2
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-gray-600 text-center">
        Showing {startIndex + 1}-
        {Math.min(startIndex + itemsPerPage, totalResults)} of {totalResults}{' '}
        results
      </div>
    </>
  );
};

export default Pagination;
