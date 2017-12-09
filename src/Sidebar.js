import React, {Component} from 'react';


class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                {/*table of contents*/}
                <div className="sidebar__box">
                    <h3>This is Sidebar</h3>
                    <ul className="table-of-contents">
                        <li><a href="#">Introduction</a></li>
                        <li><a href="#">Getting Started</a></li>
                        <li><a href="#">Implementing</a></li>
                        <li><a href="#">Building</a></li>
                        <li><a href="#">Conclusion</a></li>
                    </ul>
                </div>

                {/*sidebar ads*/}
                <div className="sidebar__box">
                    <div className="ad">
                        <img src="http://placekitten.com/g/300/250"/>
                    </div>
                </div>
            </aside>

        );
    }
}

export default Sidebar;
