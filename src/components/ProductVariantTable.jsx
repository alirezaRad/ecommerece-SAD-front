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
class ProductTable extends Component {
    state = {}
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
                                    <div className="col-md-1 col-2 text-white pt-2 text-sm-center  "> حذف</div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-12 overflow-auto rounded-bottom m-0  bg-white px-2 py-4" style={{ maxHeight: "500px" }}>
                            <VarientCartAdmin count="130" sellCount="1500" productName="لپتاپ لنوو" price="120000000" variant={[
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
                            ]}></VarientCartAdmin>
                            {/* <h5 className="text-center my-5"> هیچ محصولی موجود نیست</h5> */}
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default ProductTable;



