import React, {Component} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Count from "./react/AddOption";


class App extends Component {
    render() {
        return (
            <div className="site single">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;