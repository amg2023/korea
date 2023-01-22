import ReactMarkdown from "react-markdown";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import * as S from "./style";

export default function Markdown({ content }: any) {
  const components = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={dracula}
          PreTag="div"
          language={match[1]}
          children={String(children).replace(/\n$/, "")}
          {...props}
        />
      ) : (
        <code className={className ? className : ""} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <S.PostContent>
      <div className="markdown-body">
        <ReactMarkdown
          components={components}
          children={content}
          remarkPlugins={[remarkGfm]}
        />
      </div>
    </S.PostContent>
  );
}
