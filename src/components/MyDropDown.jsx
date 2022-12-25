import { Component } from "react";
import DOMPurify from 'dompurify';
import StringToReact from 'string-to-react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DrawCategor from "./DrawCategor";
import parse from 'html-react-parser';
//import JsxParser from 'react-jsx-parser'
// class MyDropDown extends Component {
//     state = {
//         result: "",
//         category: [
//             {
//                 title: "شماره یک",
//                 parent: null,
//                 id: 0,
//                 active: false
//             },
//             {
//                 title: "شماره دو",
//                 parent: 0,
//                 id: 1,
//                 active: false
//             },
//             {
//                 title: "شماره سه",
//                 parent: 0,
//                 id: 2,
//                 active: true
//             },
//             {
//                 title: "شماره چهار",
//                 parent: 1,
//                 id: 3,
//                 active: false
//             },
//             {
//                 title: "شماره پنج",
//                 parent: 1,
//                 id: 4,
//                 active: true
//             },
//             {
//                 title: "شماره شش",
//                 parent: 3,
//                 id: 5,
//                 active: true
//             }
//         ]
//     }

//     render() {
//         return (<>
//             {this.categoryMaking()}
//             {/* <JsxParser jsx={this.state.result} /> */}
//         </>)
//     }
//     categoryMaking() {
//         for (let index = 0; index < this.state.category.length; index++) {
//             this.categoryMakingSubs(index);
//         }
//         //   const element = <div dangerouslySetInnerHTML={{ __html: this.state.result }} />;
//         const element = parse(this.state.result);
//         let elementTem = <NavDropdown.Item href="#action2" className="text-end ">{this.state.category[0].title}</NavDropdown.Item>;
//         // console.log(element);
//         elementTem = <div> </div>;
//         elementTem.appendChild(<NavDropdown.Item href="#action2" className="text-end ">{this.state.category[0].title}</NavDropdown.Item>);
//         console.log(elementTem)
//         return elementTem;
//     }
//     categoryMakingSubs(index) {
//         if (!this.state.category[index].active) {
//             this.state.result = this.state.result + `<NavDropdown title = '${this.state.category[index].title}' className = " text-end mx-2" >`
//             for (let index2 = 0; index2 < this.state.category.length; index2++) {
//                 if (this.state.category[index2].parent === this.state.category[index].id) {
//                     this.categoryMakingSubs(index2);
//                 }
//             }
//             this.state.result = this.state.result + '</NavDropdown>'
//         }
//         else {
//             this.state.result = this.state.result + `<NavDropdown.Item href="#action2" className="text-end ">${this.state.category[index].title}</NavDropdown.Item>`
//         }
//     }

// }

// export default MyDropDown;
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
