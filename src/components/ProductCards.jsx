import { Component } from "react";
import ProductCard from "./ProductCard";
class ProductCards extends Component {
    state = {
        product: [
            {
                id: 2,
                productName: 'لپتاپ 1',
                count: 6,
                price: 1200000,
                offPrice: 1400000,
                rate: 4,
                category: 'لپتاپ'
            },
            {
                id: 2,
                productName: 'لپتاپ 1',
                count: 6,
                price: 1200000,
                offPrice: 1400000,
                rate: 4,
                category: 'لپتاپ'
            },
            {
                id: 4,
                productName: 'لپتاپ 1',
                count: 3,
                price: 1200000,
                offPrice: 1400000,
                rate: 4,
                category: 'لپتاپ'
            }
        ]
    }
    render() {
        return (
            <section style={{ backgroundColor: "#eee" }} ClassName="">
                <div className="container py-5 pt-4  ">
                    <h4 className="text-center pb-4 dark text-Weight-bold">پیشنهاد اسپارلوس</h4>
                    <div className="row">
                        {this.state.product.map((p, index) =>
                        (
                            <ProductCard key={index} productName={p.productName} count={p.count} price={p.price} offPrice={p.offPrice} rate={p.rate} category={p.category} />
                        ))
                        }
                    </div>
                </div>
            </section >
        );
    }
}

export default ProductCards;