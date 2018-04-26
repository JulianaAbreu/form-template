import React, { Component } from 'react';
import { Input, Button } from 'antd';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChangeName = e => {
        this.setState({
          name: e.target.value
        });
      };

      validFieldsStudent = () => {
        const { name } = this.state;
        if (!name) {
          console.log("Preencha os campos");
          return false;
        } else {
          return true;
        }
      };
    

    validFields = () => {
        const { name } = this.state;
        if (!name) {
            console.log("Preencha   o campo");
            return false
        }
        else {
            return true;
        }
    }
    submitStudents = () => {
        const { name } = this.state;
        const { listStudents, addStudent } = this.props;
        
        if (this.validFieldsStudent()) {
          const dataStudent = {
            name: name,
          };
          addStudent(dataStudent).then(() => {
            listStudents();
          });
        }
        this.setState({
          name: name,
    
        });
      };

    render() {
        return (
            <div>
                <Input placeholder="Basic usage" onChange={this.handleChangeName} />
                <Button type="primary" onClick = {this.submitStudents}>Primary</Button>
            </div>
        )
    }
}

export default AddStudent;