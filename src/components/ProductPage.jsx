import { Component } from "react";
import { Link } from "react-router-dom";
class ProductPage extends Component {
    state = {
        productName: this.props.productName,
        count: this.props.count,
        price: this.props.price,
        offPrice: this.props.offPrice,
        rate: this.props.rate,
        category: this.props.category

    }
    render() {
        return (
            <div className=" my-5 py-5  justify-content-center row col-12 container">
                <div className="col-12 row m-5 justify-content-center p-0 m-0">
                    <div className="row col-12 col-md-6 justify-content-center p-0 m-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                            className="col-12 m-0 p-0"
                            alt="Laptop"
                        />
                    </div>
                    <div className="col-12 row col-md-6 justify-content-center text-center">
                        <h1 className="">لپتاپ اچ پی پاویلیون</h1>
                        <p className="text-primary my-3">لپتاپ</p>
                        <p className="col-12 text-wrap">
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