import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import ContentBody from "./ContentBody";


class ArticleInner extends Component {
    render() {
        return (
            <div className="article__inner">
                <Sidebar/>
                <ContentBody/>
            </div>
        );
    }
}

export default ArticleInner;
