import { Component } from "react";
import ProductTable from "./ProductTable";
import NewProuductMaking from "./NewProuductMaking";
import NewCatogoryMaking from "./NewCatogoryMaking";
import ProductVariantTable from "./ProductVariantTable";
import NewVariantMaking from "./NewVariantMaking";
class AdminDashbourd extends Component {
    state = {}
    render() {
        return (
            <>
                <section dir="rtl" className="vh-800 m-5 pt-5" style={{ backgroundColor: "#FFFFFF" }}>
                    <div className="container h-800 my-5">
                        <div className="row d-flex justify-content-center align-items-center h-800 border rounded p-5">
                            گزارشات موجود نیست
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <ProductTable>
                    </ProductTable>
                    {/* <NewProuductMaking>
                    </NewProuductMaking>
                    <NewCatogoryMaking>

                    </NewCatogoryMaking>
                    <NewVariantMaking variants={[{
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
                    }]} ></NewVariantMaking>
                    <ProductVariantTable></ProductVariantTable> */}

                </section></>

        );
    }
}

export default AdminDashbourd;