import React from "react";
import ReactDOM from "react-dom";
import {Component} from "react";

class Portal extends Component {
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillMount() {
        document.body.removeChild(this.el);
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(children, this.el);
    }
}

export default Portal;