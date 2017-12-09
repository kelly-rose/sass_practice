import React, {Component} from 'react';


class ArticleHeader extends Component {
    render() {
        return (
            <div className="article__header">
                <h1>Learning React.js & Sass</h1>
                {/*BYLINE*/}
                <div className="byline">
                    <div className="byline__box byline__author">
                        Kelly Rose (@evergreen)
                    </div>
                    <div className="byline__box byline__time">
                        <time>December 5, 2017</time>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleHeader;
