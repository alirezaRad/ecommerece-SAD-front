import { Component } from "react";
import DOMPurify from 'dompurify';
import StringToReact from 'string-to-react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import parse from 'html-react-parser';

class MyDropDown extends Component {

    getMenuItemTitle = (menuItem, index, depthLevel) => {
        return menuItem.title;
    };

    getMenuItem = (menuItem, depthLevel, index) => {
        let title = menuItem.title;
        if (menuItem.childs && menuItem.childs.length > 0) {
            if (title == "root")
                return (<MyDropDown config={menuItem.childs} childs={true} />)
            else
                return (
                    <NavDropdown title={`${title}`} className=" text-end mx-2" > <MyDropDown config={menuItem.childs} childs={true} /></NavDropdown >
                );
        } else {
            return <Nav.Link href="#action2" className="text-end d-block m-3">{title}</Nav.Link>;
        }
    };

    render = () => {
        let config = this.props.config
        let childs = [];
        config.map((item, index) => {
            childs.push(this.getMenuItem(item, 0, index));
        });

        if (this.props.childs && this.props.childs === true)
            return < >{childs}</>;
        return <NavDropdown title="محصولات" className="text-end  mb-3">{childs}</NavDropdown>;
    };
}

export default MyDropDown;
