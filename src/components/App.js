import React from 'react';
import { Header } from '../components/Header';
import { Note } from '../components/Note';
import { Form } from '../components/Form';
import { Footer } from '../components/Footer';

let counter = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((json) => this.setState({ notes: json }))
      .catch(() => this.setState({ notes: [] }));
  }

  deleteNote(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  addNote(note) {
    this.setState({
      notes: [
        ...this.state.notes,
        { id: counter++, title: note, completed: false },
      ],
    });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Form addNote={this.addNote} />
          <hr />
          <ul className="list-group">
            {this.state.notes.length > 0
              ? this.state.notes.map((note) => (
                  <Note
                    note={note}
                    key={note.id}
                    deleteNote={() => this.deleteNote(note.id)}
                  />
                ))
              : 'Нет заметок'}
          </ul>
          <Footer amount={4} />
        </div>
      </>
    );
  }
}

export default App;
