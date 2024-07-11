import { useState, FormEvent } from 'react';
import clsx from 'clsx'; // Импорт библиотеки clsx для условного объединения классов
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Text } from '../text';
import { Separator } from '../separator';
import {
	ArticleStateType, // Тип для состояния статьи
	OptionType, // Тип для опций
	backgroundColors, // Константы для цвета фона
	contentWidthArr, // Константы для ширины контента
	fontColors, // Константы для цвета шрифта
	fontFamilyOptions, // Константы для семейства шрифтов
	fontSizeOptions, // Константы для размеров шрифта
	defaultArticleState, // Константа для состояния статьи по умолчанию
} from 'src/constants/articleProps'; // Импорт всех констант и типов из файла articleProps
import styles from './ArticleParamsForm.module.scss'; // Импорт CSS-модулей для стилей компонента

// Типы пропсов компонента ArticleParamsForm
export type ArticleParamsFormProps = {
	applySettings: (value: ArticleStateType) => void; // Функция для применения настроек
};

// Компонент ArticleParamsForm
export const ArticleParamsForm = ({
	applySettings,
}: ArticleParamsFormProps) => {
	const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false); // Хук для управления состоянием панели (открыта/закрыта)
	const [settings, setSettings] =
		useState<ArticleStateType>(defaultArticleState); // Хук для управления состоянием настроек статьи

	// Функция для обработки изменения опции
	const handleOptionChange = (fieldName: string) => (value: OptionType) => {
		setSettings((currentSettings) => ({
			...currentSettings,
			[fieldName]: value,
		}));
	};

	// Функция для обработки отправки формы
	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		applySettings(settings);
	};

	// Функция для обработки сброса формы
	const handleFormReset = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSettings(defaultArticleState);
		applySettings(defaultArticleState);
	};

	// Функция для переключения состояния панели (открыта/закрыта)
	const togglePanel = () => {
		setIsPanelOpen((currentIsPanelOpen) => !currentIsPanelOpen);
	};

	return (
		<>
			{/* Кнопка для открытия/закрытия панели */}
			<ArrowButton onClick={togglePanel} isActive={isPanelOpen} />
			{isPanelOpen && (
				<>
					<div
						onClick={togglePanel}
						className={clsx(
							styles.overlay,
							isPanelOpen && styles.overlay_open
						)}></div>
					{/* Панель с настройками */}
					<aside
						className={clsx(
							styles.container,
							isPanelOpen && styles.container_open
						)}>
						<form
							onSubmit={handleFormSubmit}
							onReset={handleFormReset}
							className={styles.form}>
							{/* Заголовок формы */}
							<Text uppercase={true} weight={800} size={31}>
								Задайте параметры
							</Text>
							{/* Выпадающий список для выбора шрифта */}
							<Select
								title='Шрифт'
								selected={settings.fontFamilyOption}
								options={fontFamilyOptions}
								onChange={handleOptionChange('fontFamilyOption')}
							/>
							{/* Радио-группа для выбора размера шрифта */}
							<RadioGroup
								title='Размер шрифта'
								name='fontSizeOption'
								selected={settings.fontSizeOption}
								options={fontSizeOptions}
								onChange={handleOptionChange('fontSizeOption')}
							/>
							{/* Выпадающий список для выбора цвета шрифта */}
							<Select
								title='Цвет шрифта'
								selected={settings.fontColor}
								options={fontColors}
								onChange={handleOptionChange('fontColor')}
							/>
							{/* Разделитель */}
							<Separator />
							{/* Выпадающий список для выбора цвета фона */}
							<Select
								title='Цвет фона'
								selected={settings.backgroundColor}
								options={backgroundColors}
								onChange={handleOptionChange('backgroundColor')}
							/>
							{/* Выпадающий список для выбора ширины контента */}
							<Select
								title='Ширина контента'
								selected={settings.contentWidth}
								options={contentWidthArr}
								onChange={handleOptionChange('contentWidth')}
							/>
							{/* Кнопки для сброса и применения настроек */}
							<div className={styles.bottomContainer}>
								<Button title='Сбросить' type='reset' />
								<Button title='Применить' type='submit' />
							</div>
						</form>
						{/* Кнопка для закрытия панели */}
						<ArrowButton onClick={togglePanel} isActive={isPanelOpen} />
					</aside>
				</>
			)}
		</>
	);
};
