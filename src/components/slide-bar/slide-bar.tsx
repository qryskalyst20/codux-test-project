import styles from './slide-bar.module.scss';
import classNames from 'classnames';

export interface SlideBarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const SlideBar = ({ className }: SlideBarProps) => {
    return <div className={classNames(styles.root, className)}>SlideBar</div>;
};
