import React, { Component } from 'react';
import { List, Input, Icon } from 'antd';

class Students extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }
  componentDidMount() {
    this.props.listStudents();
  }

  removeStudent = () => {};
  //   handleChangeName = (value, data, index, event) => {
  //     const { name } = this.state;
  //     const { editStudent } = this.props;

  //     let newData = { name };

  //     editStudent(newData, index);
  //   };

  handleChangeName = (student, name) => {
    const { editStudent } = this.props;
    student.name = name;
    editStudent(student);
  };

  handleChangeRg = (student, rg) => {
    const { editStudent } = this.props;
    student.rg = rg;
    editStudent(student)
  };

  handleChangeMatricula = (student, matricula) => {
    const {editStudent} = this.props;
    student.matricula = matricula;
    editStudent(student)
  }
  render() {
    const { students, removeStudent } = this.props;

    return (
      <div>
        <List
          bordered
          dataSource={students}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <Input
                value={item.name}
                onChange={name =>
                  this.handleChangeName(item, name.target.value)}
              />{' '}
              <Input
                value={item.rg}
                onChange={rg =>
                  this.handleChangeRg(item, rg.target.value)}
              />{' '}
              <Input
                value={item.matricula}
                onChange={matricula =>
                  this.handleChangeMatricula(item, matricula.target.value)}
              />{' '}
              <Icon type="delete" onClick={() => removeStudent(item.id)} />{' '}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default Students;
