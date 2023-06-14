import React from 'react';
import { CheckboxProps } from '../../@types';

/**
 * A basic checkbox
 */
export const Checkbox = ({
                             name,
                             label,
                             onChange,
                             state = 'default',
                             disabled,
                             title,
                             checked
                         }: CheckboxProps): React.ReactElement => {
    return <label
        className={`checkbox-container ${disabled ? 'checkbox-disabled' : ''}`}
        title={title}
    >
        <input
            type="checkbox"
            name={name}
            id={name}
            disabled={disabled}
            className="input"
            onChange={onChange}
            checked={checked}
        />
        <div className={`checkbox-ui ${state}-color`}/>
        {label}
    </label>
}