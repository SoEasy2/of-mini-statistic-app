import React, {useEffect, useState} from 'react';
import styles from './Item.module.scss';
import publication from '../../assets/item/publication.png';
import like from '../../assets/item/like.png'
import users from '../../assets/item/users.png'
import video from '../../assets/item/video.png'
import graphic from '../../assets/graphic.png';
import {useNavigate, useParams} from "react-router-dom";
import cx from "classnames";
import searchFilter from '../../assets/filterSearch.svg';
import itemOne from "../../assets/itemOne.svg";
import itemTwo from "../../assets/itemTwo.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {IModel} from "../../redux/user/types";
import {fetchAddModel, fetchDelete} from "../../redux/user/UserSlice";
import {Loader} from "../loader";
import {log} from "util";

interface IProps{
    item: any
}

const Item: React.FC<IProps> = ({ item }) => {
    const { data, isLoad } = useAppSelector(state => state.user);
    const [userModels, setUserModels] = useState<string[]>(data && data.models && data.models.length ? data.models.map(item => item.url) : []);
    const [flag, setFlag] = useState<Boolean>(true);
    const params = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        setFlag(userModels.includes(`https://onlyfans.com/${params.id!}`));
    },[])
    useEffect(() => {
        setUserModels(data && data.models.length && data.models ? data.models.map(item => item.name) : []);
    },[data && data!.models, params.id])
    const navigate = useNavigate();
    const onClickAdd = () => {
        dispatch(fetchAddModel({login: data!.telegramId, url: `https://onlyfans.com/${params.id!}`}))
        setFlag(!flag)
    }
    const onClickDelete = () =>{
        if(data && data.models && data.models.length){
            data.models.forEach(item => {
                if (item.url == `https://onlyfans.com/${params.id!}`) {
                    dispatch(fetchDelete([item.id]));
                }
            });
        }
        setFlag(!flag)
    }
    return (
        <div className={styles.content}>
            {isLoad ? <Loader className={styles.loader} /> : null}
            <div className={styles.wrapper}>
                <div className={styles.head}>
                    <div className={styles.profile}>
                        {item.model.avatarUrl ? <img src={item.model.avatarUrl} alt="NETU IMG V BEKE" className={styles.img}/> : null}
                        <h4 className={styles.name}>{item.model.name}</h4>
                    </div>
                    {data ?  <div className={styles.action}>
                        <div className={styles.wrapperButton}>
                            {flag == true ? <button className={styles.buttonDelete} onClick={onClickDelete}>Удалить</button>
                           : <button className={styles.buttonAdd} onClick={onClickAdd}>Добавить</button>}

                        </div>
                        <button className={styles.filter}><img src={searchFilter} alt="d"/></button>
                        <button className={(cx(styles.buttonItem, styles.itemOne))}><img src={itemOne} alt=""/></button>
                        <button className={(cx(styles.buttonItem, styles.itemTwo))}><img src={itemTwo} alt=""/></button>
                    </div> : null}
                </div>
            </div>
                <div className={styles.info}>
                    <div className={styles.wrapperInfo}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}><img src={publication} alt=""/> <p className={styles.text}>Публикаций</p></div>
                            <p className={styles.kol}>{item.statistic.photosCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={video} alt=""/> <p className={styles.text}>Видео</p>
                            </div>
                            <p className={styles.kol}>{item.statistic.videosCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={like} alt=""/> <p className={styles.text}>Лайков</p>
                            </div>
                            <p className={styles.kol}>{item.statistic.likesCount}</p>
                        </li>
                        <li className={styles.item}>
                            <div className={styles.wrapperItem}>
                                <img src={users} alt=""/> <p className={styles.text}>Подписчиков</p>
                            </div>
                            <p className={styles.kol}>{item.statistic.subscribersCount}</p>
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
                                <button className={styles.signUp} onClick={() => navigate('/auth/registration')}>Зарегистрируйтесь, </button>
                                <p> чтобы просматривать детальную статистику</p>
                            </div>
                        </div>
                    </div>

                </div>
        </div>
    );
};

export default Item;