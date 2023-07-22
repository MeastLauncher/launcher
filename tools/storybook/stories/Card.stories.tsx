import type { Meta, StoryObj } from '@storybook/react';
import { Card, type CardProps } from '@meast/ui';

const meta = {
    title: 'Atoms/Card',
    component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: (
            <>
                <h1>Hello world</h1>
            </>
        )
    } satisfies CardProps
};
