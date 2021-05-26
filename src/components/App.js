import React from 'react';
import { Header } from '../components/Header';
import { Note } from '../components/Note';
import { Form } from '../components/Form';
import { Footer } from '../components/Footer';

import { connect } from 'react-redux';

import {
  addNote,
  removeNote,
  completeNote,
  changeFilter,
} from './../store/actions/actionCreator';

class App extends React.Component {
  filterTodos = (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.isCompleted);
      case 'completed':
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };

  getActiveTodos = (todos) => {
    return todos.filter((todo) => !todo.isCompleted).length;
  };

  render() {
    const { todos, addNote, removeNote, completeNote, filter, changeFilter } =
      this.props;

    let filteredTodos = this.filterTodos(todos, filter);
    let activeTodosAmount = this.getActiveTodos(todos);

    return (
      <>
        <Header />
        <div className="container">
          <Form addNote={addNote} />
          <hr />
          <ul className="list-group">
            {filteredTodos.length > 0
              ? filteredTodos.map((note) => (
                  <Note
                    note={note}
                    key={note.id}
                    removeNote={() => removeNote(note.id)}
                    completeNote={completeNote}
                  />
                ))
              : 'Нет заметок'}
          </ul>
          <Footer amount={activeTodosAmount} changeFilter={changeFilter} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

const mapDispatchToProps = {
  addNote,
  removeNote,
  completeNote,
  changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
