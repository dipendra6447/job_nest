import React from 'react';
import './Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = (): (number | '...')[] => {
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Job listings pagination" className="pagination-wrapper">
      <ul className="pagination-list">
        {/* Previous */}
        <li>
          <button
            className="page-btn page-prev"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
            id="page-prev-btn"
            type="button"
          >
            <i className="bi bi-chevron-left me-1" />
            <span className="d-none d-sm-inline">Previous</span>
          </button>
        </li>

        {/* Page numbers */}
        {getPages().map((page, i) => (
          <li key={`${page}-${i}`}>
            {page === '...' ? (
              <span className="page-ellipsis" aria-hidden="true">…</span>
            ) : (
              <button
                className={`page-btn page-number ${currentPage === page ? 'active' : ''}`}
                onClick={() => onPageChange(page as number)}
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
                id={`page-${page}-btn`}
                type="button"
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next */}
        <li>
          <button
            className="page-btn page-next"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
            id="page-next-btn"
            type="button"
          >
            <span className="d-none d-sm-inline">Next</span>
            <i className="bi bi-chevron-right ms-1" />
          </button>
        </li>
      </ul>

      {/* Page info */}
      <p className="pagination-info">
        Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
      </p>
    </nav>
  );
};

export default Pagination;
