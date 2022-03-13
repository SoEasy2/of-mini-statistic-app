import React, {useState} from 'react';
import styles from './Auth.module.scss';
import {Login} from "../Login";
import {Registration} from "../Registration";

const Auth:React.FC = ({children}) => {
    return (
        <div className={styles.auth}>
            {children}
        </div>
    );
};

export { Auth };