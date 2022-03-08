import React from 'react';
import styles from './Overflow.module.scss';
import callendar from '../../../../assets/callendar.png';
import filter from '../../../../assets/filter.svg';
import korz from '../../../../assets/korz.svg';
import search from '../../../../assets/search.svg'
import Item from "../Item/Item";
import {useAppSelector} from "../../../../hooks/redux";
import {Loader} from "../../../../components/loader";

const Overflow = () => {
    const {data} = useAppSelector(state => state.user);
    const {isLoad} = useAppSelector(state => state.user);
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
                <button className={styles.button}>
                    <img src={korz} alt="" className={styles.img}/>
                </button>
                <button className={styles.button}>
                    <img src={filter} alt="" className={styles.img}/>
                </button>
                </div>
            </div>
            <div className={styles.wrapper}>
                {isLoad ? <Loader /> : null}
                <div className={styles.items}>
                    {data ? data.models.map(item => <Item item={item} />) : null}
                </div>
        </div>
        </div>
    );
};

export  { Overflow };