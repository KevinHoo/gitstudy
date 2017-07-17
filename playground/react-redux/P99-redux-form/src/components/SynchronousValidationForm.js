/**
 * Created by kevhu on 2017/7/14.
 */

import React from 'react'
import { FieldFormControl } from './FieldFormControls'
import { Field, reduxForm } from 'redux-form'
import { Form, ButtonToolbar, Button } from 'react-bootstrap'

const SynchronousValidationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting} = props
    return (<Form onSubmit={handleSubmit}>
        <Field name="username" type="text" component={FieldFormControl} label="Username" help="用户名称必须传递" />
        <Field name="email" type="email" component={FieldFormControl} label="Email" />
        <Field name="age" type="number" component={FieldFormControl} label="Age" />
        <Field name="sex" type="radio_group" component={FieldFormControl} label="Sex" values={[{"label":"Male", "value":"male"},{"label":"Female", "value":"female"}]} />
        <ButtonToolbar>
            <Button bsStyle="primary" type="submit" disabled={submitting}>
                {submitting ? <i /> : <i />} Submit
            </Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset}>
                Reset
            </Button>
        </ButtonToolbar>
    </Form>)
}

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    return errors;
}

export default reduxForm({
    form: 'syncValidation',
    validate
})(SynchronousValidationForm)