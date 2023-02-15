import { Component } from "react";
import { Link } from "react-router-dom";
class ProductPage extends Component {
    state = {
        productName: this.props.productName,
        count: this.props.count,
        price: this.props.price,
        offPrice: this.props.offPrice,
        rate: this.props.rate,
        category: this.props.category,
        variants:
            [{
                "name": "رنگ",
                "value": ["آبی", "قرمز"]
            }, {
                "name": "میزان حافظه SSD",
                "value": ["256 گیگS SD", "512 گیگ SSD"]
            }, {
                "name": "رم",
                "value": ["16 گیگ", "8 گیگ"]
            }, {
                "name": "هارد",
                "value": ["گیگابایت 512", "ترابایت 1"]
            }]

    }
    render() {
        return (
            <div className=" my-5 py-5  justify-content-center row col-12 container">
                <div className="col-12 row m-5 justify-content-center p-0 m-0">
                    <div className="row col-12 col-md-6 mb-auto">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                            className="m-0 p-0"
                            alt="Laptop"
                        />
                    </div>
                    <div className="col-12 row col-md-6 justify-content-end text-end">
                        <h1 className="">لپتاپ اچ پی پاویلیون</h1>
                        <p className="text-primary my-3">لپتاپ</p>
                        {this.state.variants.map((variant) => {
                            console.log(variant)
                            return (
                                <div className="d-flex flex-row align-items-center mb-3 " dir="rtl">
                                    <div className="form-outline flex-fill mb-0">
                                        <label className="form-label h6" htmlFor="form3Example4c">
                                            {variant.name}  :
                                        </label>
                                        <select
                                            className="selectpicker border-borderColor rounded p-2 mt-2 me-3 "
                                            data-live-search="true"
                                        >
                                            {variant.value.map((index) => {
                                                console.log(index)
                                                return (
                                                    <option>{index}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                            )
                        })}
                        <p className="col-12 text-wrap mt-3">
                            لپتاپ با کیفیت و با دوام لپتاپ با کیفیت و با دوام لپتاپ با کیفیت و با دوام لپتاپ با کیفیت و با دوام لپتاپ با کیفیت و با دوام لپتاپ با کیفیت و با دوام
                        </p>
                        <h3 className="my-3">1500000 تومان</h3>
                        <div className="ms-auto text-primary mb-2 mt-3">
                            {this.starMaking()}
                        </div>
                        <button className="btn btn-primary col-4 my-5">اضافه کردن به سبد خرید</button>
                    </div>
                </div>
            </div>
        );
    }
    starMaking() {
        let star = [];
        for (let i = 0; i < 4; i++) {
            star[i] = < i className="fa fa-star fa-lg" />;
        }
        return star;
    }
}

export default ProductPage;