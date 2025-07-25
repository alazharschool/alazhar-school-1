"use client";

import ArticleCard from "@/components/article-card";

export default function ArabicLanguagePage({ post }: { post: any }) {
  return (
    <ArticleCard post={post} key={post.id} />
  );
} 