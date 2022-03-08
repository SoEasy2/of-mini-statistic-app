import React from 'react';
import styles from './Logo.module.scss';
import logo from '../../assets/logo.svg';

const Logo:React.FC = () => {
    return (
        <div className={styles.logo}>
            <div className={styles.wrapper}>
                <img src={logo} alt="" className={styles.img}/>
                <p className={styles.logoText}>MiniStata</p>
            </div>
        </div>
    );
};

export { Logo };