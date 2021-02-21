import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Wrapper } from '../../components/wrapper';
import styles from '../../styles/newpost.module.css';



export default function NewPost() {

  const [body, setBody] = useState("")
  const [title, setTitle] = useState("")
  const router = useRouter()

  const handle = async (e) => {
    e.preventDefault()
    let data = { title, body}
    const response = await axios.post('https://simple-blog-api.crew.red/posts', data)
    await console.log(response)
    setBody('')
    setTitle('')
    router.push('/')
  }

  return (
    <Wrapper>
      <form className={styles.form} action="#" onSubmit={handle}>
        <h4 className={styles.form__title}>NEW POST</h4>
        <span className={styles.form__label}>post title</span>
        <input className={styles.form__description} type="text" onChange={event => setTitle(event.target.value)} value={title} />
        <span className={styles.form__label}>post body</span>
        <textarea className={styles.form__body} onChange={event => setBody(event.target.value)} value={body}></textarea>
        <button className={styles.form__btn} onClick={handle}>SEND POST</button>
      </form>
    </Wrapper>
  )



}