import { Component } from "react";
import ProductTable from "./ProductTable";
import CategoryEditing from "./CategoryEditing"
import NewProuductMaking from "./NewProuductMaking";
import NewCatogoryMaking from "./NewCatogoryMaking";
import ProductVariantTable from "./ProductVariantTable";
import NewVariantMaking from "./NewVariantMaking";
import CategoryTable from "./CategoryTable";
import axios from "axios"
class AdminDashbourd extends Component {
    state = {
        id: 0
    }
    async componentDidMount() {
        this.state.id = window.location.href.split('/')[4]
    }
    render() {
        return (
            <>
                <section dir="rtl" className="vh-800 m-5 pt-5" style={{ backgroundColor: "#FFFFFF" }}>
                    <CategoryTable ></CategoryTable>
                </section>
                <ProductTable>
                </ProductTable></>

        );
    }
}
//const DashbourdWithRouter = withRouter(AdminDashbourd);
export default AdminDashbourd;