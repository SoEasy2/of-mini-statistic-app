import React, {useState} from 'react';
import styles from "./Registration.module.scss";
import {useAppDispatch} from "../../../../hooks/redux";
import {fetchRegistration} from "../../../../redux/user/UserSlice";

interface IProps{
    onChangeWindow(): void;
}

interface IReg{
    password: string,
    confirm: string,
    login: string,
}
const Registration:React.FC<IProps> = ( {onChangeWindow} ) => {
    const [auth, setAuth] = useState<IReg>({
        login: '',
        password: '',
        confirm: '',
    });
    const handleChange = (e: any) => {
        console.log(e);
        setAuth(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const dispatch = useAppDispatch();
    const handleReg = () => {
        if (auth.password === auth.confirm && auth.login !== '' && auth.password !== ''){
            dispatch(fetchRegistration({login: auth.login, password: auth.password}));
        }
    }
    return (
        <div className={styles.registration}>
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
                    <div className={styles.action}>
                        <button className={styles.forg}>Забыли пароль?</button>
                    </div>
                    <button className={styles.signIn} onClick={handleReg}>Войти</button>
                    <div className={styles.reg}>
                        <p className={styles.text}>Есть аккаунт?</p>
                        <button className={styles.signUp} onClick={onChangeWindow}>Войти</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Registration };