import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faRupiahSign } from '@fortawesome/free-solid-svg-icons'
class ProductCartAdmin extends Component {
    state = {
        productName: this.props.productName,
        price: this.props.price,
        variant: this.props.variant,
        image: this.props.image,
        number: this.props.number

    }
    productName() {
        let name = this.state.productName
        this.state.variant.forEach(index => {
            name = name + " _ " + index.value
        });
        return name
    }
    render() {
        return (
            <div className="row col-12 p-0 m-0 my-3">
                <div className="m-0 p-0 col-12 row rounded-bottom" style={{ backgroundColor: "white" }}>
                    <div className="col-0 col-sm-1 d-none d-sm-block" >
                        <img style={{ width: "80px" }}
                            src={this.state.image}
                        />
                    </div>
                    <small className=" col-md-4  col-sm-8 col-9 d-flex justify-content-center my-auto" >
                        {this.productName()}
                    </small>
                    <small className=" col-md-3 d-none d-md-flex justify-content-center my-auto" >
                        تومان  {this.state.price}
                    </small>
                    <Link to="" className="d-flex col-md-1 col-2 justify-content-center my-auto text-decoration-none  h4 my-auto">
                        <i class="fas fa-minus    " aria-hidden="true"></i>
                    </Link>
                    <small className=" col-md-2 d-none d-md-flex justify-content-center my-auto" >
                        {this.state.number}
                    </small>
                    <Link to="" className="d-flex col-md-1 col-1 justify-content-center my-auto text-decoration-none  h4 my-auto">
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProductCartAdmin;