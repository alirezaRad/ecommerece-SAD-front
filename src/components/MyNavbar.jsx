import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, NavLink } from "react-router-dom";
import MyDropDown from "./MyDropDown";
class MyNavbar extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar variant="dark" bg="dark" className="text-white py-3  fixed-top shadow-sm  " expand="xxxl" dir='rtl'>
                    <Container fluid>
                        {/* <Navbar.Brand className="d-lg-none" href="#">فروشگاه</Navbar.Brand> */}
                        <Navbar.Toggle />
                        <Navbar.Offcanvas
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title  >
                                    فروشگاه
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-start flex-grow-1 pe-3">
                                    <NavLink to="/." className="text-end text-black text-decoration-none">خانه</NavLink>
                                    {this.props.user == "admin" ? (<>
                                        <NavLink to="/." className="text-end text-black text-decoration-none my-2">داشبورد</NavLink>
                                        <NavLink to="/." className="text-end text-black text-decoration-none my-2">اضافه کردن محصول</NavLink>
                                    </>
                                    ) : (
                                        <>
                                        </>
                                    )}
                                    <MyDropDown config={[
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
                                                                    "title": "fuck react dfgh",
                                                                    "isDeleted": false,
                                                                    "creationDate": "12/25/2022 02:59:37",
                                                                    "childs": []
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            "id": 20030,
                                                            "title": "fuck uifghjhddfghj",
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
                                                            "title": "camera",
                                                            "isDeleted": false,
                                                            "creationDate": "12/22/2022 11:56:08",
                                                            "childs": []
                                                        },
                                                        {
                                                            "id": 20026,
                                                            "title": "watch",
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
                                    ></MyDropDown>

                                </Nav>
                                <Form className="d-flex me-auto">
                                    <Form.Control
                                        type="جستجو"
                                        placeholder="جستجو"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-dark bg-primary me-3 text-white">جستجو</Button>
                                </Form>
                                {!this.props.user ? (
                                    <div className="pt-2  d-flex">
                                        <NavLink className="me-3  text-black text-decoration-none" to="/login" > ورود </NavLink>
                                        <NavLink className="mr-3 me-1  text-black text-decoration-none" to="/register" > / ثبت نام </NavLink>
                                    </div>) : (<></>)}
                                <div className="my-5  d-none d-md-block align-items-center mb-auto">
                                    <img style={{ height: "350px" }}
                                        src="https://blush.design/api/download?shareUri=GOom3zThy_BMHr__&c=Hair_0%7E2b121a_Outfit_0%7Eff92a2_Skin_0%7Ef5a37b&w=800&h=800&fm=png"
                                        alt=""
                                        className="img-fluid  flipVertical  mx-lg-1"
                                    ></img>
                                </div>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Form className="d-flex me-auto d-none d-lg-flex">
                            <Form.Control
                                type="جستجو"
                                placeholder="جستجو"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant=" bg-primary me-3 text-white">جستجو</Button>
                        </Form>
                        {!this.props.user ? (<div className="pt-2  d-flex d-none d-lg-flex">
                            <NavLink className="me-3 text-white text-decoration-none" to="/login" > ورود </NavLink>
                            <NavLink className="mr-3 me-1 text-white text-decoration-none" to="/register" > / ثبت نام </NavLink>
                        </div>
                        ) : (
                            <>
                                {this.props.user == 'admin' ? (
                                    <NavLink to="/." className="text-end text-white text-decoration-none my-2 mx-2 d-none d-lg-flex">داشبورد</NavLink>
                                ) : (<>
                                </>)}
                            </>
                        )}
                        <NavLink to="/cart">
                            <i className="fa fa-shopping-cart fa-lg me-4 ms-2 text-white mt-2" aria-hidden="true"></i>
                        </NavLink>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default MyNavbar;
