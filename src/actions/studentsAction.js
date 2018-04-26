import { get, post, patch, remove } from '../modules/request';
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
    return post('students', data)
    .then(data => {
        return dispatch({
            type: ADD_STUDENT,
            data
        })
    }).catch(error =>{
        throw new Error('Error in response request', error.message);
    });
}

export const editStudent =(data)  => dispatch => {
    return patch(`students/${data.id}`, data)
    .then(index => (
        dispatch({
            type: REMOVE_STUDENT,
            data
        })
    ))
    .catch(error => {
        throw new Error('Error in response request', error.message);
    })
}

export const removeStudent = id => dispatch => {
    return remove(`students/${id}`)
    .then(index => (
        dispatch({
            type: REMOVE_STUDENT,
            id
        })
    ))
    .catch(error => {
        throw new Error('Error in response request', error.message);
    })
  };