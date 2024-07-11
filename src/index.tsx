import clsx from 'clsx';
import { createRoot } from 'react-dom/client';
import { StrictMode, useState, CSSProperties } from 'react';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

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
		<div
			className={clsx(styles.main)}
			style={getStyleFromSettings(articleSettings)}>
			<ArticleParamsForm applySettings={handleApplySettings} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
