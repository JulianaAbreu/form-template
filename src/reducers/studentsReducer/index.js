import {
  LIST_STUDENTS,
  ADD_STUDENT,
  REMOVE_STUDENT,
  EDIT_STUDENT
} from './constants';

export const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_STUDENTS:
      return action.data;
    case ADD_STUDENT:
      const { data } = action;
      const newState = state.concat(data);
      return newState;
    case REMOVE_STUDENT:
        return state.filter(student => student.id !== action.id);
    case EDIT_STUDENT:
      const { index, name } = action;

      const editNameStudent = state.map((item, i) => {
        if (i === index) {
          item.name = name;
        }
        return item;
      });
      return editNameStudent;
    default:
      return state;
  }
};

export default studentsReducer;
