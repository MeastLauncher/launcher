import type { ReactElement } from 'react';
import type { RadioButtonProps } from '../../@types';

export const RadioButton = ({
    label,
    state = 'default',
    disabled,
    title,
    checked,
    onChange,
    name,
    id
}: RadioButtonProps): ReactElement => {
    return (
        <label
            className={`radio-container ${disabled ? 'radio-disabled' : ''}`}
            title={title}
        >
            <input
                type="radio"
                name={name}
                id={id}
                disabled={disabled}
                className="input"
                onChange={onChange}
                defaultChecked={checked}
            />
            <div className={`radio-ui ${state}-color`} />
            {label}
        </label>
    );
};
