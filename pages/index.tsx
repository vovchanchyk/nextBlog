
import axios from 'axios'
import { ReactElement } from 'react'
import { PostComponent } from '../components/postComponent'
import { Wrapper } from '../components/wrapper'
import { postType } from '../types/postTypes'
import styles from '../styles/index.module.css'

interface Props{
  
    error:boolean
    data : postType[]
  
}
export default function Home(props:Props): ReactElement {

  if(props.error)return <Wrapper> SERVER IS UNAVELABLE TEMPRORARY</Wrapper>
 
  return (
    <Wrapper>
      <div className={styles.main__posts}>
        <h3 className={styles.main__title}>
          POSTS
        </h3>
        <div className={styles.main__column}>
        {props.data.filter((el: postType) => (+el.id && el.body && el.title)).reverse()
          .map((el, i) => <PostComponent key={i} href={el.id} title={el.title} body={el.body} ></PostComponent>)}
        </div>
      </div>
    </Wrapper>
  )

}

export async function getStaticProps() {
  let data :[]
  let error:boolean = false
  await axios.get('https://simple-blog-api.crew.red/posts')
    .then(response => {
      debugger
      data = response.data})
    .catch(()=> error = true)
    return{props:{data,error}}
 
}

