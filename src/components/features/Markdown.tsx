import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkMermaidPlugin from 'remark-mermaid-plugin';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Include KaTeX styles

interface MarkdownWrapperProps {
  content: string;
}

export const BaiscMarkdownWrapper: React.FC<MarkdownWrapperProps> = ({ content }) => {
  return (
    <ReactMarkdown
      children={content}
      remarkPlugins={[
        remarkMath,
        // @ts-ignore
        [remarkMermaidPlugin, { theme: "dark" }],
      ]}
      rehypePlugins={[
        rehypeRaw,
        rehypeStringify,
        rehypeKatex
      ]}
    />
  );
};
