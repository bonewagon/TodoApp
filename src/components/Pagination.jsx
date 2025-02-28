import '../styles/pagination.css';

import leftArrowSVG from '../assets/left-arrow.svg';
import rightArrowSVG from '../assets/right-arrow.svg';
import { useSelector } from 'react-redux';

const Pagination = ({ totalPages, onPageChange }) => {
    const currentPage = useSelector((state) => state.currentPage);

    const pages = [...Array(totalPages).keys()].map((num) => num + 1);

    return (
        <div className="pagination">
            <button className="arrowButton" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                <img src={leftArrowSVG} alt="leftArrow" />
            </button>
            {pages.map((page) => (
                <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? 'active' : ''}>
                    {page}
                </button>
            ))}
            <button className="arrowButton" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                <img src={rightArrowSVG} alt="rightArrow" />
            </button>
        </div>
    );
};

export default Pagination;
