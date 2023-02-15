import { Component } from "react";
import DOMPurify from 'dompurify';
import StringToReact from 'string-to-react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import parse from 'html-react-parser';

class CategorySelectOption extends Component {

    getMenuItemTitle = (menuItem, index, depthLevel) => {
        return menuItem.title;
    };

    getMenuItem = (menuItem, depthLevel, index, parentTitle) => {
        let title = parentTitle + menuItem.title;
        if (menuItem.childs && menuItem.childs.length > 0) {
            if (title == "root")
                return (
                    <CategorySelectOption parentTitle="" config={menuItem.childs} childs={true} />
                );
            else
                return (
                    <CategorySelectOption parentTitle={`${title} _ `} config={menuItem.childs} childs={true} />
                );
        } else {
            return <option value={menuItem.id}>{title}</option>
        }
    };

    render = () => {
        let parentTitle = this.props.parentTitle
        let config = this.props.config
        let childs = [];
        config.map((item, index) => {
            childs.push(this.getMenuItem(item, 0, index, parentTitle));
        });

        if (this.props.childs && this.props.childs === true)
            return < >{childs}</>;
        return <>{childs}</>;
    };
}

export default CategorySelectOption;
