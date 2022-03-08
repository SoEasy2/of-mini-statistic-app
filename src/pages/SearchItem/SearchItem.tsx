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

const SearchItem:React.FC = () => {
    const [isInfo, setInfo] = useState<boolean>(false);
    const [item, setItem] = useState<ISearch | null>(null);
    const navigation = useNavigate();
    const [url, setUrl] = useState<string>('')
    const params = useParams();
    useEffect(() => {
        (async () => {
           const response = await search(`https://onlyfans.com/${params.id}`);
           setUrl(params.id!);
           setItem(response)
        })()
    },[]);
    useEffect(() => {
        console.log(item);
    },[item])
    const handleChangeInput = (e: any) => {
        setUrl(e.target.value);
    }
    return (
        <section>
                {isInfo ? <InformationPanel onClick={() => setInfo(false)} /> : null}
                <Header title={'Анализ OnlyFans страницы'} />
                <div className={styles.content}>
                    <div className={styles.searchBar}>
                        <input type="text" className={styles.input}
                               onChange={handleChangeInput}
                               value={url}
                               placeholder={'Enter in a username from YouTube, Twitch, Twitter, Instagram, or Dailymotion'}/>
                        <button className={styles.buttonSearch}><img src={Search} alt=""/></button>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    {item ? <Item item={item} /> : null}
                </div>
                <Information className={styles.info} onClick={()=> setInfo(true)}/>
        </section>
    );
};

export { SearchItem };