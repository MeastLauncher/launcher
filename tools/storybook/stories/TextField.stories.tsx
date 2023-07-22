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
import { TextField, type TextFieldProps } from '@meast/ui';

const meta = {
    title: 'Atoms/TextField',
    component: TextField
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        onChange: e => console.log(e.target.value)
    } satisfies TextFieldProps
};

export const Success: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'success',
        onChange: e => console.log(e.target.value)
    } satisfies TextFieldProps
};

export const Error: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'error',
        onChange: e => console.log(e.target.value)
    } satisfies TextFieldProps
};

export const Disabled: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        disabled: true,
        onChange: e => console.log(e.target.value)
    } satisfies TextFieldProps
};

export const WithLabel: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        label: 'Label of the field',
        onChange: e => console.log(e.target.value)
    } satisfies TextFieldProps
};

export const WithIcons: Story = {
    args: {
        name: 'input',
        title: 'An input',
        placeholder: 'Input placeholder',
        inputType: 'text',
        state: 'default',
        iconLeft: 'fa-solid fa-envelope',
        iconRight: 'fa-solid fa-check',
        onChange: e => console.log(e.target.value)
    } satisfies TextFieldProps
};
