import React from 'react'
import blogData from '../data/blog'
import Article from './Article'

const { posts } = blogData
console.log(posts)

// an array of Article Components
// assign key attribute to each Article 

function ArticleList() {
    const article = posts.map((post) => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    })
  return (
    <div>
        <main>
            {article}
        </main>
    </div>
  )
}

export default ArticleList