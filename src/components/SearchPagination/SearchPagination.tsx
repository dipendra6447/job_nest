import React from 'react';
import './SearchPagination.css';

interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const SearchPagination: React.FC<SearchPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="sp-pagination" aria-label="Pagination" id="sp-pagination">
      <button
        className="sp-btn sp-prev"
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        <i className="bi bi-chevron-left" />
        <span>Previous</span>
      </button>

      <div className="sp-pages">
        {getPages().map((page, idx) =>
          page === '...' ? (
            <span key={`dots-${idx}`} className="sp-dots">&hellip;</span>
          ) : (
            <button
              key={page}
              type="button"
              className={`sp-page-btn ${currentPage === page ? 'sp-page-active' : ''}`}
              onClick={() => onPageChange(page as number)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? 'page' : undefined}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button
        className="sp-btn sp-next"
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        <span>Next</span>
        <i className="bi bi-chevron-right" />
      </button>
    </nav>
  );
};

export default SearchPagination;
