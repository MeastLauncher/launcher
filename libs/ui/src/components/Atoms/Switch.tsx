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

import type { CheckboxProps } from '../../@types';
import { memo, type ReactElement } from 'react';

/**
 * A checkbox like a switch (another design)
 */
export const Switch = memo(
    ({
        label,
        disabled,
        onChange,
        title,
        state = 'default',
        name,
        checked
    }: CheckboxProps): ReactElement => {
        return (
            <label
                className={`switch-container ${
                    disabled ? 'switch-disabled' : ''
                }`}
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
                <div className={`switch-ui ${state}-color`} />
                {label}
            </label>
        );
    }
);
