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
import axios from "axios"
class ProductTable extends Component {
    state = {
        products: [],
        category: []
    }
    async componentDidMount() {
        let response = null
        try {
            response = await axios.get("http://192.168.97.91:8004/api/Product/ProductsByCategory?id=20017")
            alert("product loaded")
        } catch (error) {
            console.log(error)
            alert(error)
        }
        if (response != null)
            this.setState({ products: response.data })
        else {
            this.setState({
                products: [
                    {
                        "id": 30003,
                        "categoryId": 20021,
                        "description": "economy",
                        "image": "https://cdn01.zoomit.ir/2022/2/xiaomi-mi-11-lite-black.jpg",
                        "name": "shiaomi 11 ligt 5g",
                        "minimumPrice": 0,
                        "totalQuantity": 0
                    },
                    {
                        "id": 10002,
                        "categoryId": 20024,
                        "description": "best laptop ever",
                        "image": "https://cdn01.zoomit.ir/2021/5/lenovo-ideapad-5-front.jpg",
                        "name": "lenovo ideapad 5",
                        "minimumPrice": 2030000,
                        "totalQuantity": 49
                    },
                    {
                        "id": 20003,
                        "categoryId": 20024,
                        "description": "string",
                        "image": "https://mestercomputer.com/wp-content/uploads/2022/06/temp-site-33-600x600.jpg",
                        "name": "razor mouse",
                        "minimumPrice": 0,
                        "totalQuantity": 0
                    },
                    {
                        "id": 30004,
                        "categoryId": 30021,
                        "description": "economy",
                        "image": "http://sc04.alicdn.com/kf/H88a795bf0a624d008b384d28ce3206e3r.png",
                        "name": "key board",
                        "minimumPrice": 0,
                        "totalQuantity": 0
                    }
                ]
            })
        }
        console.log(this.state.products)
        console.log("OK")
        let response2 = null
        try {
            response2 = await axios.get("http://192.168.97.91:8004/api/ProductCategory/20017")
            alert("Connect OK");
        } catch (error) {
            console.log(error)
            console.log('this is error');
        }
        if (response2 != null)
            this.setState({ category: [response2.data] })
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
                                "title": "??????????????????",
                                "isDeleted": true,
                                "creationDate": "12/20/2022 10:55:12",
                                "childs": [
                                    {
                                        "id": 20020,
                                        "title": "??????????",
                                        "isDeleted": true,
                                        "creationDate": "12/20/2022 10:57:24",
                                        "childs": [
                                            {
                                                "id": 20031,
                                                "title": "??????????",
                                                "isDeleted": false,
                                                "creationDate": "12/25/2022 02:59:37",
                                                "childs": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 20030,
                                        "title": "??????",
                                        "isDeleted": false,
                                        "creationDate": "12/25/2022 02:50:22",
                                        "childs": []
                                    }
                                ]
                            },
                            {
                                "id": 20021,
                                "title": "??????????????",
                                "isDeleted": false,
                                "creationDate": "12/22/2022 11:54:46",
                                "childs": [
                                    {
                                        "id": 20022,
                                        "title": "????????",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:55:07",
                                        "childs": []
                                    },
                                    {
                                        "id": 20023,
                                        "title": "????????????",
                                        "isDeleted": true,
                                        "creationDate": "12/22/2022 11:55:07",
                                        "childs": []
                                    },
                                    {
                                        "id": 20024,
                                        "title": "????????",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:01",
                                        "childs": []
                                    },
                                    {
                                        "id": 20025,
                                        "title": "????????",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:08",
                                        "childs": []
                                    },
                                    {
                                        "id": 20026,
                                        "title": "????????",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:23",
                                        "childs": []
                                    }
                                ]
                            },
                            {
                                "id": 20027,
                                "title": "????????",
                                "isDeleted": false,
                                "creationDate": "12/22/2022 11:56:40",
                                "childs": [
                                    {
                                        "id": 20028,
                                        "title": "???? ??????",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:57",
                                        "childs": []
                                    },
                                    {
                                        "id": 20029,
                                        "title": "??????????",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:57:07",
                                        "childs": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            })
            // alert(" Connect not ok");
        }
        console.log(this.state.category)
        console.log("OK")
        this.forceUpdate();
    }
    render() {
        return (
            <section style={{ backgroundColor: "white" }} ClassName="" >
                <div className="container-fluid p-5  " >
                    <div className="shadow row  m-0 bg-dark rounded-3">
                        <div className=" col-12 bg-dark  text-white rounded-top text-end p-2 d-md-flex " >
                            <Form className="d-flex me-auto ">
                                <Form.Control
                                    type="??????????"
                                    placeholder="??????????"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-dark bg-primary me-3 text-white  ">??????????</Button>
                                <Link to="/dashbord/newProuductMaking" className=" text-decoration-none">
                                    <Button variant="outline-dark bg-primary mr-auto text-white  bg-secondary"><div className="text-center " >?????????? ????????</div></Button>
                                </Link>
                            </Form>
                            <Dropdown className="text-end d-none d-md-block " >
                                <MyDropDownAdmin config={this.state.category}
                                ></MyDropDownAdmin></Dropdown>

                        </div>
                        <div className=" bg-dark p-0 row mx-auto" >
                            <div className="col-12 m-0 d-block justify-content-around row px-2">
                                <div className="row col-12 bg-dark m-0 p-0" style={{ height: "50px" }}>
                                    <div className="col-md-4 col-8 text-white pt-2 text-center"> ?????? ??????????</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> ????????</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> ????????</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> ????????????</div>
                                    <div className="col-md-1 col-2 text-white pt-2 text-sm-center  "> ????????</div>
                                    <div className="col-md-1 col-2 text-white pt-2 text-sm-center  "> ????????????</div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-12 overflow-auto rounded-bottom m-0  bg-white px-2 py-4" style={{ maxHeight: "500px" }}>
                            {this.state.products.map((index) => {
                                return (
                                    <ProductCartAdmin id={index.id} image={index.image} count={index.totalQuantity} sellCount="0" productName={index.name} price={index.minimumPrice}></ProductCartAdmin>)
                            })}
                            {/* <h5 className="text-center my-5"> ?????? ???????????? ?????????? ????????</h5> */}
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default ProductTable;



