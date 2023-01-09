import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
class ProductCartAdmin extends Component {
    state = {
        productName: this.props.productName,
        count: this.props.count,
        sellCount: this.props.sellCount,
        price: this.props.price,
        offPrice: this.props.offPrice,

    }
    render() {
        return (
            <div className="row col-12 p-0 m-0 my-3">
                <div className="m-0 p-0 col-12 row rounded-bottom" style={{ backgroundColor: "white" }}>
                    <div className="col-0 col-sm-1 d-none d-sm-block" >
                        <img style={{ width: "80px" }}
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                        />
                    </div>
                    <h6 className=" col-md-3  col-sm-7 col-8 d-flex justify-content-center my-auto" >
                        {this.state.productName}
                    </h6>
                    <small className=" col-md-2 d-none d-md-flex justify-content-center my-auto" >
                        تومان  {this.state.price}
                    </small>
                    <small className=" col-md-2 d-none d-md-flex justify-content-center my-auto" >
                        {this.state.sellCount}
                    </small>
                    <small className=" col-md-2 d-none d-md-flex justify-content-center my-auto " >
                        {this.state.count}
                    </small>
                    <Link to="" className="d-flex col-md-1 col-2 justify-content-center my-auto  h4 my-auto">
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                    </Link>
                    <Link to="/dashbord/newVariantMaking" className="d-flex col-md-1 col-2  my-auto justify-content-center   h4  ">
                        <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ProductCartAdmin;