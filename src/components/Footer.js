import React from 'react';

const filterButtons = [
  { text: 'All', id: 'all' },
  { text: 'Active', id: 'active' },
  { text: 'Completed', id: 'completed' },
];

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.amount = this.props.amount;
  }

  render() {
    return (
      <div className="footer">
        <span>{`${this.amount} Todo's left`}</span>
        <div className="btn-group">
          {filterButtons.map(({ text, id }) => (
            <button key={id} className="filter-btn">
              {text}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
