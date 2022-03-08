import React from 'react';
import styles from './Header.module.scss';
import {Logo} from "../../../../components/logo";

const Header:React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <Logo/>
            </div>
        </div>
    );
};

export { Header };