import React from 'react';
import styles from './Item.module.scss';
import users from '../../../../assets/item/users.png';
import left from '../../../../assets/left.svg';
import right from '../../../../assets/right.svg';
import cx from "classnames";
import {IModel} from "../../../../redux/user/types";
import {useNavigate} from "react-router-dom";

export interface IProps{
    item: IModel
}

const Item:React.FC<IProps> = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.item} onClick={() => navigate(`/listen/${item.id}`)}>
            <div className={styles.head}>
                <img src={item.avatarUrl} alt="" className={styles.img}/>
                <p>{item.name}</p>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <p className={styles.text}>Подписчиков сейчас:</p>
                    <div className={styles.info}>
                        <img src={users} alt=""/>
                        <p className={styles.kol}>17 800</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.top}>
                        <button className={styles.arrow}><img src={left} alt=""/></button>
                        <ul className={styles.list}>
                            <li className={styles.li}>21.02</li>
                            <li className={cx(styles.li, styles.active)}>22.02</li>
                            <li className={styles.li}>23.02</li>
                        </ul>
                        <button className={styles.arrow}><img src={right} alt=""/></button>
                    </div>
                    <div className={styles.flex}>
                        <div className={cx(styles.box, styles.red)}>+1</div>
                        <div className={cx(styles.box, styles.green)}>+64</div>
                        <div className={cx(styles.box, styles.yellow)}>+20</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;