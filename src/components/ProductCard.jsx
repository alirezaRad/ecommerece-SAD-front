import { Component } from "react";
class ProductCard extends Component {
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
            <div class=" col-sm-6 col-lg-4 mb-4 mb-lg-0 " dir="rtl">
                <div className="card mx-sm-0 mx-5">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                        className="card-img-top"
                        alt="Laptop"
                    />
                    <div className="d-flex justify-content-between mb-3 mx-3">
                        <h5 className="mb-0">{this.state.productName}</h5>
                        <div>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <p className="small">
                                <a href="#!" className="text-muted ">
                                    {this.state.category}
                                </a>
                            </p>
                            <p className="small text-danger">
                                <s>{this.state.offPrice} تومان</s>
                            </p>
                        </div>
                        <div className="text-end mb-3">
                            <p className="text-start text-dark mb-0 text-right">{this.state.price} تومان</p>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div className="ms-auto text-primary">
                                {this.starMaking()}
                            </div>
                            <p className="text-muted mb-0">
                                موجودی: <span className="fw-bold">{this.state.count} عدد</span>
                            </p>
                        </div>
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

export default ProductCard;