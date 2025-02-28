import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SortPopup from './SortPopup';
import { NEWEST } from '../utils/constants';

const Sort = () => {
    const [popupIsVisible, setPopupIsVisible] = useState(false);
    const sortParam = useSelector((state) => state.sort);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.sort')) {
                setPopupIsVisible(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    const clickHandler = () => {
        setPopupIsVisible(!popupIsVisible);
    };

    return (
        <div className="sort" onClick={clickHandler}>
            Сортировать по дате: <span>{sortParam === NEWEST ? 'новые' : 'старые'}</span>
            {popupIsVisible && <SortPopup />}
        </div>
    );
};

export default Sort;
