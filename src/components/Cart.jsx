import { Component } from "react";
import VarientCartAdmin from "./VarientCartAdmin";
import { Link } from "react-router-dom";
import CartTable from "./CartTable";
import Footer from "./Footer";
class Cart extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="p-4">
                </div>
                <div className="m-5 p-5 h6 border border-2 rounded" dir="rtl">
                    آدرس شما : زنجان،کوی ثمین ، کوچه دوم غربی ، قطعه 338 ، واحد2
                </div>
                <div className="container-fluid p-5 pt-0 my-3" >
                    <div className="shadow row  m-0 bg-dark rounded-3">
                        <div className=" col-12 bg-dark  text-white rounded-top text-end p-2 d-md-flex " >

                        </div>
                        <div className=" bg-dark p-0 row mx-auto" >
                            <div className="col-12 m-0 d-block justify-content-around row px-2">
                                <div className="row col-12 bg-dark m-0 p-0" style={{ height: "50px" }}>
                                    <div className="col-md-5 col-10 text-white pt-2 text-center"> نوع محصول</div>
                                    <div className="col-md-3 d-none d-md-block text-white pt-2 text-center"> قیمت</div>
                                    <div className="col-md-1 d-none d-md-block text-white pt-2 text-sm-center  "> کاهش</div>
                                    <div className="col-md-2 d-none d-md-block text-white pt-2 text-center"> تعداد</div>
                                    <div className="col-md-1 d-none d-md-block text-white pt-2 text-center"> افزایش</div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-12 overflow-auto rounded-bottom m-0  bg-white px-2 py-4" style={{ maxHeight: "500px" }}>
                            <CartTable number="2" productName="لپتاپ لنوو" price="120000000" variant={[
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
                            ]}></CartTable>
                            {/* <h5 className="text-center my-5"> هیچ محصولی موجود نیست</h5> */}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Link to="AllProduct">
                        <button className="btn btn-primary  btn-lg m-5 mt-0">
                            ادامه فرایند خرید
                        </button>
                    </Link>
                </div>
                <div className="p-5"></div>
            </>
        );
    }
    starMaking() {
        let star = [];
        for (let i = 0; i < 4; i++) {
            star[i] = < i className="fa fa-star" />;
        }
        return star;
    }
}
export default Cart;


