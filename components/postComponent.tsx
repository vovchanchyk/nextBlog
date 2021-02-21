import {ReactElement}from "react";
import Link from 'next/link';
import styles from '../styles/postComponent.module.css';


export function PostComponent({href,body,title}):ReactElement {

    return(
        <div className={styles.post}>
             <h2 className={styles.post__title}>{title}</h2>
             <p className={styles.post__body} >{body}</p>
             to <Link href={`/posts/${href}`}><a className={styles.post__link} >  {title}</a></Link>  
        </div>
    )

}
