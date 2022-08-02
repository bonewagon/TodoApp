import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../store/actions/actionCreator';

const filterButtons = [
  { text: 'All', filter: 'all' },
  { text: 'Active', filter: 'active' },
  { text: 'Completed', filter: 'completed' },
];

export function Footer(props) {
  const { amount } = props;

  const activeFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <span>{`${amount} Todo's left`}</span>
      <div className="btn-group">
        {filterButtons.map(({ text, filter }) => (
          <button
            key={filter}
            className={filter === activeFilter ? 'filter-btn filter-btn-active' : 'filter-btn'}
            onClick={() => dispatch(changeFilter(filter))}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

// export class Footer extends React.Component {
//   render() {
//     const { amount } = this.props;

//     return (
//       <div className="footer">
//         <span>{`${amount} Todo's left`}</span>
//         <div className="btn-group">
//           {filterButtons.map(({ text, filter }) => (
//             <button
//               key={filter}
//               className={filter === activeFilter ? 'filter-btn filter-btn-active' : 'filter-btn'}
//               onClick={() => changeFilter(filter)}>
//               {text}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
