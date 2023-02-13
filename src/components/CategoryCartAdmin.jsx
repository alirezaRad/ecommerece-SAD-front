import { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
class CategoryCartAdmin extends Component {
    state = {
        categoryName: this.props.children,

    }
    render() {
        return (
            <div className="row col-12 p-0 m-0 my-3">
                <div className="m-0 p-0 col-10 row rounded-bottom" style={{ backgroundColor: "white" }}>
                    <h6 className=" col-10 d-flex justify-content-center my-auto" >
                        {this.state.categoryName}
                    </h6>
                </div>
                <Link to="/dashbord/CategoryEditing" className="d-flex  col-2  my-auto justify-content-center   h4  ">
                    <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                </Link>
            </div>
        );
    }
}

export default CategoryCartAdmin;