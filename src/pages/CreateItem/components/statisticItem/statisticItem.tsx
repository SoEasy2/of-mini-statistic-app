import React from 'react';
import styles from './statisticItem.module.scss';
import {Item} from "./components";

interface IProps{
    onClick():void;
}

const StatisticItem:React.FC<IProps> = ({ onClick }) => {
    return (
        <div className={styles.statisticItem}>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <p className={styles.headText}>Лайков</p>
                    <p className={styles.headText}>Дата</p>
                    <p className={styles.headText}>Подписчиков</p>
                </div>
                    <Item />
                <Item /><Item />
                <div className={styles.content}>
                    <div className={styles.likes}>
                        <div className={styles.wrapper}>
                            <p className={styles.kol}>100 000</p>
                            <div className={styles.kolChange}><p className={styles.textChange}>+800</p></div>
                        </div>
                    </div>
                    <div className={styles.date}>
                        <p className={styles.dateText}>15.04.2003</p>

                    </div>
                    <div className={styles.subscribs}>
                        <div className={styles.wrapper}>
                            <div className={styles.kolSubChange}><p className={styles.textChange}>+300</p></div>
                            <p className={styles.kol}>800 400</p>
                        </div>
                    </div>
                </div>

                    <div className={styles.bottom}>
                        <button className={styles.button} onClick={onClick}>Статистика</button>
                        <div className={styles.notifyWrapper}>
                            <p className={styles.notifyText}>Уведомления</p>
                            <input type="checkbox"/>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export { StatisticItem };