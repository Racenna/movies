import { NavLink } from 'react-router-dom';
import './style.scss';

type Props = {
  page: number,
  totalPages: number,
  pageRange: number,
  path: string,
  onPageChange: (value: number) => void,
};

const Pagination = ({
  page,
  totalPages,
  pageRange,
  path,
  onPageChange,
}: Props) => {
  const previous = () => {
    if (page !== 1) onPageChange(page - 1);
    return;
  };

  const next = () => {
    if (page !== totalPages) onPageChange(page + 1);
    return;
  };

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const filterPages = (pageItem: number) => {
    if (
      pageItem === 1 ||
      (pageItem >= page - pageRange && pageItem <= page + pageRange) ||
      pageItem === totalPages
    ) {
      return true;
    }
    return false;
  };

  const renderPage = pages.filter(filterPages).map((pageItem) => {
    const active = page === pageItem ? 'active' : '';
    return (
      <NavLink
        key={pageItem}
        to={`${path}?page=${pageItem}`}
        activeClassName={active}
        onClick={() => {
          onPageChange(pageItem);
        }}
      >
        <div>{pageItem}</div>
      </NavLink>
    );
  });

  const hidePrev = page === 1 ? 'prev-disable' : '';
  const hideNext = page === totalPages ? 'next-disable' : '';

  return (
    <div className="pagination">
      <NavLink
        to={page !== 1 ? `${path}?page=${page - 1}` : `${path}?page=${page}`}
        onClick={previous}
        className={hidePrev}
        activeClassName=""
      >
        <div>prev</div>
      </NavLink>
      {renderPage}
      <NavLink
        to={
          page !== totalPages
            ? `${path}?page=${page + 1}`
            : `${path}?page=${page}`
        }
        className={hideNext}
        activeClassName=""
        onClick={next}
      >
        <div>next</div>
      </NavLink>
    </div>
  );
};

export default Pagination;
