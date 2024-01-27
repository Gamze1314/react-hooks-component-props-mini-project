import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);
const { name, image, about } = blogData;
const { posts } = blogData;
console.log(posts);

function App() {
  return (
    <div className="App">
      <Header name={name} />
      <ArticleList />
      <Article title={posts.title} minutes={posts.minutes} date={posts.date} preview={posts.preview}/>
      <About src={image} about={about} />
    </div>
  );
}

export default App;