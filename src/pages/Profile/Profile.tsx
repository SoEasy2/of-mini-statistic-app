import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchRegistration, fetchUpdate} from "../../redux/user/UserSlice";
import {useNavigate} from "react-router-dom";
import styles from "./Profile.module.scss";
import {Loader} from "../../components/loader";
import cx from "classnames";
import back from '../../assets/back.svg';
import {IUpdate} from "../../models/auth";


const Profile = () => {
    const {data, isLoad, error} = useAppSelector(state => state.user);
    const navigate = useNavigate();
    const [profile, setProfile] = useState<IUpdate>({
        login: data!.login || "",
        password: '',
        confirm: '',
        telegramId: data!.telegramId,
        id: data!.id || 0,
    });
    useEffect(() => {
        if (!data) navigate('/');
    }, [data])
    const handleChange = (e: any) => {
        setProfile(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    const dispatch = useAppDispatch();

    const handleSave = () => {
        dispatch(fetchUpdate(profile));
    }
    return (
        <>
            <Header title={'ts'}/>
            <div className={styles.content}>
                <button className={styles.closed} onClick={() => navigate('/listen')}><img src={back} alt=""/></button>
        <div className={styles.registration}>
            {isLoad ? <Loader/> : null}
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h4 className={styles.title}>Настройки профиля</h4>
                </div>
                <div className={styles.form}>
                    <input type="text" placeholder={'Введите логин'} name={'login'}
                           value={profile.login}
                           className={styles.input}
                           onChange={handleChange}
                    />
                    <input type="password" placeholder={'Введите пароль'} name={'password'}
                           value={profile.password}
                           className={styles.input}
                           onChange={handleChange}
                    />
                    <input type="password" placeholder={'Повторите пароль'}
                           name={'confirm'}
                           value={profile.confirm}
                           onChange={handleChange}
                           className={styles.input}/>
                    <div className={styles.telegram}>
                        <input type={'text'} placeholder={'Telegram ID'}
                               name={'telegramId'}
                               onChange={handleChange}
                               value={profile.telegramId}
                               className={cx(styles.input, styles.inputTelegram)} />
                        <a className={styles.buttonTelegram} href={'https://t.me/ofminiistatistics_bot'} target={"_blank"}>Получить</a>
                    </div>
                    {Object.keys(error).length !== 0 ? <p className={styles.error}>Введены некоректно данные</p> : null}
                    <div className={styles.action}>
                        <p>Наш телеграм-бот: <a href="https://t.me/ofminiistatistics_bot" target={"_blank"} className={styles.link}>@ofminiistatistics_bot</a>.</p>
                    </div>
                    <button className={styles.signIn} onClick={handleSave}>Сохранить</button>
                </div>
            </div>
        </div>
            </div>
        </>
    )
};

export { Profile };