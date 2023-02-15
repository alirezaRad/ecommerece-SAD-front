import { Component } from "react";
import DOMPurify from 'dompurify';
import StringToReact from 'string-to-react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import parse from 'html-react-parser';
import CategoryCartAdmin from "./CategoryCartAdmin";


class CategoryNameCreator extends Component {

    getMenuItemTitle = (menuItem, index, depthLevel) => {
        return menuItem.title;
    };

    getMenuItem = (menuItem, depthLevel, index, parentTitle) => {
        let title = menuItem.title
        if (parentTitle)
            title = parentTitle + menuItem.title;
        if (menuItem.childs && menuItem.childs.length > 0) {
            if (title == "root")
                return (
                    <CategoryNameCreator config={menuItem.childs} childs={true} />
                );
            else
                return (
                    <CategoryNameCreator parentTitle={`${title} _ `} config={menuItem.childs} childs={true} />
                );
        } else {
            return <CategoryCartAdmin categoryId={menuItem.id}>{title}</CategoryCartAdmin>
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

export default CategoryNameCreator;
