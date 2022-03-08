import React, {useState} from 'react';
import styles from "./Login.module.scss";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {IAuth} from "../../../../models/auth";
import {fetchLogin} from "../../../../redux/user/UserSlice";
import {useNavigate} from "react-router-dom";
import {Loader} from "../../../../components/loader";

const Login:React.FC = () => {
    const [auth, setAuth] = useState<IAuth>({login: '', password: ''})
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const handleChangeInput = (e: any) => {
        setAuth(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const navigation = useNavigate();
    return (
        <div className={styles.login}>
            {user.isLoad ? <Loader /> : null}
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
                    <button className={styles.signUp} onClick={() => navigation('/auth/registration')}>Зарегистрироваться</button>
                </div>
            </div>
         </div>
        </div>
    );
};

export { Login };