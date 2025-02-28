import { useDispatch } from 'react-redux';
import { sortByNewest, sortByOldest } from '../redux/sort/sortSlice';

const SortPopup = () => {
    const dispatch = useDispatch();
    return (
        <ul className="sort--popup">
            <li className="sort--popup-item" onClick={() => dispatch(sortByNewest())}>
                новые
            </li>
            <li className="sort--popup-item" onClick={() => dispatch(sortByOldest())}>
                старые
            </li>
        </ul>
    );
};

export default SortPopup;
