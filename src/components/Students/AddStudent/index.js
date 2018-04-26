import React, { Component } from 'react';
import { Input, Button } from 'antd';

class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            rg: '',
            matricula: ''
        }
    }

    handleChangeName = e => {
        this.setState({
          name: e.target.value
        });
      };
      handleChangeRg = e => {
        this.setState({
          rg: e.target.value
        })
      }
      handleChangeMatricula = e => {
        this.setState({
          matricula: e.target.value
        })
      }
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
        const { name, rg, matricula } = this.state;
        if (!name || !rg || !matricula) {
            console.log("Preencha   o campo");
            return false
        }
        else {
            return true;
        }
    }
    submitStudents = () => {
        const { name, rg, matricula } = this.state;
        const { listStudents, addStudent } = this.props;
        
        if (this.validFieldsStudent()) {
          const dataStudent = {
            name: name,
            rg: rg,
            matricula: matricula
          };
          addStudent(dataStudent).then(() => {
            listStudents();
          });
        }
        this.setState({
          name: name,
          rg: rg,
          matricula: matricula
        });
      };

    render() {
        return (
            <div>
                <Input placeholder="Name" onChange={this.handleChangeName} />
                <Input placeholder="RG" onChange={this.handleChangeRg} />
                <Input placeholder="Matrícula" onChange={this.handleChangeMatricula} />
                <Button type="primary" onClick = {this.submitStudents}>Inserir</Button>
            </div>
        )
    }
}

export default AddStudent;