import React from 'react';
import styles from './loader.module.scss';
import cx from "classnames";

interface IProps{
    className?: string
}

const Loader:React.FC<IProps> = ({className}) => {
    return (
        <div className={cx(styles.loader, className)}>
            <div className={styles.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export { Loader };