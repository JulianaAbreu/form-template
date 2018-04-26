import { LIST_STUDENTS, ADD_STUDENT, REMOVE_STUDENT, EDIT_STUDENT } from './constants';

export const studentsReducer = (state = [], action) => {
    switch (action.type) {
        case LIST_STUDENTS:
            return action.data;
        case ADD_STUDENT:
            const { data } = action;
            const newState = state.concat(data)
            return newState;
        case REMOVE_STUDENT:
            state = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            console.log(state)
            return state;
        case EDIT_STUDENT:
            return state.map(student => {
                if (student.id == action.id) {
                    student.name = student.name
                }
                return student;
            })
        default:
            return state
    }
}

export default studentsReducer;