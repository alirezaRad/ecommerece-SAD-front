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
                        <h1 className="">Product Name</h1>
                        <p className="text-primary">Product_Category</p>
                        <p className="">Product Description</p>
                        <h3 className="">$99.99</h3>
                        <div>
                            <Button
                                variant="secondary"
                                onClick={() => handleOptionChange('Option 1')}
                                active={selectedOption === 'Option 1'}
                            >
                                Option 1
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => handleOptionChange('Option 2')}
                                active={selectedOption === 'Option 2'}
                            >
                                Option 2
                            </Button>
                        </div>
                        <button className="btn btn-primary">Add to Cart</button>
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