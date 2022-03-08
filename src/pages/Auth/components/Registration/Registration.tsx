import React, {useState} from 'react';
import styles from "./Registration.module.scss";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {fetchRegistration} from "../../../../redux/user/UserSlice";
import {useNavigate} from "react-router-dom";
import cx from "classnames";
import {Loader} from "../../../../components/loader";


interface IReg{
    password: string,
    confirm: string,
    login: string,
    telegramId: string
}
const Registration:React.FC = () => {
    const user = useAppSelector(state => state.user);
    const [auth, setAuth] = useState<IReg>({
        login: '',
        password: '',
        confirm: '',
        telegramId: '',
    });
    const handleChange = (e: any) => {
        setAuth(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const dispatch = useAppDispatch();
    const handleReg = () => {
           console.log(auth);
           if (auth.password === auth.confirm && auth.login !== '' && auth.password !== '' && auth.telegramId !== ''){
               dispatch(fetchRegistration({login: auth.login, password: auth.password, telegramId: auth.telegramId}));
           }
    }
    const navigate = useNavigate();
    return (
        <div className={styles.registration}>
            {user.isLoad ? <Loader/> : null}
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h4 className={styles.title}>Регистрация</h4>
                </div>
                <div className={styles.form}>
                    <input type="text" placeholder={'Введите логин'} name={'login'}
                           value={auth.login}
                           className={styles.input}
                    onChange={handleChange}
                    />
                    <input type="password" placeholder={'Введите пароль'} name={'password'}
                           value={auth.password}
                           className={styles.input}
                    onChange={handleChange}
                    />
                    <input type="password" placeholder={'Повторите пароль'}
                           name={'confirm'}
                           value={auth.confirm}
                           onChange={handleChange}
                           className={styles.input}/>
                    <div className={styles.telegram}>
                        <input type={'text'} placeholder={'Telegram ID'}
                               name={'telegramId'}
                               onChange={handleChange}
                               className={cx(styles.input, styles.inputTelegram)} />
                        <button className={styles.buttonTelegram}>Получить</button>
                    </div>
                    {user.error ? <p className={styles.error}>Введены некоректно данные</p> : null}
                    <div className={styles.action}>
                        <p>Наш телеграм-бот: <a href="" className={styles.link}>@Название бота</a>.</p>
                    </div>
                    <button className={styles.signIn} onClick={handleReg}>Войти</button>
                    <div className={styles.reg}>
                        <p className={styles.text}>Есть аккаунт?</p>
                        <button className={styles.signUp} onClick={() => navigate('/auth/login')}>Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Registration };