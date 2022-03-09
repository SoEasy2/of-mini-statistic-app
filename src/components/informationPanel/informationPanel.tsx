import React from 'react';
import styles from './informationPanel.module.scss';
import document from '../../assets/information/document.svg'
import message from '../../assets/information/message.svg'
import statics from '../../assets/information/statics.svg'
import user from '../../assets/information/user.svg'
import cx from "classnames";
import telegram from '../../assets/telegram.svg';

interface IProps{
    onClick(): void;
}

const InformationPanel:React.FC<IProps> = ({onClick}) => {
    return (
        <div className={styles.panel} onClick={onClick}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h4 className={styles.title}>Добро пожаловать! </h4>
                </div>
                <p className={styles.text}>Что может наш сервис?</p>
                <ul className={styles.list}>
                    <li className={cx(styles.item, styles.document)}>
                        <img src={document} alt="" className={styles.img}/>
                        <p className={styles.text}>
                            Быстрый доступ к информации
                        </p>
                    </li>
                    <li className={cx(styles.item, styles.statistic)}>
                        <img src={statics} alt="" className={styles.img}/>
                        <p className={styles.text}>
                            Ежедневная <br/> статистика модели
                        </p>
                    </li>
                    <li className={cx(styles.item, styles.message)}>
                        <img src={message} alt="" className={styles.img}/>
                        <p className={styles.text}>
                            Telegram-оповещение по сбору статистики
                        </p>
                    </li>
                    <li className={cx(styles.item, styles.user)}>
                        <img src={user} alt="" className={styles.img}/>
                        <p className={styles.text}>
                            Личный кабинет пользователя
                        </p>
                    </li>
                </ul>
                </div>
                <a href={'https://t.me/ofminiistatistics_bot'} target={'_blank'} className={styles.button}><p>Подписывайтесь на наш Telegram-канал</p><img src={telegram} alt=""/></a>
            </div>
        </div>
    );
};

export { InformationPanel };