import React from 'react';
import styles from './item.module.scss';

const Item = () => {
    return (
        <div className={styles.statistic}>
            <div className={styles.content}>
                <div className={styles.likes}>
                    <div className={styles.wrapper}>
                    <p className={styles.kol}>100 000</p>
                    <div className={styles.kolChange}><p className={styles.textChange}>+800</p></div>
                    </div>
                </div>
                <div className={styles.date}>
                    <p className={styles.kol}>15.04.2003</p>

                </div>
                <div className={styles.subscribs}>
                    <div className={styles.wrapper}>
                    <div className={styles.kolSubChange}><p className={styles.textChange}>+300</p></div>
                    <p className={styles.kol}>800 400</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Item };