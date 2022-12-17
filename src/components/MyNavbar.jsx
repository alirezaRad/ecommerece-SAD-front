import { Component } from "react";
import 'bootstrap/js/dist/dropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
class MyNavbar extends Component {
    state = {}
    render() {
        return (
            <>
                <Navbar variant="dark" bg="dark" className="text-white py-3" expand="lg" dir = 'rtl'>
                    <Container fluid>
                        <Navbar.Brand href="#" className="text-white">فروشگاه</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0 p-4 py-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">خانه</Nav.Link>
                                <NavDropdown  title="لپتاپ" id="navbarScrollingDropdown1">
                                    <NavDropdown.Item href="#action2">اپل</NavDropdown.Item>
                                    <NavDropdown.Item href="#action3">
                                        سامسونگ
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        لنوو
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        ایسوس
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="کیبورد" id="navbarScrollingDropdown1">
                                    <NavDropdown.Item href="#action6">ماکروسافت</NavDropdown.Item>
                                    <NavDropdown.Item href="#action7">
                                        ریزر
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action8">
                                    وریتی
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action9">
                                    فراسو
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="ماوس" id="navbarScrollingDropdown1">
                                    <NavDropdown.Item href="#action10">ماکروسافت</NavDropdown.Item>
                                    <NavDropdown.Item href="#action11">
                                        ریزر
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action12">
                                    وریتی
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action13">
                                    فراسو
                                    </NavDropdown.Item>
                                </NavDropdown>
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
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        );
    }
}

export default MyNavbar;