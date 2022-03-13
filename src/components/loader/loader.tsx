import React from 'react';
import styles from './loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.loader}>
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