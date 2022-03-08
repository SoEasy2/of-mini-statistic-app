import React, {useEffect} from 'react';
import {Header} from "./components/header";
import {Auth} from "./components/Auth";
import styles from './AuthModule.module.scss';
import {useAppSelector} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";

const AuthPage:React.FC = () => {
    const {data} = useAppSelector(state => state.user);
    const navigation = useNavigate();
    useEffect(() => {
        if (data) {
            navigation('/search');
        }
    }, [data]);
    return (
        <div>
            <Header />
            <div className={styles.content}>
                <Auth />
            </div>
        </div>
    );
};

export { AuthPage };