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
