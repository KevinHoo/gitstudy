/**
 * Created by kevhu on 2017/7/12.
 */
import React from 'react'
import SimpleForm from './SimpleForm'
import SynchronousValidation from './SynchronousValidationForm'

import { Row, Col, PageHeader } from 'react-bootstrap'

const App = () => (
    <div>
        <PageHeader>Simple Form <small>form without validate</small></PageHeader>
        <Row>
            <Col md={6} mdOffset={3} >
                <SynchronousValidation onSubmit={values=>{console.log(values)}} />
            </Col>
        </Row>
    </div>
)

export default App
