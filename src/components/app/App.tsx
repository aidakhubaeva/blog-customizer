import { useState, CSSProperties } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from '../../constants/articleProps';
import styles from './App.module.scss';

const App = () => {
	const [articleSettings, setArticleSettings] =
		useState<ArticleStateType>(defaultArticleState);

	const handleApplySettings = (newSettings: ArticleStateType) => {
		setArticleSettings(newSettings);
	};

	const getStyleFromSettings = (settings: ArticleStateType): CSSProperties =>
		({
			'--font-family': settings.fontFamilyOption.value,
			'--font-size': settings.fontSizeOption.value,
			'--font-color': settings.fontColor.value,
			'--container-width': settings.contentWidth.value,
			'--bg-color': settings.backgroundColor.value,
		} as CSSProperties);

	return (
		<main className={styles.main} style={getStyleFromSettings(articleSettings)}>
			<ArticleParamsForm applySettings={handleApplySettings} />
			<Article />
		</main>
	);
};

export default App;
