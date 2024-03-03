import { Callout } from "./callout";
import styles from '../app/index.module.css';
import Link from 'next/link';

export const Contents = ({category, calloutText, tag, posts }) => {
  return (
    <>
      <h3>{category}</h3>
      {calloutText && <Callout text={calloutText} />}
      {posts.map((post) => {
        if (post.properties?.Tag?.multi_select[0]?.name === tag) {
          const slug = post.properties?.Slug?.rich_text[0].text.content;
          let emoji = null;

          if (post.icon?.type === "emoji") {
            emoji = post.icon.emoji;
          }

          return (
            <Link key={post.id} href={slug}>
              <div className={styles.post}>
                <div className={styles.postTitle}>
                  {emoji && <span className={styles.emoji}>{emoji}</span>}
                  <span>{post.properties?.Page?.title[0].text.content}</span>
                </div>
              </div>
            </Link>
          );
        }
      })}
    </>
  );
};
