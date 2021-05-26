import React from 'react';

const filterButtons = [
  { text: 'All', filter: 'all' },
  { text: 'Active', filter: 'active' },
  { text: 'Completed', filter: 'completed' },
];

export class Footer extends React.Component {
  render() {
    const { amount, changeFilter, activeFilter } = this.props;

    return (
      <div className="footer">
        <span>{`${amount} Todo's left`}</span>
        <div className="btn-group">
          {filterButtons.map(({ text, filter }) => (
            <button
              key={filter}
              className={
                filter === activeFilter
                  ? 'filter-btn filter-btn-active'
                  : 'filter-btn'
              }
              onClick={() => changeFilter(filter)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
