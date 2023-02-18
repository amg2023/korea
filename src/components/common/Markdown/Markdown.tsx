import ReactMarkdown from "react-markdown";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as S from "./style";
import remarkGfm from "remark-gfm";

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
    <S.PostContent className="markdown">
      <ReactMarkdown
        components={components}
        children={content}
        remarkPlugins={[remarkGfm]}
      />
    </S.PostContent>
  );
}
