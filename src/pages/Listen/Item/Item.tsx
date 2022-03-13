import React from "react";
import styles from "../../../components/item/Item.module.scss";
import publication from "../../../assets/item/publication.png";
import video from "../../../assets/item/video.png";
import like from "../../../assets/item/like.png";
import users from "../../../assets/item/users.png";
import graphic from "../../../assets/graphic.png";
import close from '../../../assets/close.svg';
import {useNavigate} from "react-router-dom";


interface IProps{
    item: any;
}

const Item: React.FC<IProps> = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <div className={styles.left}>
                        <img src={item.model.avatarUrl} alt="NETU IMG V BEKE" className={styles.img}/>
                        <h4 className={styles.name}>{item.model.name}</h4>
                    </div>
                    <div className="right">
                        <button className={styles.buttonClose} onClick={() => navigate(-1)}><img src={close} alt=""/></button>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}><img src={publication} alt=""/> <p className={styles.text}>Публикаций</p></div>
                            <p className={styles.kol}>{item.current.photosCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={video} alt=""/> <p className={styles.text}>Видео</p>
                            </div>
                            <p className={styles.kol}>{item.current.videosCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={like} alt=""/> <p className={styles.text}>Лайков</p>
                            </div>
                            <p className={styles.kol}>{item.current.likesCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={users} alt=""/> <p className={styles.text}>Подписчиков</p>
                            </div>
                            <p className={styles.kol}>{item.current.subscribersCount}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.graphic}>
                <div className={styles.wrapper}>
                    <div className={styles.contentGraphic}>
                        <p className={styles.titleGraphic}>Подписчики</p>
                        <img src={graphic} alt="" className={styles.imgGraphic}/>
                    </div>
                    <div className={styles.contentGraphic}>
                        <p className={styles.titleGraphic}>Лайки</p>
                        <img src={graphic} alt="" className={styles.imgGraphic}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Item;