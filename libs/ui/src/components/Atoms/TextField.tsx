/*
 * Copyright (C) 2023 Meast Team & its contributors
 *
 * This file is part of the Meast Launcher.
 *
 * Meast is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Meast is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Meast.  If not, see <http://www.gnu.org/licenses/>.
 */

import type { TextFieldProps } from '../../@types';
import type { ReactElement } from 'react';

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
    return (
        <div className={`text-field-control${disabled ? ' disabled' : ''}`}>
            {label ? (
                <label htmlFor={name} className="label">
                    {label}
                </label>
            ) : null}
            {iconLeft ? (
                <i
                    className={`icon-left ${iconLeftColor}-color ${iconLeft}`}
                ></i>
            ) : null}
            {iconRight ? (
                <i
                    className={`icon-right ${iconRightColor}-color ${iconRight}`}
                ></i>
            ) : null}
            <input
                type={inputType}
                className={`input ${state}-color${
                    iconLeft ? ' with-icon-left' : ''
                }${iconRight ? ' with-icon-right' : ''}`}
                disabled={disabled}
                value={value}
                title={title}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};
