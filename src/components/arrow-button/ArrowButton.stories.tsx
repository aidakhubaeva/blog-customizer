import { Meta, Story } from '@storybook/react';
import { ArrowButton, OnClick } from './ArrowButton';
import { action } from '@storybook/addon-actions';

// Настройка метаданных для Storybook
export default {
	title: 'Example/ArrowButton',
	component: ArrowButton,
} as Meta;

// Шаблон для создания историй
const Template: Story<{ onClick: OnClick; isActive: boolean }> = (args) => (
	<ArrowButton {...args} />
);

// Создание истории для компонента
export const Default = Template.bind({});
Default.args = {
	onClick: action('button-click'), // Логирование действия при клике
	isActive: false, // Состояние по умолчанию
};

export const Active = Template.bind({});
Active.args = {
	onClick: action('button-click'), // Логирование действия при клике
	isActive: true, // Активное состояние
};
