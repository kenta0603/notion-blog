import '../styles/globals.css';

const TableOfContents = ({ headings }) => {

  return (
    <nav>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id} className={`toc-${heading.level}`}>
            <a href={`#${heading.id}`}>{heading.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;