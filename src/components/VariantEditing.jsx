import { map } from "jquery";
import { Component } from "react";
import ProductVariantTable from "./ProductVariantTable"
import CategorySelectOptionExteme from "./CategorySelectOptionExteme"
class VariantEditing extends Component {
    state = {
        variants: this.props.variants
    }
    render() {
        return (<>
            <section dir="rtl" className="vh-50 m-5 pt-5" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container h-50 my-5">
                    <div className="row d-flex justify-content-center align-items-center h-50">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                            ویرایش گونه موجود از محصول
                                        </p>
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <form className="mx-1 mx-md-8">
                                                {console.log(this.state.variants)}
                                                {this.state.variants.map((variant) => {
                                                    console.log(variant)
                                                    return (
                                                        <div className="d-flex flex-row align-items-center mb-3">
                                                            <div className="form-outline flex-fill mb-0">
                                                                <i className="fa fa-ellipsis-v fa-lg mx-3  fa-fw mt-2" />
                                                                <label className="form-label" htmlFor="form3Example4c">
                                                                    لطفا {variant.name} مورد نظر خود را انتخاب کنید
                                                                </label>
                                                                <div className="me-2 mt-0">
                                                                    <select
                                                                        className="selectpicker border-borderColor rounded p-2 mt-2 me-5 "
                                                                        data-live-search="true"
                                                                    >
                                                                        {variant.value.map((index) => {
                                                                            console.log(index)
                                                                            return (
                                                                                <option>{index}</option>
                                                                            )
                                                                        })}
                                                                    </select>
                                                                    <input style={{ width: "120px" }}
                                                                        type="text"
                                                                        id="form3Example3c"
                                                                        className="form-control d-inline me-3"
                                                                    />
                                                                    <button type="button" className="btn btn-secondary d-inline me-3 btn-sm">
                                                                        اضافه کردن
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <i className="fa fa-credit-card fa-lg mx-3 mt-4 fa-fw" />
                                                        <label className="form-label" htmlFor="form3Example4c">
                                                            قیمت این گونه از محصول را مشخص کنید
                                                        </label>
                                                        <div className="me-2">

                                                            <input
                                                                type="text"
                                                                id="form3Example4c"
                                                                className="form-control me-5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline  mb-0">
                                                        <i className="fa fa-plus fa-lg mx-3 mt-4 fa-fw" />
                                                        <label className="form-label" htmlFor="form3Example4c">
                                                            تعداد این گونه از محصول را مشخص کنید
                                                        </label>
                                                        <div className="me-2">

                                                            <input
                                                                type="number"
                                                                id="form3Example4c"
                                                                className="form-control me-5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mt-5 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg">
                                                        ویرایش
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className=" d-none d-lg-block col-md-2 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2 pt-0 mt-auto ">
                                            <img
                                                src="https://blush.design/api/download?shareUri=W4qKFVF-nE4I2T5r&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
                                                className="img-fluid flipVertical"
                                                alt="Sample image"
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductVariantTable></ProductVariantTable>
            </section>

        </>);
    }
}

export default VariantEditing;
// https://blush.design/api/download?shareUri=4kSKnigHYtWafTs5&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png