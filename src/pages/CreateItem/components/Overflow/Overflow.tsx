import React, {useState} from 'react';
import styles from './Overflow.module.scss';
import callendar from '../../../../assets/callendar.png';
import filter from '../../../../assets/filter.svg';
import {ReactComponent as Korz} from '../../../../assets/korz.svg';
import search from '../../../../assets/searchIcon.svg'
import Item from "../Item/Item";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {Loader} from "../../../../components/loader";
import {fetchDelete} from "../../../../redux/user/UserSlice";

const Overflow = () => {
    const {data} = useAppSelector(state => state.user);
    const {isLoad} = useAppSelector(state => state.user);
    const [actionId, setActionId] = useState<number>(0);
    const dispatch = useAppDispatch();
    const [focusItems, setFocusItems] = useState<number[]>([]);
    const handleClickItem = (index: number) => {
        if (focusItems.includes(index)){
            setFocusItems(focusItems.filter(item => item !== index));
        } else{
            setFocusItems([...focusItems, index]);
        }
    }
    return (
        <div className={styles.overflow}>

            <div className={styles.head}>
                <div className={styles.wrapperHead}>
                <button className={styles.button}>
                    <img src={callendar} alt="" className={styles.img}/>
                </button>
                <div className={styles.wrapperInput}>
                    <input type="text" className={styles.input} placeholder={'Поиск'}/>
                    <img src={search} alt="" className={styles.search}/>
                </div>
                <button className={styles.button} disabled={!focusItems.length} onClick={() => dispatch(fetchDelete(focusItems))}>
                    <Korz className={focusItems.length ? styles.act : styles.dis} />
                </button>
                <button className={styles.button}>
                    <img src={filter} alt="" className={styles.img}/>
                </button>
                </div>
            </div>
            <div className={styles.wrapper}>
                {isLoad ? <Loader /> : null}
                <div className={styles.items}>
                    {data && data.models && data.models.length? data.models.map(item => <Item item={item} actionId={ actionId} setActionId={setActionId} handleClickItem={handleClickItem} focusItems={focusItems} key={item.id} />) : <div className={styles.notFound}>Модели отсуствуют</div>}
                </div>
        </div>
        </div>
    );
};

export  { Overflow };