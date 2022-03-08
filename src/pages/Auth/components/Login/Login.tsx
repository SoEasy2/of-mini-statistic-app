import React, {useState} from 'react';
import styles from "./Login.module.scss";
import {useAppDispatch} from "../../../../hooks/redux";
import {IAuth} from "../../../../models/auth";
import {fetchLogin} from "../../../../redux/user/UserSlice";

interface IProps{
    onChangeWindow(): void;
}

const Login:React.FC<IProps> = ({ onChangeWindow }) => {
    const [auth, setAuth] = useState<IAuth>({login: '', password: ''})
    const dispatch = useAppDispatch();
    const handleChangeInput = (e: any) => {
        setAuth(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    return (
        <div className={styles.login}>
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h4 className={styles.title}>Вход в аккаунт</h4>
            </div>
            <div className={styles.form}>
                <input type="text" placeholder={'Введите логин'} className={styles.input} onChange={handleChangeInput}
                name={'login'}/>
                <input type="password"
                       onChange={handleChangeInput}
                       name={'password'}
                       placeholder={'Введите пароль'} className={styles.input}/>
                <div className={styles.action}>
                    {/*<input type="radio" className={styles.radio}/>*/}
                    <button className={styles.forg}>Забыли пароль?</button>
                </div>
                <button className={styles.signIn} onClick={() => dispatch(fetchLogin(auth))}>Войти</button>
                <div className={styles.registration}>
                    <p className={styles.text}>Нет аккаунта?</p>
                    <button className={styles.signUp} onClick={onChangeWindow}>Зарегистрироваться</button>
                </div>
            </div>
         </div>
        </div>
    );
};

export { Login };