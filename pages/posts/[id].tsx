import axios from "axios";
import { Wrapper } from "../../components/wrapper";
import { getIdType } from "../../types/contextTypes";
import { postType } from "../../types/postTypes";
import styles from "../../styles/postPage.module.css";

export default function Post(props: postType) {
  return (
    <Wrapper>
      <div className={styles.post}>
        <h2 className={styles.post__title}>{props.title}</h2>
        <p className={styles.post__body}>{props.body}</p>
      </div>
    </Wrapper>
  );
}

export async function getServerSideProps({ query }: getIdType) {
  const response = await axios.get(
    `https://simple-blog-api.crew.red/posts/${query.id}`
  );
  const data: postType = await response.data;
  console.log();
  return { props: { ...data } };
}
