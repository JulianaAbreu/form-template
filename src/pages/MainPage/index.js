import React from 'react';
import { Row, Col } from 'antd';

import AddStudentContainer from '../../containers/AddStudentContainer';
import ListStudentsContainer from '../../containers/ListStudentsContainer';

const MainPage = () => {
    return(
        <Row className="content-mainpage">
            <Col span={16} offset={4}>
                <div className="add-student">
                    <AddStudentContainer />
                </div>
                <div>
                    <ListStudentsContainer />
                </div>
            </Col>
        </Row>
    )
}

export default MainPage;