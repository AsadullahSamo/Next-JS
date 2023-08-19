import React from 'react'
import Link from 'next/link'
import articleStyles from './Article.module.css'

export default function ArticleItem({ article }) {
  return (
    
    <Link href="/article/[id]" as={`/article/${article.id}`}>      {/* Go to /article/id where id is id returned by article.id*/}
      <span className={articleStyles.card}>
        <h3 className="max-w-[200px] mt-12"> {article.title} &rarr; </h3>
        <p> {article.body} </p>
      </span>
    </Link>
  )
}
