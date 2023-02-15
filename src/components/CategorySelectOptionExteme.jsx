import { Component } from "react";


class CategorySelectOptionExteme extends Component {

    getMenuItemTitle = (menuItem, index, depthLevel) => {
        return menuItem.title;
    };

    getMenuItem = (menuItem, depthLevel, index, parentTitle) => {
        let title = parentTitle + menuItem.title;
        if (menuItem.childs && menuItem.childs.length > 0) {
            if (title == "root")
                return (
                    <>
                        <option value="20017">محصولات</option>
                        <CategorySelectOptionExteme parentTitle="" config={menuItem.childs} childs={true} />
                    </>
                );
            else
                return (
                    <>
                        <option value={menuItem.id}>{title}</option>
                        <CategorySelectOptionExteme parentTitle={`${title} _ `} config={menuItem.childs} childs={true} />
                    </>
                );
        } else {
            return <option value={menuItem.id} >{title}</option>
        }
    };

    render = () => {
        let parentTitle = this.props.parentTitle
        let config = this.props.config
        let id = this.props.config.id
        console.log(id)
        console.log(parentTitle)
        let childs = [];
        config.map((item, index) => {
            childs.push(this.getMenuItem(item, 0, index, parentTitle));
        });

        if (this.props.childs && this.props.childs === true)
            return < >{childs}</>;
        return <>{childs}</>;
    };
}

export default CategorySelectOptionExteme;
