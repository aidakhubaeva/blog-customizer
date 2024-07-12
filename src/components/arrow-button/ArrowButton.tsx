import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';

export type OnClick = () => void;

export const ArrowButton = ({
	onClick,
	isActive,
}: {
	onClick: OnClick;
	isActive: boolean;
}) => {
	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={`${styles.containerButton} ${isActive ? styles.active : ''}`}
			onClick={onClick}
			onKeyDown={(e) => {
				if (e.key === 'Enter') onClick();
			}}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={`${styles.arrow} ${isActive ? styles.arrowClose : ''}`}
			/>
		</div>
	);
};
