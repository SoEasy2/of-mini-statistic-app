import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../assets/logo.svg';
import {useNavigate} from "react-router-dom";

const Logo:React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.logo} onClick={() => navigate('/')}>
            <div className={styles.wrapper}>
                <img src={logo} alt="" className={styles.img}/>
                <p className={styles.logoText}>MiniStata</p>
            </div>
        </div>
    );
};

export { Logo };