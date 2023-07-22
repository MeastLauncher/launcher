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

import type { ButtonProps } from '../../@types';
import type { ReactElement } from 'react';

/**
 * A basic button.
 */
export const Button = ({
    name,
    label,
    state = 'default',
    disabled = false,
    icon,
    title
}: ButtonProps): ReactElement => {
    return (
        <button name={name} className={state} disabled={disabled} title={title}>
            {icon ? <i className={icon}></i> : null} {label}
        </button>
    );
};
