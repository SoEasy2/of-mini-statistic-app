import React, {useState} from 'react';
import styles from "./Login.module.scss";
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {IAuth} from "../../../../models/auth";
import {fetchLogin} from "../../../../redux/user/UserSlice";
import {useNavigate} from "react-router-dom";
import {Loader} from "../../../../components/loader";
import {Formik} from "formik";
import {schemaLogin} from "../../../../yup/Login/schemaLogin";
import cx from "classnames";


const Login:React.FC = () => {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    return (
        <div className={styles.login}>
            {user.isLoad ? <Loader /> : null}
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h4 className={styles.title}>Вход в аккаунт</h4>
            </div>
            <Formik
                validationSchema={schemaLogin} initialValues={{
                login: '',
                password: '',
            }}
                validateOnBlur
                onSubmit={(values)=> { dispatch(fetchLogin(values))
            }}>
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
            <div className={styles.form}>
                <input type="text" placeholder={'Введите логин'} className={cx(styles.input, touched.login && errors.login && styles.error)}
                name={'login'} id={'login'} onChange={handleChange} onBlur={handleBlur} value={values.login}/>
                <input type="password"
                       name={'password'}
                       id={'password'}
                       placeholder={'Введите пароль'} className={cx(styles.input, touched.password && errors.password && styles.error )}
                       onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                <div className={styles.action}>
                    {/*<input type="radio" className={styles.radio}/>*/}
                    <button className={styles.forg}>Забыли пароль?</button>
                </div>
                <button className={styles.signIn} onClick={() => handleSubmit()} type={'submit'}>Войти</button>
                <div className={styles.registration}>
                    <p className={styles.text}>Нет аккаунта?</p>
                    <button className={styles.signUp} onClick={() => navigation('/auth/registration')}>Зарегистрироваться</button>
                </div>
            </div>
                )}
            </Formik>
         </div>
        </div>
    );
};

export { Login };