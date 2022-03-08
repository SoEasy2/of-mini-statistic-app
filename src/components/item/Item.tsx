import React, {useEffect, useState} from 'react';
import styles from './Item.module.scss';
import publication from '../../assets/item/publication.png';
import like from '../../assets/item/like.png'
import users from '../../assets/item/users.png'
import video from '../../assets/item/video.png'
import graphic from '../../assets/graphic.png';
import {ISearch} from "../../models/search";

interface IProps{
    item: ISearch
}

const Item: React.FC<IProps> = ({ item }) => {
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <img src="" alt="NETU IMG V BEKE" className={styles.img}/>
                    <h4 className={styles.name}>NETU V BEKE NAME</h4>
                </div>
            </div>
                <div className={styles.info}>
                    <div className={styles.wrapper}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}><img src={publication} alt=""/> <p className={styles.text}>Публикаций</p></div>
                            <p className={styles.kol}>{item.photosCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={video} alt=""/> <p className={styles.text}>Видео</p>
                            </div>
                            <p className={styles.kol}>{item.videosCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={like} alt=""/> <p className={styles.text}>Лайков</p>
                            </div>
                            <p className={styles.kol}>{item.likesCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={users} alt=""/> <p className={styles.text}>Подписчиков</p>
                            </div>
                            <p className={styles.kol}>{item.subscribersCount}</p>
                        </li>
                    </ul>
                </div>
                </div>
                <div className={styles.graphic}>
                    <div className={styles.wrapper}>
                    <div className={styles.contentGraphic}>
                        Подписчики
                        <img src={graphic} alt="" className={styles.imgGraphic}/>
                    </div>
                        <div className={styles.blur}>
                            <div className={styles.text}>
                                <button className={styles.signUp}>Зарегистрируйтесь, </button>
                                <p> чтобы просматривать детальную статистику</p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Item;