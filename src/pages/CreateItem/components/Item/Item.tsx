import React from 'react';
import styles from './Item.module.scss';
import users from '../../../../assets/item/users.png';
import left from '../../../../assets/left.svg';
import right from '../../../../assets/right.svg';
import cx from "classnames";
import {IModel} from "../../../../redux/user/types";
import {useNavigate} from "react-router-dom";
import {StatisticItem} from "../statisticItem";
import arrowNotActive from "../../../../assets/arrowNotActive.svg";
import arrowActive from "../../../../assets/arrowActive.svg"

export interface IProps{
    item: IModel,
    actionId: number,
    handleClickItem(index:number): void;
    focusItems: number[];
    setActionId (data: number): void;
}

const Item:React.FC<IProps> = ({ item, actionId, setActionId, handleClickItem, focusItems }) => {
    const navigate = useNavigate();
    const handleClickStatics = (e: any) => {
        e.stopPropagation()
        if (focusItems.includes(item.id)){
            if (actionId === item.id){
                setActionId(0);
            } else{
                setActionId(item.id);
            }
        }
    }
    const onClick = () => {
        navigate(`/listen/${item.id}`);
    }
    return (
        <div className={cx(styles.item, focusItems.includes(item.id) ? styles.itemFocus : null)} onClick={() => handleClickItem(item.id)}>
            <div className={styles.head}>
                <div className={styles.user}>
                    <img src={item.avatarUrl} alt="" className={styles.img}/>
                    <p className={styles.name}>{item.name}</p>
                </div>
                <button className={styles.arrowNotActive} onClick={handleClickStatics}><img src={actionId === item.id && focusItems.includes(item.id) ? arrowActive  : arrowNotActive} alt=""/></button>
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
            {actionId === item.id && focusItems.includes(item.id) ? <StatisticItem id={item.id} onClick={onClick} needAlerts={item.needAlerts}/> : null}
        </div>
    );
};

export default Item;