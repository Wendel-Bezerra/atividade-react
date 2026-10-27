// Recebe total de páginas, página atual e o callback onPageChange via props
export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Paginação">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        ‹ Anterior
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? 'active' : ''}
          aria-current={page === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        Próxima ›
      </button>
    </nav>
  );
}
