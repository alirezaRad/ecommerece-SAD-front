import { Component } from 'react';
import StringToReact from 'string-to-react'
class DrawCategor extends Component {

    state = {}
    render() {
        return (StringToReact(this.props.s));
    }
}

export default DrawCategor;