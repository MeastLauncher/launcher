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
import { Button, type ButtonProps } from '@meast/ui';

const meta = {
    title: 'Atoms/Button',
    component: Button
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        name: 'button',
        label: 'A button',
        title: 'A simple button'
    } satisfies ButtonProps
};

export const Success: Story = {
    args: {
        name: 'button',
        label: 'A success button',
        state: 'success',
        title: 'A success button'
    } satisfies ButtonProps
};

export const Error: Story = {
    args: {
        name: 'button',
        label: 'An error button',
        state: 'error',
        title: 'An error button'
    } satisfies ButtonProps
};

export const Disabled: Story = {
    args: {
        name: 'button',
        label: 'A disabled button',
        disabled: true,
        title: 'A disabled button'
    } satisfies ButtonProps
};

export const WithIcon: Story = {
    args: {
        name: 'button',
        label: 'A button with icon',
        icon: 'fa-solid fa-house',
        title: 'A button with icon'
    } satisfies ButtonProps
};
