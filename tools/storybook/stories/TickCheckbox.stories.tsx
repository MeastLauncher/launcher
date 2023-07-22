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
import { type CheckboxProps, TickCheckbox } from '@meast/ui';

const meta = {
    title: 'Atoms/Checkboxes/TickCheckbox',
    component: TickCheckbox
} satisfies Meta<typeof TickCheckbox>;

export default meta;

type Story = StoryObj<typeof TickCheckbox>;

export const Default: Story = {
    args: {
        name: 'tick-checkbox',
        label: 'A tick checkbox',
        onChange: e => console.log(e.target.checked)
    } satisfies CheckboxProps
};
