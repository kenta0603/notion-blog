import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getDatabase, getBlocks, getPageFromSlug } from '../../lib/notion';
import { renderBlock } from '../../components/notion/renderer';
import styles from '../../styles/post.module.css';
import extractHeadings from '../../lib/extractHeadings';
import TableOfContents from '../../components/table-of-contents';

export const generateMetadata = async ({ params }) => {
  const page = await getPageFromSlug(params?.slug);

  return {
    title: `${page.properties.Page.title[0].plain_text}`,
  };
};

async function Page({ params }) {
  const page = await getPageFromSlug(params?.slug);
  const blocks = await getBlocks(page?.id);
  const headings = extractHeadings(blocks);

  if (!page || !blocks) {
    return <div />;
  }

  return (
    <div>
      <Head>
        <title>
          {page.properties.Title?.title[0].plain_text} - Notion Blog
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className={styles.container}>
        {blocks.map(
          (block) =>
            block?.type === 'table_of_contents' &&
            headings && <TableOfContents key={block.id} headings={headings} />
        )}
        {/* <ConsoleLog data={page} /> */}
        <div className={styles.title}>
          {page.icon?.type === 'emoji' && (
            <span className={styles.icon}>{page.icon.emoji}</span>
          )}
          <h1 className={styles.name}>
            {page.properties.Page.title[0].plain_text}
          </h1>
        </div>
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/" className={styles.back}>
            ← Go home
          </Link>
        </section>
      </article>
    </div>
  );
}

export default Page;

export async function generateStaticParams() {
  const database = await getDatabase();
  return database?.map((page) => {
    const slug = page.properties.Slug?.rich_text[0]?.text?.content;
    return { id: page.id, slug };
  });
}
