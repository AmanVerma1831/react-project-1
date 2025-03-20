import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center items-center gap-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700"
            >
                <span className='mr-1 font-bold'>←</span>Previous
            </button>
            <span className="text-gray-700">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-black hover:bg-gray-100 hover:text-gray-700"
            >
                Next<span className='ml-1 font-bold'>→</span>
            </button>
        </div>
    );
};

export default Pagination;