import { Component } from "react";
import MyDropDownAdmin from "./MyDropDownAdmin";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { Link } from "react-router-dom";
import VarientCartAdmin from "./VarientCartAdmin";
import axios from "axios";
class ProductTable extends Component {
    state = {
        productItems: [],
        id: this.props.id,
    }
    async componentDidMount() {
        let response2 = null
        let temid = window.location.href.split('/')[5];
        this.setState({ id: temid })
        try {
            response2 = await axios.get(`http://192.168.97.91:8004/api/ProductItem/siblings?productId=${this.state.id}`)
            // alert("Connect OK AGain");
        } catch (error) {
            console.log(error)
            console.log('this is error');
            // alert(error);
        }
        if (response2 != null)
            this.setState({ productItems: response2.data })
        else {
            this.setState({
                productItems: [
                    {
                        'count': '100',
                        "name": "لپتاپ لنوو",
                        "sellCount": "140",
                        "price": "1500000",
                        "variantId": "2",
                        configurations: [
                            {
                                'name': '1',
                                'value': "آبی"
                            },
                            {
                                'name': '2',
                                'value': "هارد512"
                            },
                            {
                                'name': '2',
                                'value': "8 گیگ رم"
                            },
                            {
                                'name': '2',
                                'value': "256 اس اس دی"
                            }
                        ]
                    },
                    {
                        "variantId": "3",
                        'count': '100',
                        "name": "لپتاپ لنوو",
                        "sellCount": "140",
                        "price": "1500000",
                        configurations: [
                            {
                                'name': '1',
                                'value': "قرمز"
                            },
                            {
                                'name': '2',
                                'value': "هارد512"
                            },
                            {
                                'name': '2',
                                'value': "8 گیگ رم"
                            },
                            {
                                'name': '2',
                                'value': "256 اس اس دی"
                            }
                        ]
                    }
                ]
            })
            // alert(" Connect not ok");
        }
        console.log(this.state.category)
        console.log("OK")
    }
    render() {
        return (
            <section dir="ltr" style={{ backgroundColor: "white" }} ClassName="" >
                <div className="container-fluid p-5  " >
                    <div className="shadow row  m-0 bg-dark rounded-3">
                        <div className=" col-12 bg-dark  text-white rounded-top text-end p-2 d-md-flex " >

                        </div>
                        <div className=" bg-dark p-0 row mx-auto" >
                            <div className="col-12 m-0 d-block justify-content-around row px-2">
                                <div className="row col-12 bg-dark m-0 p-0" style={{ height: "50px" }}>
                                    <div className="col-md-5 col-10 text-white pt-2 text-center"> نوع محصول</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> قیمت</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> فروش</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> موجودی</div>
                                    <div className="col-md-1 col-2 text-white pt-2 text-sm-center  "> ویرایش</div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-12 overflow-auto rounded-bottom m-0  bg-white px-2 py-4" style={{ maxHeight: "500px" }}>
                            {this.state.productItems.map((index) => {
                                return (
                                    <VarientCartAdmin variantId={index.variantId} productitemId={this.state.id} count={index.count} sellCount={index.sellCount} productName={index.name} price={index.price} variant={index.configurations}></VarientCartAdmin>
                                )
                            })}
                            {/* <h5 className="text-center my-5"> هیچ محصولی موجود نیست</h5> */}
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default ProductTable;



