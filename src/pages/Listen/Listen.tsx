import React, {useEffect, useState} from 'react';
import {InformationPanel} from "../../components/informationPanel";
import Header from "../../components/header/header";
import Search from "../../assets/search.svg";
import {Information} from "../../components/information";
import {useNavigate, useParams} from "react-router-dom";
import {ISearch} from "../../models/search";
import {search} from "../../api/search";
import styles from './Listen.module.scss';
import Item from "./Item/Item";
import {getModel} from "../../api/model";
import {Loader} from "../../components/loader";

const Listen:React.FC = () => {
    const [isInfo, setInfo] = useState<boolean>(false);
    const [item, setItem] = useState<ISearch | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const navigation = useNavigate();
    const [url, setUrl] = useState<string>('')
    const params = useParams();
    useEffect(() => {
        (async () => {
            setLoading(true);
            const response = await getModel({days: 10, id: +params.id!});
            setItem(response);
            setLoading(false);
        })()
    },[]);
    const handleChangeInput = (e: any) => {
        setUrl(e.target.value);
    }
    return (
        <section>
            {isInfo ? <InformationPanel onClick={() => setInfo(false)} /> : null}
            <Header title={'Анализ OnlyFans страницы'} />
            <div className={styles.loader}>
                {isLoading ? <Loader /> : null}
            <div className={styles.wrapper}>
                {item ? <Item item={item} /> : null}
            </div>
            <Information className={styles.info} onClick={()=> setInfo(true)}/>
            </div>
            </section>

    );
};

export { Listen };