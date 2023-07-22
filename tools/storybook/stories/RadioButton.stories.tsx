import type { StoryObj } from '@storybook/react';
import { RadioButton, type RadioButtonProps } from '@meast/ui';

const meta = {
    title: 'Atoms/RadioButton',
    component: RadioButton,
    render: args => (
        <div style={{ display: 'flex', gap: 'var(--size)' }}>
            <RadioButton {...args} />
            <RadioButton {...args} />
            <RadioButton {...args} />
        </div>
    )
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        name: 'radio',
        label: 'Radio Button',
        onChange: e => console.log(e.target.checked)
    } satisfies RadioButtonProps
};
