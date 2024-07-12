import { useState, FormEvent } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { Text } from '../text';
import { Separator } from '../separator';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	defaultArticleState,
} from 'src/constants/articleProps';
import styles from './ArticleParamsForm.module.scss';

export type ArticleParamsFormProps = {
	applySettings: (value: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	applySettings,
}: ArticleParamsFormProps) => {
	const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);
	const [settings, setSettings] =
		useState<ArticleStateType>(defaultArticleState);

	const handleOptionChange = (fieldName: string) => (value: OptionType) => {
		setSettings((currentSettings) => ({
			...currentSettings,
			[fieldName]: value,
		}));
	};

	const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		applySettings(settings);
	};

	const handleFormReset = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSettings(defaultArticleState);
		applySettings(defaultArticleState);
	};

	const togglePanel = () => {
		setIsPanelOpen((currentIsPanelOpen) => !currentIsPanelOpen);
	};

	const handleOverlayClick = () => {
		console.log('Overlay clicked');
		togglePanel();
	};

	return (
		<>
			<ArrowButton onClick={togglePanel} isActive={isPanelOpen} />
			{isPanelOpen && (
				<>
					<div
						onClick={handleOverlayClick}
						className={`${styles.overlay} ${
							isPanelOpen ? styles.overlay_open : ''
						}`}></div>
					<aside
						onClick={(e) => e.stopPropagation()}
						className={`${styles.container} ${
							isPanelOpen ? styles.container_open : ''
						}`}>
						<form
							onSubmit={handleFormSubmit}
							onReset={handleFormReset}
							className={styles.form}>
							<Text uppercase={true} weight={800} size={31}>
								Задайте параметры
							</Text>
							<Select
								title='Шрифт'
								selected={settings.fontFamilyOption}
								options={fontFamilyOptions}
								onChange={handleOptionChange('fontFamilyOption')}
							/>
							<RadioGroup
								title='Размер шрифта'
								name='fontSizeOption'
								selected={settings.fontSizeOption}
								options={fontSizeOptions}
								onChange={handleOptionChange('fontSizeOption')}
							/>
							<Select
								title='Цвет шрифта'
								selected={settings.fontColor}
								options={fontColors}
								onChange={handleOptionChange('fontColor')}
							/>
							<Separator />
							<Select
								title='Цвет фона'
								selected={settings.backgroundColor}
								options={backgroundColors}
								onChange={handleOptionChange('backgroundColor')}
							/>
							<Select
								title='Ширина контента'
								selected={settings.contentWidth}
								options={contentWidthArr}
								onChange={handleOptionChange('contentWidth')}
							/>
							<div className={styles.bottomContainer}>
								<Button title='Сбросить' type='reset' />
								<Button title='Применить' type='submit' />
							</div>
						</form>
						<ArrowButton onClick={togglePanel} isActive={isPanelOpen} />
					</aside>
				</>
			)}
		</>
	);
};
