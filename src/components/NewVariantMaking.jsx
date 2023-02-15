import { map } from "jquery";
import { Component } from "react";
import ProductVariantTable from "./ProductVariantTable"
import axios from "axios";
import { Navigate } from "react-router-dom";
import CategorySelectOptionExteme from "./CategorySelectOptionExteme"
class NewVariantMaking extends Component {
    state = {
        variants: [],
        id: null,
        price: null,
        count: null,
        redirect: false
    }
    create = async () => {
        let response;
        let condition = false;
        this.state.variants.map((index) => {
            if (index.thisValue == null)
                condition = true
        })
        if (condition == false && this.state.price != null && this.state.count != null) {
            try {
                response = axios.post("", this.state.variants)
            } catch (error) {
                console.log(error)
            }
            if (response != null)
                this.setState({ products: response.data })
            else {
                // alert(" we cant send data")
            }
            this.state.redirect = true;
            // alert("عالی")
            this.forceUpdate();

        }
        else {
            alert("فیلد های موجود را کامل کنید")
        }
    }
    async componentDidMount() {
        this.state.id = window.location.href.split('/')[4]
        let response2 = null

        try {
            // response2 = await axios.get("http://192.168.97.91:8004/api/ProductCategory/10002")
            // alert("Connect OK Again");
        } catch (error) {
            console.log(error)
            console.log('this is error');
            // alert(error);
        }
        if (response2 != null)
            this.setState({ variants: response2.data.data })
        else {
            this.setState({
                variants: [{
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
                }]
            })
            // alert(" Connect not ok");
        }
        this.state.variants.map((index) => { index.thisValue = null })
        console.log(this.state.category)
        console.log("OK")
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
                                            ایجاد یک گونه جدید از محصول
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
                                                                        onChange={(event) => { variant.thisValue = event.target.value }}
                                                                    >
                                                                        {variant.value.map((index) => {
                                                                            console.log(index)
                                                                            return (
                                                                                <option value={index}>{index}</option>
                                                                            )
                                                                        })}
                                                                    </select>
                                                                    <input style={{ width: "120px" }}
                                                                        type="text"
                                                                        id="form3Example3c"
                                                                        className="form-control d-inline me-3"
                                                                        onChange={(event) => { variant.newOne = event.target.value }}
                                                                    />
                                                                    <button type="button" className="btn btn-secondary d-inline me-3 btn-sm"
                                                                        onClick={(event) => {
                                                                            console.log(variant.newOne)
                                                                            variant.value.push(variant.newOne);
                                                                            this.forceUpdate();
                                                                        }}>
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
                                                                onChange={(event) => { this.state.price = event.target.value }}
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
                                                                onChange={(event) => { this.state.count = event.target.value }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mt-5 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg"
                                                        onClick={this.create}>
                                                        ایجاد
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className=" d-none d-lg-block col-md-2 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2 pt-0 mt-auto ">
                                            <img
                                                src="https://blush.design/api/download?shareUri=en65RzsllaQcgcSz&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
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
                {this.state.id == null ? (<></>) : (<><ProductVariantTable id={window.location.href.split('/')[5]}></ProductVariantTable></>)}
                {this.state.redirect && <Navigate to={`/dashbord/newVariantMaking/${this.state.id}`} replace={true} />}
            </section>
        </>);
    }
}

export default NewVariantMaking;
// https://blush.design/api/download?shareUri=4kSKnigHYtWafTs5&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png