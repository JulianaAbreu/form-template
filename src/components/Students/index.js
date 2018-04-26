import React, { Component } from 'react';
import { List, Input, Icon } from 'antd';

class Students extends Component {

    componentDidMount() {
        this.props.listStudents();
        this.props.removeStudent();
    }

    removeStudent = () => {

    }
    handleChangeName = (event) => {

    }
    handleChangeRg = (event) => {

    }
    render() {
        console.log(this.props)
        const { students, removeStudent, editStudent } = this.props;

        return (
            <div>
                <List
                    bordered
                    dataSource={students}
                    renderItem={(item, index) => (<List.Item key={index}><Input  value={item.name} contentEditable onChange={(e) => editStudent(item.id, e.target.value)} /> <Icon type="delete" onClick={() => removeStudent(index)} /> </List.Item>)}
                />
            </div>
        )
    }
}

export default Students