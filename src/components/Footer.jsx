import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from '../redux/filter/filterSlice';

import { ALL, ACTIVE, COMPLITED } from './../utils/constants';

const filterButtons = [
    { text: 'Все', filter: ALL },
    { text: 'Активные', filter: ACTIVE },
    { text: 'Выполненные', filter: COMPLITED },
];

const Footer = ({ todosAmount }) => {
    const dispatch = useDispatch();
    const activeFilter = useSelector((state) => state.filter);

    return (
        <footer>
            <div className="container">
                <div>
                    {activeFilter === ALL
                        ? 'Количество задач: '
                        : activeFilter === ACTIVE
                        ? 'Количество активных задач: '
                        : 'Количество выполненных задач: '}{' '}
                    <span>{todosAmount}</span>
                </div>
                <div className="filters--container">
                    {filterButtons.map(({ text, filter }) => (
                        <button
                            key={filter}
                            className={activeFilter === filter ? 'filterButton active' : 'filterButton'}
                            onClick={() => dispatch(filterChange(filter))}
                        >
                            {text}
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
