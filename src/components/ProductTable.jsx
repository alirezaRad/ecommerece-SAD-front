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
class ProductTable extends Component {
    state = {}
    render() {
        return (
            <section style={{ backgroundColor: "white" }} ClassName="" >
                <div className="container-fluid p-5  " >
                    <div className="shadow row  m-0 bg-dark rounded-3">
                        <div className=" col-12 bg-dark  text-white rounded-top text-end p-2 d-md-flex " >
                            <Form className="d-flex me-auto ">
                                <Form.Control
                                    type="جستجو"
                                    placeholder="جستجو"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-dark bg-primary me-3 text-white  ">جستجو</Button>
                                <Button variant="outline-dark bg-primary mr-auto text-white  bg-secondary"><div className="text-center " >محصول جدید</div></Button>
                            </Form>
                            <Dropdown className="text-end d-none d-md-block " >
                                <MyDropDownAdmin config={[
                                    {
                                        "id": 20017,
                                        "title": "root",
                                        "isDeleted": false,
                                        "creationDate": "12/20/2022 10:44:28",
                                        "childs": [
                                            {
                                                "id": 20019,
                                                "title": "Grade2",
                                                "isDeleted": true,
                                                "creationDate": "12/20/2022 10:55:12",
                                                "childs": [
                                                    {
                                                        "id": 20020,
                                                        "title": "Grade2",
                                                        "isDeleted": true,
                                                        "creationDate": "12/20/2022 10:57:24",
                                                        "childs": [
                                                            {
                                                                "id": 20031,
                                                                "title": "fucxdfghkreact",
                                                                "isDeleted": false,
                                                                "creationDate": "12/25/2022 02:59:37",
                                                                "childs": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": 20030,
                                                        "title": "fuckdfghjkjhgfdui",
                                                        "isDeleted": false,
                                                        "creationDate": "12/25/2022 02:50:22",
                                                        "childs": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": 20021,
                                                "title": "Dijital",
                                                "isDeleted": false,
                                                "creationDate": "12/22/2022 11:54:46",
                                                "childs": [
                                                    {
                                                        "id": 20022,
                                                        "title": "tablet",
                                                        "isDeleted": false,
                                                        "creationDate": "12/22/2022 11:55:07",
                                                        "childs": []
                                                    },
                                                    {
                                                        "id": 20023,
                                                        "title": "tablet",
                                                        "isDeleted": true,
                                                        "creationDate": "12/22/2022 11:55:07",
                                                        "childs": []
                                                    },
                                                    {
                                                        "id": 20024,
                                                        "title": "laptop",
                                                        "isDeleted": false,
                                                        "creationDate": "12/22/2022 11:56:01",
                                                        "childs": []
                                                    },
                                                    {
                                                        "id": 20025,
                                                        "title": "دوربین",
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
                                                "title": "cloth",
                                                "isDeleted": false,
                                                "creationDate": "12/22/2022 11:56:40",
                                                "childs": [
                                                    {
                                                        "id": 20028,
                                                        "title": "T-shirt",
                                                        "isDeleted": false,
                                                        "creationDate": "12/22/2022 11:56:57",
                                                        "childs": []
                                                    },
                                                    {
                                                        "id": 20029,
                                                        "title": "suit",
                                                        "isDeleted": false,
                                                        "creationDate": "12/22/2022 11:57:07",
                                                        "childs": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]}
                                ></MyDropDownAdmin></Dropdown>

                        </div>
                        <div className=" bg-dark p-0 row mx-auto" >
                            <div className="col-12 m-0 d-block justify-content-around row px-2">
                                <div className="row col-12 bg-dark m-0 p-0" style={{ height: "50px" }}>
                                    <div className="col-md-4 col-8 text-white pt-2 text-center"> اسم محصول</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> قیمت</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> فروش</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> موجودی</div>
                                    <div className="col-md-1 col-2 text-white pt-2 text-sm-center  "> ادیت</div>
                                    <div className="col-md-1 col-2 text-white pt-2 text-sm-center  "> افزودن</div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-12 overflow-auto rounded-bottom m-0  bg-white px-2 py-4" style={{ maxHeight: "500px" }}>
                            <ProductCartAdmin count="130" sellCount="1500" productName="لپتاپ لنوو" price="120000000"></ProductCartAdmin>
                            {/* <h5 className="text-center my-5"> هیچ محصولی موجود نیست</h5> */}
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default ProductTable;



