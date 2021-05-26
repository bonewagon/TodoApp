import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(event) {
    this.setState({ value: event.target.value });
  }

  addTodo = (e) => {
    e.preventDefault();
    const { value } = this.state;
    const { addNote } = this.props;
    if (value) {
      addNote(new Date().getTime(), value, false);
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <form className="form-group pt-4" onSubmit={this.addTodo}>
        <input
          onChange={this.inputChange}
          value={this.state.value}
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
        ></input>
      </form>
    );
  }
}
