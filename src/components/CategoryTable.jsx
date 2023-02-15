import { Component } from "react";
import MyDropDownAdmin from "./MyDropDownAdmin";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { Link } from "react-router-dom";
import ProductCartAdmin from "./ProductCartAdmin";
import CategoryNameCreator from "./CategoryNameCreator"
import axios from "axios"
class CategoryTable extends Component {
    state = {
        category: []
    }
    async componentDidMount() {
        let response = null
        try {
            response = await axios.get("http://192.168.97.91:8004/api/ProductCategory/20017")
            // alert("Connect OK");
        } catch (error) {
            console.log(error)
            console.log('this is error');
        }
        if (response != null) {
            this.setState({ category: [response.data] })
        }
        else {
            this.setState({
                category: [
                    {
                        "id": 20017,
                        "title": "root",
                        "isDeleted": false,
                        "creationDate": "12/20/2022 10:44:28",
                        "childs": [
                            {
                                "id": 20019,
                                "title": "الکتیریکی",
                                "isDeleted": true,
                                "creationDate": "12/20/2022 10:55:12",
                                "childs": [
                                    {
                                        "id": 20020,
                                        "title": "لپتاپ",
                                        "isDeleted": true,
                                        "creationDate": "12/20/2022 10:57:24",
                                        "childs": [
                                            {
                                                "id": 20031,
                                                "title": "ایسوس",
                                                "isDeleted": false,
                                                "creationDate": "12/25/2022 02:59:37",
                                                "childs": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 20030,
                                        "title": "موس",
                                        "isDeleted": false,
                                        "creationDate": "12/25/2022 02:50:22",
                                        "childs": []
                                    }
                                ]
                            },
                            {
                                "id": 20021,
                                "title": "دیجیتال",
                                "isDeleted": false,
                                "creationDate": "12/22/2022 11:54:46",
                                "childs": [
                                    {
                                        "id": 20022,
                                        "title": "تبلت",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:55:07",
                                        "childs": []
                                    },
                                    {
                                        "id": 20023,
                                        "title": "دوربین",
                                        "isDeleted": true,
                                        "creationDate": "12/22/2022 11:55:07",
                                        "childs": []
                                    },
                                    {
                                        "id": 20024,
                                        "title": "گوشس",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:01",
                                        "childs": []
                                    },
                                    {
                                        "id": 20025,
                                        "title": "خیار",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:08",
                                        "childs": []
                                    },
                                    {
                                        "id": 20026,
                                        "title": "ساعت",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:23",
                                        "childs": []
                                    }
                                ]
                            },
                            {
                                "id": 20027,
                                "title": "لباس",
                                "isDeleted": false,
                                "creationDate": "12/22/2022 11:56:40",
                                "childs": [
                                    {
                                        "id": 20028,
                                        "title": "تی شرت",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:57",
                                        "childs": []
                                    },
                                    {
                                        "id": 20029,
                                        "title": "شلوار",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:57:07",
                                        "childs": []
                                    }
                                ]
                            }
                        ]
                    }]
            })
            // alert(" Connect not ok");
        }
        console.log(this.state.category)
        console.log("OK SEE")
    }
    render() {
        return (
            <div className="">
                <div style={{ backgroundColor: "white" }} className="m-0 p-0" dir="ltr">
                    <div className=" p-2  row" >
                        <div className="  col-md-6 col-12 m-0 ">
                            <div className=" d-flex justify-content-center align-items-center m-5 my-md-0 mx-md-3 border rounded p-5 " style={{ height: "250px" }} >
                                گزارشات موجود نیست
                            </div>
                        </div>
                        <div className="shadow row  m-0 bg-dark  rounded-3  col-md-6 col-12  p-0 ">
                            <div className=" bg-dark  rounded-3 p-0 col-12 " >
                                <div className=" m-0  ">
                                    <div className="row col-12 bg-dark rounded-3  m-0 p-0 pe-3" style={{ height: "50px" }}>
                                        <div className=" col-10 text-white pt-2 text-center  "> اسم دسته بندی</div>
                                        <div className=" col-2 text-white pt-2 text-center  "> ویرایش</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-12 overflow-auto rounded-bottom m-0  bg-white px-2 py-4" style={{ maxHeight: "200px" }}>
                                <CategoryNameCreator config={this.state.category}
                                ></CategoryNameCreator>
                                {/* <h5 className="text-center my-5"> هیچ دسته بندی موجود نیست</h5> */}
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}

export default CategoryTable;



