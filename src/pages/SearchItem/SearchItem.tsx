import React, {useEffect, useState} from 'react';
import {InformationPanel} from "../../components/informationPanel";
import Header from "../../components/header/header";
import styles from "./SearchItem.module.scss";
import Search from "../../assets/search.svg";
import {Information} from "../../components/information";
import Item from "../../components/item/Item";
import {useNavigate, useParams} from "react-router-dom";
import {ISearch} from "../../models/search";
import {search} from "../../api/search";
import {Loader} from "../../components/loader";
import {useAppDispatch} from "../../hooks/redux";

const SearchItem:React.FC = () => {
    const [isInfo, setInfo] = useState<boolean>(false);
    const [item, setItem] = useState<any>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('')
    const params = useParams();
    useEffect(() => {
        (async () => {
           try{
               setLoading(true);
               const response = await search(`https://onlyfans.com/${params.id}`);
               setUrl(params.id!);
               setItem(response)
               setLoading(false);
           } catch (e) {
               setLoading(false);
           }
        })()
    },[]);
    /*const click = async () => {
        try{
            navigation(`/search/${url}`)
            setLoading(true);
            const response = await search(`https://onlyfans.com/${params.id}`);
            setUrl(params.id!);
            setItem(response)
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }*/
    const handleChangeInput = (e: any) => {
        setUrl(e.target.value);
    }
    const navigation = useNavigate();
    return (
        <section>
                {isInfo ? <InformationPanel onClick={() => setInfo(false)} /> : null}
                <Header title={'Анализ OnlyFans страницы'} />
            <div className={styles.loader}>
                {isLoading ? <Loader /> : null}
                <div className={styles.content}>
                    <div className={styles.searchBar}>
                        <input type="text" className={styles.input}
                               onChange={handleChangeInput}
                               value={url}
                               placeholder={'Enter in a username from YouTube, Twitch, Twitter, Instagram, or Dailymotion'}/>
                        <button className={styles.buttonSearch} onClick={console.log}><img src={Search} alt=""/></button>
                    </div>
                <div className={styles.wrapper}>
                    {item ? <Item item={item} /> : null}
                </div>
                </div>
                <Information className={styles.info} onClick={()=> setInfo(true)}/>
                </div>
        </section>
    );
};

export { SearchItem };