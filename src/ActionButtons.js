import React, {Component} from 'react';


class ActionButtons extends Component {
    render() {
        return (
            <div className="actions">
                <a href="#" className="actions__btn actions__btn--code">React Code</a>
                <a href="#" className="actions__btn actions__btn--demo">React Demo</a>
            </div>
        );
    }
}

export default ActionButtons;
