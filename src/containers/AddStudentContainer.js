import { connect } from 'react-redux';
import { listStudents, addStudent } from '../actions/studentsAction';
import AddStudent from '../components/Students/AddStudent';

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => ({
    addStudent: data => {
        return dispatch(addStudent())
    },
    listStudents: () => {
        return dispatch(listStudents())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);