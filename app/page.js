import { getDatabase } from '../lib/notion';
import styles from './index.module.css';
import HorizontalLine from '../components/horizontal-line';
import { Contents } from '../components/contents';
import { Fragment } from 'react';
import { CONTENTS } from './constants/contents';

export const metadata = {
  title: 'Notion Blog',
};

export const databaseId =
  process.env?.NOTION_DATABASE_ID ?? 'NOTION_DATABASE_ID';

export async function getPosts() {
  const database = await getDatabase();

  return database;
}

export default async function Page() {
  return (
    <div>
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>タイトル</h1>
        </header>

        {CONTENTS.map((content, index) => {
          // 各セクションのタイトルを出力するための条件付きレンダリング
          const isNewSection =
            index === 0 || CONTENTS[index - 1].title !== content.title;
          return (
            <Fragment key={index}>
              {isNewSection && (
                <>
                  {index !== 0 && <HorizontalLine />}{' '}
                  {/* 最初のセクション以外に水平線を表示 */}
                  <h2>{content.title}</h2>
                </>
              )}
              <Contents
                category={content.category}
                calloutText={content.calloutText}
                tag={content.tag}
                posts={content.posts}
              />
            </Fragment>
          );
        })}

        <HorizontalLine />
      </main>
    </div>
  );
}
