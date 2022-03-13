import React from 'react';
import cx from "classnames";
import styles from './information.module.scss';
import Info from '../../assets/info.svg';

interface IProps{
    className?: string;
    onClick(): void
}

const Information:React.FC<IProps> = ({ className , onClick}) => {
    return (
        <div className={cx(styles.information, className)} onClick={onClick}>
            <img src={Info} alt=""/>
        </div>
    );
};

export { Information };