import React, {useState} from 'react';
import styles from './header.module.scss';
import { Logo } from "../logo";
import cx from 'classnames';
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import profile from '../../assets/profile.svg'
import leave from '../../assets/leave.svg';
import imgprof from '../../assets/imgprof.png';
import {fetchLogout} from "../../redux/user/UserSlice";

interface IProps{
    title?: string
}


const Header:React.FC<IProps> = ({ title }) => {
    const [isProfile, setProfile] = useState<boolean>(false);
    const {data} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />
                {title ? <p className={styles.title}>{title}</p> : null}
                {data ?  <div className={styles.profile} onClick={() => setProfile(!isProfile)}>
                    <img src={imgprof} alt=""/>
                    {isProfile ?
                        <div className={styles.popup}>
                            <div className={styles.head}>
                                <div className={styles.popupWrapper}>
                                    <p className={styles.name}>{data.login}</p>
                                </div>
                            </div>
                            <div className={styles.popupWrapper}>
                                <button className={styles.buttonPopup} onClick={() => navigation('/listen')}><img src={profile} alt=""/><p className={styles.text}>Профиль</p></button>
                                <button className={styles.buttonPopup} onClick={() => dispatch(fetchLogout())}><img src={leave} alt=""/><p className={styles.text}>Выйти из аккаунта</p></button>
                                <div/>
                            </div>

                        </div>
                        : null}
                </div> : <div><button className={cx(styles.button, styles.login)} onClick={() => navigation('/auth/login')}>Войти</button><button className={cx(styles.button, styles.reg)} onClick={() => navigation('/auth/registration')}>Зарегистрироваться</button></div>}
            </div>
        </header>
    );
};


export default Header;