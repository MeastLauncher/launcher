import { TextFieldProps } from '../../@types';
import { ReactElement } from 'react';

export const TextField = ({
                              label,
                              disabled,
                              iconLeft,
                              iconRight,
                              name,
                              inputType = 'text',
                              value,
                              placeholder,
                              state = 'default',
                              title,
                              iconLeftColor = 'default',
                              iconRightColor = 'default',
                              onChange
                          }: TextFieldProps): ReactElement => {
    return <div className={`text-field-control${disabled === 'true' || disabled === true ? ' disabled' : ''}`}>
        {label ? <label htmlFor={name} className="label">{label}</label> : null}
        {iconLeft ? <i className={`icon-left ${iconLeftColor}-color ${iconLeft}`}></i> : null}
        {iconRight ? <i className={`icon-right ${iconRightColor}-color ${iconRight}`}></i> : null}
        <input
            type={inputType}
            className={`input ${state}-color${iconLeft ? ' with-icon-left' : ''}${iconRight ? ' with-icon-right' : ''}`}
            disabled={disabled === 'true' || disabled === true}
            value={value}
            title={title}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
}