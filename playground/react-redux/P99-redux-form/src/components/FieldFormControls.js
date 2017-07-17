/**
 * Created by kevhu on 2017/7/13.
 */

import React from 'react'
import {FormControl, FormGroup, HelpBlock, ControlLabel, Col, Radio, Checkbox} from 'react-bootstrap'

const INPUT_TEXT = 'text'
const INPUT_EMAIL= 'email'
const INPUT_NUMBER = 'number'
const INPUT_PASSWORD = 'password'
const INPUT_SELECT = 'select'
const INPUT_RADIO_GROUP = 'radio_group'
const INPUT_CHECKBOX_GROUP = 'checkbox_group'
const INPUT_CHECKBOX = 'checkbox'
const INPUT_TEXTAREA = 'textarea'

const FieldContainerInline =  ({label, name, help, formControl, error, touched}) => (
    <FormGroup controlId={name} validationState={error && touched ? 'error' : null}>
        <Col componentClass={ControlLabel} xs={3}>{label}</Col>
        <Col xs={5}>
            {formControl}
        </Col>
        <Col xs={4}>
            {/* 如果有错误信息，那么显示错误信息，否则显示Help */}
            {error && touched ? <div className="text-danger">{error}</div> : help && <HelpBlock>{help}</HelpBlock>}
        </Col>
    </FormGroup>
)

const FieldContainerDefault =  ({label, name, help, formControl, error, touched}) => (
    <FormGroup controlId={name}>
        <ControlLabel>{label}</ControlLabel>
        {formControl}
        {error && touched ? <div className="text-danger">{error}</div> : help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
)

export const FieldInput = ({input, label, type, help, layout="inline"}) => {
    const formControl = <FormControl {...input} placeholder={label} type={type} />
    if (layout !== "inline") return <FieldContainerDefault label={label} name={input.name} help={help} formControl={formControl}/>
    return (<FieldContainerInline label={label} name={input.name} help={help} formControl={formControl} />)
}

export const FieldRadioGroup = ({input, values, defaultValue, label, help, layout="inline"}) => {
    const formControl = <div>{values.map(el => (<Radio key={el.value} name={input.name} value={el.value} defaultChecked={el.value === defaultValue} inline>{el.label}</Radio>))}</div>
    if (layout !== "inline") return <FieldContainerDefault label={label} name={input.name} help={help} formControl={formControl}/>
    return (<FieldContainerInline label={label} name={input.name} help={help} formControl={formControl} />)
}

export const FieldCheckbox = ({input, label, help, layout="inline"}) => {
    const formControl = <div><Checkbox inline {...input}>{label}</Checkbox></div>
    if (layout !== "inline") return <FieldContainerDefault label={label} name={input.name} help={help} formControl={formControl}/>
    return (<FieldContainerInline label={label} name={input.name} help={help} formControl={formControl} />)
}

export const FieldCheckboxGroup = ({input, values, defaultValues, label, help, layout="inline"}) => {
    const formControl = <div>{values.map(el=>(<Checkbox inline value={el.value} defaultChecked={defaultValues.indexOf(el.value)!==false}>{el.label}</Checkbox>))}</div>
    if (layout !== "inline") return <FieldContainerDefault label={label} name={input.name} help={help} formControl={formControl}/>
    return (<FieldContainerInline label={label} name={input.name} help={help} formControl={formControl} />)
}

export const FieldSelect = ({input, options, defaultValue, label, help, layout="inline"}) => {
    const formControl = <FormControl name={input.name} componentClass="select" defaultValue={defaultValue} >
        <option></option>
        {options.map(el=>(<option key={el.value} value={el.value}>{el.label}</option>))}
    </FormControl>
    if (layout !== "inline") return <FieldContainerDefault label={label} name={input.name} help={help} formControl={formControl}/>
    return (<FieldContainerInline label={label} name={input.name} help={help} formControl={formControl} />)
}

export const FieldTextarea = ({input, label, help, layout="inline"}) => {
    const formControl = <FormControl {...input} componentClass="textarea" placeholder={label}/>
    if (layout !== "inline") return <FieldContainerDefault label={label} name={input.name} help={help} formControl={formControl}/>
    return (<FieldContainerInline label={label} name={input.name} help={help} formControl={formControl} />)
}


export const FieldFormControl = (field) => {
    const {input, label, help, type, layout, meta: {touched, error, warning}} = field
    let formControl, values, options, defaultValue, defaultValues;
    switch (type) {
        case INPUT_TEXT:
        case INPUT_NUMBER:
        case INPUT_EMAIL:
        case INPUT_PASSWORD:
            formControl = <FormControl {...input} placeholder={label} type={type} />
            break
        case INPUT_RADIO_GROUP:
            values = field.values
            defaultValue = field.defaultValue
            formControl = <div>{values.map(el => (<Radio key={el.value} name={input.name} value={el.value} defaultChecked={el.value === defaultValue} inline>{el.label}</Radio>))}</div>
            break
        case INPUT_CHECKBOX:
            formControl = <div><Checkbox inline {...input}>{label}</Checkbox></div>
            break
        case INPUT_CHECKBOX_GROUP:
            values = field.values
            defaultValues = field.defaultValues
            formControl = <div>{values.map(el=>(<Checkbox inline value={el.value} defaultChecked={defaultValues.indexOf(el.value)!==false}>{el.label}</Checkbox>))}</div>
            break
        case INPUT_SELECT:
            options = field.options;
            formControl = <FormControl name={input.name} componentClass="select" defaultValue={defaultValue} >
                <option></option>
                {options.map(el=>(<option key={el.value} value={el.value}>{el.label}</option>))}
            </FormControl>
            break
        case INPUT_TEXTAREA:
            formControl = <FormControl {...input} componentClass="textarea" placeholder={label}/>
            break
        default:
            formControl = null
    }

    if (layout && layout === 'inline'){
        return <FieldContainerInline label={label} name={input.name} help={help} formControl={formControl} touched={touched} error={error} warning={warning} />
    }else {
        return <FieldContainerDefault label={label} name={input.name} help={help} formControl={formControl} touched={touched} error={error} warning={warning} />
    }
}