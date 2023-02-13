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
            <div className=" my-5 py-5  justify-content-center row col-12">
                <div className="col-12 row m-5 justify-content-center p-0 m-0">
                    <div className="row col-12 col-md-6 justify-content-center p-0 m-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                            className="col-12 m-0 p-0"
                            alt="Laptop"
                        />
                    </div>
                    <div className="col-12 col-md-6 justify-content-center text-center">
                        <h1 className="">لپتاپ اچ پی پاویلیون</h1>
                        <p className="text-primary tet-decoration">لپتاپ</p>
                        <p className="">لپتاپ با کیفیت و با دوام </p>
                        <h3 className="">1500000 تومان</h3>
                        {this.starMaking()}
                        <button className="btn btn-primary">اضافه کردن به سبد خرید</button>
                    </div>
                </div>
            </div>
        );
    }
    starMaking() {
        let star = [];
        for (let i = 0; i < this.state.rate; i++) {
            star[i] = < i className="fa fa-star" />;
        }
        return star;
    }
}

export default ProductPage;