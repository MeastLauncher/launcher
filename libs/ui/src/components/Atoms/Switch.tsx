import { CheckboxProps } from '../../@types';
import React, { memo } from 'react';

/**
 * A checkbox like a switch (another design)
 */
export const Switch = memo(({
                           label,
                           disabled,
                           onChange,
                           title,
                           state = 'default',
                           name,
                           checked
                       }: CheckboxProps): React.ReactElement => {
    return <label
        className={`switch-container ${disabled ? 'switch-disabled' : ''}`}
        title={title}
    >
        <input
            type="checkbox"
            name={name}
            id={name}
            disabled={disabled}
            className="input"
            onChange={onChange}
            defaultChecked={checked}
        />
        <div className={`switch-ui ${state}-color`}/>
        {label}
    </label>
});