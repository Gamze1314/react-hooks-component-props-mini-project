import React from 'react';
import blogData from '../data/blog';

const { posts } = blogData;
console.log(posts);


function Article(props) {

  function getMinutes() {
  // find post.minutes property inside if blocks.
  const post = posts.filter((post) => post.title === props.title);

console.log(props.title)
console.log(post)

    if (post.minutes === 5) {
      return (
        <small>
          {post.minutes} minute read ☕️
          console.log(post.minutes)
        </small>
      );
    } else if (post.minutes === 15) {
      return (
        <small>
          {post.minutes} minute read ☕️☕️
        </small>
      );
    } else {
      return null;
    }
  }

  return (
    <div>
      <article>
        <h3>
          {props.title}
        </h3>
        <small>
        {props.date || "January 1, 1970"}
        {getMinutes()}
        </small>
        <p>{props.preview}</p>
      </article>
    </div>
  );
}

export default Article;
