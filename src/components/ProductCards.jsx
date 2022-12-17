import { Component } from "react";
import ProductCard from "./ProductCard";
class ProductCards extends Component {
    state = {}
    render() {
        return (
            <section style={{ backgroundColor: "#eee" }} ClassName="">
                <div className="container py-5 pt-4  ">
                    <h4 className="text-center pb-4 dark text-Weight-bold">پیشنهاد اسپارلوس</h4>
                    <div className="row">
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </section >
        );
    }
}

export default ProductCards;