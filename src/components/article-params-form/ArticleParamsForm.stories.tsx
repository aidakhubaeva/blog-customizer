import { Meta, Story } from '@storybook/react';
import { ArticleParamsForm, ArticleParamsFormProps } from './ArticleParamsForm';
import { action } from '@storybook/addon-actions';

// Настройка метаданных для Storybook
export default {
	title: 'Example/ArticleParamsForm',
	component: ArticleParamsForm,
} as Meta;

// Шаблон для создания историй
const Template: Story<ArticleParamsFormProps> = (args) => (
	<ArticleParamsForm {...args} />
);

// Создание истории для компонента
export const Default = Template.bind({});
Default.args = {
	applySettings: action('applySettings'),
};

// Вы можете добавить больше историй с различными состояниями
export const WithCustomSettings = Template.bind({});
WithCustomSettings.args = {
	applySettings: action('applySettings'),
};
