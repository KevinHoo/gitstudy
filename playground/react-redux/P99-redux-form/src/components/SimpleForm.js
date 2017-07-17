/**
 * Created by kevhu on 2017/7/13.
 */

/**
 * reduxForm props
 * 1. pristine 原始没有修改过的表单 pristine=true 没有修改过， pristine=false && dirty=true 修改过
 * 2. dirty 修过的表单 dirty=true 修改过的表单
 * 3.
 */

import React from 'react'
import {Col, Form, ButtonToolbar, Button} from 'react-bootstrap'
import {Field, reduxForm} from 'redux-form'

import {FieldInput, FieldRadioGroup, FieldSelect, FieldCheckbox, FieldTextarea} from './FieldFormControls'

const SimpleForm  = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    const sex = [{"label": "Male", "value": "male"}, {"label": "Female", "value": "female"}]
    const options =[{"label": "Red", "value": "ff0000"}, {"label":"Green", "value":"00ff00"}, {"label":"Blue", "value":"0000ff"}]

    return (<Form horizontal onSubmit={handleSubmit}>
        <Field name="firstName" component={FieldInput} type="text" label="First Name" help="require first name" />
        <Field name="lastName" component={FieldInput} type="text" label="Last Name" help="require last name" />
        <Field name="email" component={FieldInput} type="email" label="Email" help="require email" />
        <Field name="sex" component={FieldRadioGroup} label="Sex" help="need sex" values={sex} defaultValue="female" />
        <Field name="favoriteColor" component={FieldSelect} label="Favorite Color" options={options} defaultValue="00ff00"/>
        <Field name="employed" component={FieldCheckbox} label="Employed"/>
        <Field name="notes" component={FieldTextarea} label="Notes"/>
        <Col md={6} mdOffset={3}>
            <ButtonToolbar>
                <Button type="submit" bsStyle="primary" disabled={pristine || submitting}>{submitting ? <i /> : <i />} Submit</Button>
                <Button onClick={reset} disabled={pristine || submitting}>Clear Values</Button>
            </ButtonToolbar>
        </Col>
    </Form>)
}

export default reduxForm({
    form:"simple"
})(SimpleForm)
