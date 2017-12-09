import React, { Component } from 'react';
import ArticleHeader from "./ArticleHeader";
import ArticleImage from "./ArticleImage";
import ActionButtons from "./ActionButtons";
import ArticleInner from "./ArticleInner";


class Article extends Component {
  render() {
    return (
<article className="article article--single">
        <ArticleHeader/>
        <ArticleImage/>
        <ActionButtons/>
        <ArticleInner/>
</article>
    );
  }
}

export default Article;
