import Link from 'next/link';
import styles from '../styles/post.module.css';
import Text from './text';


export const ArticleList = ({ posts }) => {
  return (
    <ol className={styles.posts}>
          {posts.map((post) => {
            // const date = new Date(post.last_edited_time).toLocaleString(
            //   'en-US',
            //   {
            //     month: 'short',
            //     day: '2-digit',
            //     year: 'numeric',
            //   }
            // );
            const slug = post.properties?.Slug?.rich_text[0].text.content;
            return (
              <li key={post.id} className={styles.post}>
                <div className={styles.postTitle}>
                  <Link href={`/${slug}`}>
                    <Text title={post.properties?.Page?.title} />
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
  )
};
