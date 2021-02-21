
import axios from 'axios'
import { ReactElement } from 'react'
import { PostComponent } from '../components/postComponent'
import { Wrapper } from '../components/wrapper'
import { postType } from '../types/postTypes'
import styles from '../styles/index.module.css'


interface Props {
  data: postType[]
}
export default function Home(props: Props): ReactElement {

  const posts = props.data.filter((el: postType) => (+el.id && el.body && el.title && el.body.length > 4)).reverse()
  return (
    <Wrapper>
      <div className={styles.main__posts}>
        <h3 className={styles.main__title}>
          POSTS
        </h3>
        <div className={styles.main__column}>
          {posts.map((el, i) => <PostComponent key={i} href={el.id} title={el.title} body={el.body} ></PostComponent>)}
        </div>
      </div>

    </Wrapper>
  )

}


export async function getStaticProps() {
  const response = await axios.get('https://simple-blog-api.crew.red/posts')
  const data: postType[] = await response.data
  return { props: { data } }
}