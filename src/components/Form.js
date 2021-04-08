import React, { useState } from 'react';

export const Form = (props) => {
  const [value, setValue] = useState('');

  function inputChange(e) {
    setValue(e.target.value);
  }

  function addNote(e) {
    e.preventDefault();
    if (value) {
      props.addNote(value);
      setValue('');
    }
  }

  return (
    <form className="form-group pt-4" onSubmit={addNote}>
      <input
        onChange={inputChange}
        value={value}
        type="text"
        className="form-control"
        placeholder="Введите название заметки"
      ></input>
    </form>
  );
};

// export class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//     };
//     this.inputChange = this.inputChange.bind(this);
//   }

//   inputChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   addNote = (e) => {
//     e.preventDefault();
//     const { value } = this.state;
//     if (value) {
//       this.props.addNote(value);
//       this.setState({ value: '' });
//     }
//   };

//   render() {
//     return (
//       <form className="form-group pt-4" onSubmit={this.addNote}>
//         <input
//           onChange={this.inputChange}
//           value={this.state.value}
//           type="text"
//           className="form-control"
//           placeholder="Введите название заметки"
//         ></input>
//       </form>
//     );
//   }
// }
