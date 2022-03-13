import React, {useState} from 'react';
import styles from "./Registration.module.scss";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {fetchRegistration} from "../../../../redux/user/UserSlice";
import {useNavigate} from "react-router-dom";
import cx from "classnames";
import {Loader} from "../../../../components/loader";
import { Formik } from 'formik';
import {schemaSignUp} from "../../../../yup/Registartion/schemaRegistration";


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
    console.log("ERROR", user.error);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div className={styles.registration}>
            {user.isLoad ? <Loader/> : null}
            <Formik validationSchema={schemaSignUp} initialValues={{
                login: '',
                password: '',
                confirm: '',
                telegramId: '',
            }}
                    validateOnBlur
                    onSubmit={(values) =>  dispatch(fetchRegistration({login: values.login, password: values.password, telegramId: values.telegramId}))} >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h4 className={styles.title}>Регистрация</h4>
                </div>
                <div className={styles.form}>
                    <input type="text" placeholder={'Введите логин'} name={'login'}
                           className={cx(styles.input, touched.login && errors.login && styles.error)} id={'login'}
                           onChange={handleChange} onBlur={handleBlur} value={values.login}
                    />
                    <input type="password" placeholder={'Введите пароль'} name={'password'}
                           onChange={handleChange} onBlur={handleBlur} value={values.password}
                           className={cx(styles.input, touched.password && errors.password && styles.error)} id={'password'}
                    />
                    <input type="password" placeholder={'Повторите пароль'}
                           name={'confirm'} id={'confirm'}
                           onChange={handleChange} onBlur={handleBlur} value={values.confirm}
                           className={cx(styles.input, touched.confirm && errors.confirm && styles.error)}/>
                    <div className={styles.telegram}>
                        <input type={'text'} placeholder={'Telegram ID'}
                               name={'telegramId'}
                               id={'telegramId'}
                               onChange={handleChange} onBlur={handleBlur} value={values.telegramId}
                               className={cx(styles.input, styles.inputTelegram, touched.telegramId && errors.telegramId && styles.error)} />
                        <a className={styles.buttonTelegram} href={'https://t.me/ofminiistatistics_bot'} target={"_blank"}>Получить</a>
                    </div>
                    {Object.keys(user.error).length !== 0 ? <p className={styles.error}>Введены некоректно данные</p> : null}
                    <div className={styles.action}>
                        <p>Наш телеграм-бот: <a href="https://t.me/ofminiistatistics_bot" target={"_blank"} className={styles.link}>@ofminiistatistics_bot</a>.</p>
                    </div>
                    <button className={styles.signIn} onClick={() => handleSubmit()} disabled={!isValid && !dirty} type={'submit'}>Зарегистрироваться</button>
                    <div className={styles.reg}>
                        <p className={styles.text}>Есть аккаунт?</p>
                        <button className={styles.signUp} onClick={() => navigate('/auth/login')}>Войти</button>
                    </div>
                </div>
            </div>
                )}
            </Formik>
        </div>
    );
};

export { Registration };