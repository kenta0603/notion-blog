const extractHeadings = (blocks) => {
  const headings = [];

  blocks.forEach((block) => {
    // 見出しブロックをチェック
    if (block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3') {
      // リッチテキストからテキストを抽出
      const title = block[block.type].rich_text.map((text) => text.plain_text).join('');
      // 見出しデータを配列に追加
      headings.push({
        id: block.id,
        title,
        level: block.type,
      });
    }
  });

  return headings;
};

export default extractHeadings;
