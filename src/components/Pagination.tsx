interface PaginationProps {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (newPage: number) => void;
}

const Pagination = ({currentPage, totalItems, itemsPerPage, onPageChange}: PaginationProps) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return (
        <div className="flex justify-center items-center gap-4 mt-6">
            <button onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg shadow-md text-white transition
                        ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                Previous
            </button>
            <span className="text-lg font-medium">
                    Page <span className="text-blue-600">{currentPage}</span> of {totalPages}
                </span>
            <button
                onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg shadow-md text-white transition
                    ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination;
