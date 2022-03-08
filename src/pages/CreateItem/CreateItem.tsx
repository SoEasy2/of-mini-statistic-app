import React, {useState} from 'react';
import {InformationPanel} from "../../components/informationPanel";
import Header from "../../components/header/header";
import Plus from "../../assets/plus.svg";
import {Information} from "../../components/information";
import styles  from './CreateItem.module.scss';
import {Overflow} from "./components/Overflow";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAddModel} from "../../redux/user/UserSlice";
const CreateItem = () => {
    const [isInfo, setInfo] = useState<boolean>(false);
    const {data} = useAppSelector(state => state.user);
    const [url, setUrl] = useState<string>('');
    const dispatch = useAppDispatch();
    const handleChange = (e:any) =>{
        setUrl(e.target.value);
    }
    const handleClick = () => {
        dispatch(fetchAddModel({login: data!.login, url: `https://onlyfans.com/${url}`}));
    }
    return (
        <section>
            {isInfo ? <InformationPanel onClick={() => setInfo(false)} /> : null}
            <Header title={'Статистика'} />
            <div className={styles.content}>
                <div className={styles.searchBar}>
                    <input type="text" className={styles.input} placeholder={'Enter in a username from YouTube, Twitch, Twitter, Instagram, or Dailymotion'} value={url} onChange={handleChange}/>
                    <button className={styles.buttonSearch} onClick={handleClick}><img src={Plus} alt=""/></button>
                </div>
            </div>
            <div className={styles.wrapperOverflow}>
                <Overflow />
            </div>
            <Information className={styles.info} onClick={()=> setInfo(true)}/>
        </section>
    );
};

export { CreateItem };