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
    
    }

    async componentDidMount()
    {   
        
        console.log(this.state.id)
        console.log(window.location.href.split('/')[4])
        // const response = await axios.get("192.168.100.91:5031/api/Country")
        // console.log(response)
        // this.setState({products : response.data.data})
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