import React from 'react';

import classes from "../style/pagination.module.css"

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
    const MAX_PAGES = 3;

    const pages = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > MAX_PAGES) {
        startPage = Math.max(currentPage - Math.floor(MAX_PAGES / 2), 1);
        endPage = startPage + MAX_PAGES - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - MAX_PAGES + 1;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const renderPages = pages.map((page) => (
        <span
            key={page}
            // onClick={() => onChangePage(page)}
            className={page === currentPage ? `${classes.active}` : `${classes.pagination_item}`}
        >
      {page}
    </span>
    ));

    return (
        <div className={classes.pagination}>
            {startPage > 1 && <span className={classes.pagination_item} >...</span>}
            {renderPages}
            {endPage < totalPages && <span className={classes.pagination_item} >...</span>}
            <span className={classes.pagination_item} >
                {totalPages}
            </span>
        </div>
    );
};

export default Pagination;
