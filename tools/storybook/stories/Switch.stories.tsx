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

import type { Meta, StoryObj } from '@storybook/react';
import { type CheckboxProps, Switch } from '@meast/ui';

const meta = {
    title: 'Atoms/Checkboxes/Switch',
    component: Switch
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'A switch input',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Success: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'A success switch input',
        state: 'success',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Error: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'An error switch input',
        state: 'error',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};

export const Disabled: Story = {
    args: {
        name: 'switch',
        title: 'A switch',
        label: 'A disabled switch input',
        disabled: true,
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};
