import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

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
			onClick={onClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isActive && styles.arrowClose)}
			/>
		</div>
	);
};
