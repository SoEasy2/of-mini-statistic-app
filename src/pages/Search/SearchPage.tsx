import React, {useState} from 'react';
import Header from "../../components/header/header";
import styles from './SearchPage.module.scss';
import Search from '../../assets/search.svg';
import {Information} from "../../components/information";
import {InformationPanel} from "../../components/informationPanel";
import {useNavigate} from "react-router-dom";

const SearchPage:React.FC = () => {
    const [isInfo, setInfo] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('')
    const handleChangeInput = (e: any) => {
        setUrl(e.target.value);
    }
    const navigation = useNavigate();
    return (
        <section>
            {isInfo ? <InformationPanel onClick={() => setInfo(false)} /> : null}
            <Header title={'Main'} />
            <div className={styles.content}>
                <h1 className={styles.title}>Анализ OnlyFans страницы</h1>
                <div className={styles.searchBar}>
                    <input type="text" className={styles.input}
                           onChange={handleChangeInput}
                           value={url}
                           placeholder={'Enter in a username from YouTube, Twitch, Twitter, Instagram, or Dailymotion'}/>
                    <button className={styles.buttonSearch} onClick={() => navigation(`/search/${url}`)}><img src={Search} alt=""/></button>
                </div>
            </div>
            <Information className={styles.info} onClick={()=> setInfo(true)}/>
        </section>
    );
};

export { SearchPage };