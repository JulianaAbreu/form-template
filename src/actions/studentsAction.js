import { get, post, patch } from '../modules/request';
import { LIST_STUDENTS, ADD_STUDENT, REMOVE_STUDENT, EDIT_STUDENT} from '../reducers/studentsReducer/constants';

export const listStudents = () => dispatch => {
    return get('students')
    .then(data => (
        dispatch({
            type: LIST_STUDENTS,
            data
        })
    ))
    .catch(error => {
        throw new Error('Error in response request', error.message);
    })
}

export const addStudent = data => dispatch => {
    return post('student', data)
    .then(data => {
        return dispatch({
            type: ADD_STUDENT,
            data
        })
    }).catch(error =>{
        throw new Error('Error in response request', error.message);
    });
}

export const editStudent =(id, name) => {
    return {
        type: EDIT_STUDENT,
        id,
        name
    }
}

export const removeStudent = index => dispatch => {
    return dispatch({
        type: REMOVE_STUDENT,
        index: index
      });
  };