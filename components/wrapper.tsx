import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { logOutActionCreator } from '../store/actions/userAction'
import { typedSelector } from '../types/hookTypes'
import styles from  '../styles/wrapper.module.css';

export function Wrapper({children}){
    const router = useRouter()
    let verifity = typedSelector(state=>state.user.verifity);
    const dispatch = useDispatch();
    const handle=()=>{
     dispatch(logOutActionCreator())
     router.push('/')
    }
    return(
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <nav className={styles.header__nav}>
                    <li className={styles.header__item}>
                    <Link href='/'><a className={styles.header__link} >POSTS</a></Link>
                    </li>
                    <li className={styles.header__item}>
                    <Link href={verifity?'/newpost':'/signup'}><a className={styles.header__link} >NEW POST</a></Link>
                    </li>
                    <li className={styles.header__item}>
                    <Link href='/login'><a className={styles.header__link} >LOG IN</a></Link>
                    </li>
                    <li className={styles.header__item}>
                    <Link href='/signup'><a className={styles.header__link} >SIGN UP</a></Link>
                    </li>                 
                </nav>
                <button onClick={handle} className={styles.header__btn} >LOG OUT</button>
            </header>
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )




}