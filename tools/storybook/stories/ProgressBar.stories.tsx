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
import { ProgressBar, type ProgressBarProps } from '@meast/ui';

const meta = {
    title: 'Atoms/ProgressBar',
    component: ProgressBar
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Empty: Story = {
    args: {
        percentage: 0
    } satisfies ProgressBarProps
};

export const Default: Story = {
    args: {
        percentage: 80
    } satisfies ProgressBarProps
};

export const Success: Story = {
    args: {
        percentage: 80,
        state: 'success'
    } satisfies ProgressBarProps
};

export const Error: Story = {
    args: {
        percentage: 80,
        state: 'error'
    } satisfies ProgressBarProps
};

export const Complete: Story = {
    args: {
        percentage: 100
    } satisfies ProgressBarProps
};

export const WithPercentageShown: Story = {
    args: {
        percentage: 80,
        showPercentage: true
    } satisfies ProgressBarProps
};
