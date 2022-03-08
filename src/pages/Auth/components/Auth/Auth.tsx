import React, {useState} from 'react';
import styles from './Auth.module.scss';
import {Login} from "../Login";
import {Registration} from "../Registration";

const Auth = () => {
    const [isWindow, setWindow] = useState<"LOGIN" | "REGISTRATION">("LOGIN")
    return (
        <div className={styles.auth}>
            {isWindow === "LOGIN" ? <Login onChangeWindow={() => setWindow("REGISTRATION")} /> : <Registration onChangeWindow={() => setWindow("LOGIN")} />}
        </div>
    );
};

export { Auth };