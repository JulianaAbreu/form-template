import { connect } from 'react-redux';
import { listStudents, removeStudent, editStudent } from '../actions/studentsAction';
import Students from '../components/Students';

const mapStateToProps = state => {
    return {
        students: state.studentsReducer
    };
}

const mapDispatchToProps = dispatch => ({
    listStudents: () => {
        dispatch(listStudents());
    },
    removeStudent: (index) => {
        dispatch(removeStudent(index))
      },
    editStudent: (name, index) => {
        dispatch(editStudent(name, index))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Students);