import { ADD_NOTE, REMOVE_NOTE, COMPLETE_NOTE } from './../../constants';

const NOTES = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  },
];

const todos = (state = NOTES, { type, id, text, isCompleted }) => {
  switch (type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id,
          text,
          isCompleted,
        },
      ];

    case REMOVE_NOTE:
      return [...state].filter((note) => note.id !== id);

    case COMPLETE_NOTE:
      return [...state].map((note) => {
        if (note.id === id) {
          note.isCompleted = !note.isCompleted;
        }
        return note;
      });

    default:
      return state;
  }
};

export default todos;
