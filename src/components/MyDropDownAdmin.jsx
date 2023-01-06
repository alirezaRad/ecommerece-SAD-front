import { Component } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link, NavLink } from "react-router-dom";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DOMPurify from 'dompurify';
import StringToReact from 'string-to-react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DrawCategor from "./DrawCategor";
import parse from 'html-react-parser';
import { Dropdown } from "bootstrap";

class MyDropDownAdmin extends Component {

    getMenuItemTitle = (menuItem, index, depthLevel) => {
        return menuItem.title;
    };

    getMenuItem = (menuItem, depthLevel, index) => {
        let title = menuItem.title;
        if (menuItem.childs && menuItem.childs.length > 0) {
            if (title == "root")
                return (
                    <DropdownButton className=""
                        variant="white text-white"
                        drop="down"
                        align="end"
                        title={`دسته بندی`}
                    > <MyDropDownAdmin config={menuItem.childs} childs={true} /></DropdownButton >
                );
            else
                return (
                    <DropdownButton className=""
                        variant="white"
                        drop="start"
                        title={`${title}`}
                    > <MyDropDownAdmin config={menuItem.childs} childs={true} /></DropdownButton >
                );

        } else {
            return <Link to="#action2" className="text-black text-decoration-none text-center d-block m-3">{title}</Link>;
        }
    };

    render = () => {
        let config = this.props.config
        let childs = [];
        config.map((item, index) => {
            childs.push(this.getMenuItem(item, 0, index));
        });
        return <>{childs}</>;
    };
}

export default MyDropDownAdmin;
