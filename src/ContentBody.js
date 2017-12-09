import React, {Component} from 'react';


class ContentBody extends Component {

    render() {
        const code ="<ul class=\"table-of-contents\">\n" +
            "   <li><a href=\"#\">Introduction</a></li>\n" +
            "   <li><a href=\"#\">Getting Started</a></li>\n" +
            "   <li><a href=\"#\">Implementing</a></li>\n" +
            "   <li><a href=\"#\">Building</a></li>\n" +
            "   <li><a href=\"#\">Conclusion</a></li>\n" +
            "</ul>";
        return (
            <div className="article__content content">
                <p>Poor Cicero’s masterpiece wasn’t manhandled into unintelligible space-filling mumbo-jumbo until
                    sometime in the middle ages when a typesetter, seeking copy that would highlight different fonts
                    without being distracting, plucked the passage out of the original work and co-opted it for his own
                    purposes. Read more at: https://placeholder.com/text/lorem-ipsum/</p>
                <ul>
                    <li><a href="#">Introduction</a></li>
                    <li><a href="#">Getting Started</a></li>
                    <li><a href="#">Implementing</a></li>
                    <li><a href="#">Building</a></li>
                    <li><a href="#">Conclusion</a></li>
                </ul>
                <h2>Introductions</h2>
                <p>Poor Cicero’s masterpiece wasn’t manhandled into unintelligible space-filling mumbo-jumbo until
                    sometime in the middle ages when a typesetter, seeking copy that would highlight different fonts
                    without being distracting, plucked the passage out of the original work and co-opted it for his own
                    purposes. Read more at: https://placeholder.com/text/lorem-ipsum/</p>
                <img src="https://cdn.scotch.io/1/SPor3vSSAOWPDrKVeoog_how-to-use-sass-mixins.png.jpg"/>
                <pre><code>
                    {code}</code></pre>

                <h3>Smaller Section</h3>
                <p>Poor Cicero’s masterpiece wasn’t manhandled into unintelligible space-filling mumbo-jumbo until
                    sometime in the middle ages when a typesetter, seeking copy that would highlight different fonts
                    without being distracting, plucked the passage out of the original work and co-opted it for his own
                    purposes. Read more at: https://placeholder.com/text/lorem-ipsum/</p>

            </div>
        );
    }
}

export default ContentBody;
