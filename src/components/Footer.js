import React from 'react';

const filterButtons = [
  { text: 'All', filter: 'all' },
  { text: 'Active', filter: 'active' },
  { text: 'Completed', filter: 'completed' },
];

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.amount = this.props.amount;
    this.changeFilter = this.props.changeFilter;
  }

  render() {
    return (
      <div className="footer">
        <span>{`${this.amount} Todo's left`}</span>
        <div className="btn-group">
          {filterButtons.map(({ text, filter }) => (
            <button
              key={filter}
              className="filter-btn"
              onClick={() => this.changeFilter(filter)}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
