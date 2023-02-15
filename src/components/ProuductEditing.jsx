import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import CategorySelectOption from "./CategorySelectOption"
import { Navigate } from "react-router-dom";
import axios from "axios";
class ProuductEditing extends Component {
    state = {
        redirect: false,
        product: {
            "id": null,
            "categoryId": null,
            "description": null,
            "image": null,
            "name": null,
            "minimumPrice": null,
            "totalQuantity": null
        },
        category: [],
        id: null
    }
    create = async () => {

        const response = null
        try {
            response = axios.post("", this.state.product)
        } catch (error) {
            console.log(error)
        }
        if (response != null)
            this.setState({ products: response.data.data })
        else {
            alert(" we cant send data")
        }
        this.state.redirect = true;
        this.forceUpdate();

    }
    async componentDidMount() {
        let response = null
        this.state.id = window.location.href.split('/')[4]
        try {
            // response = await axios.get("http://192.168.97.91:8004/api/ProductCategory/20017")
            // alert("Connect OK");
        } catch (error) {
            console.log(error)
            console.log('this is error');
        }
        if (response != null)
            this.setState({ product: response.data.data })
        else {
            this.setState({
                product: {
                    "id": 30003,
                    "categoryId": 20021,
                    "description": "economy",
                    "image": "https://cdn01.zoomit.ir/2022/2/xiaomi-mi-11-lite-black.jpg",
                    "name": "shiaomi 11 ligt 5g",
                    "minimumPrice": 0,
                    "totalQuantity": 0
                }
            })
            // alert(" Connect not ok");
        }
        console.log("OK")
        let response2 = null
        try {
            // response2 = await axios.get("http://192.168.97.91:8004/api/ProductCategory/20017")
            // alert("Connect OK");
        } catch (error) {
            console.log(error)
            console.log('this is error');
        }
        if (response2 != null)
            this.setState({ category: response2.data.data })
        else {
            this.setState({
                category: [
                    {
                        "id": 20017,
                        "title": "root",
                        "isDeleted": false,
                        "creationDate": "12/20/2022 10:44:28",
                        "childs": [
                            {
                                "id": 20019,
                                "title": "الکتیریکی",
                                "isDeleted": true,
                                "creationDate": "12/20/2022 10:55:12",
                                "childs": [
                                    {
                                        "id": 20020,
                                        "title": "لپتاپ",
                                        "isDeleted": true,
                                        "creationDate": "12/20/2022 10:57:24",
                                        "childs": [
                                            {
                                                "id": 20031,
                                                "title": "ایسوس",
                                                "isDeleted": false,
                                                "creationDate": "12/25/2022 02:59:37",
                                                "childs": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": 20030,
                                        "title": "موس",
                                        "isDeleted": false,
                                        "creationDate": "12/25/2022 02:50:22",
                                        "childs": []
                                    }
                                ]
                            },
                            {
                                "id": 20021,
                                "title": "دیجیتال",
                                "isDeleted": false,
                                "creationDate": "12/22/2022 11:54:46",
                                "childs": [
                                    {
                                        "id": 20022,
                                        "title": "تبلت",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:55:07",
                                        "childs": []
                                    },
                                    {
                                        "id": 20023,
                                        "title": "دوربین",
                                        "isDeleted": true,
                                        "creationDate": "12/22/2022 11:55:07",
                                        "childs": []
                                    },
                                    {
                                        "id": 20024,
                                        "title": "گوشس",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:01",
                                        "childs": []
                                    },
                                    {
                                        "id": 20025,
                                        "title": "خیار",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:08",
                                        "childs": []
                                    },
                                    {
                                        "id": 20026,
                                        "title": "ساعت",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:23",
                                        "childs": []
                                    }
                                ]
                            },
                            {
                                "id": 20027,
                                "title": "لباس",
                                "isDeleted": false,
                                "creationDate": "12/22/2022 11:56:40",
                                "childs": [
                                    {
                                        "id": 20028,
                                        "title": "تی شرت",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:56:57",
                                        "childs": []
                                    },
                                    {
                                        "id": 20029,
                                        "title": "شلوار",
                                        "isDeleted": false,
                                        "creationDate": "12/22/2022 11:57:07",
                                        "childs": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            })
            // alert(" Connect not ok");
        }
        console.log(this.state.category)
        console.log("OK")
    }
    render() {
        return (<>            <section dir="rtl" className="vh-50 m-5 pt-5" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="container h-50 my-5">
                <div className="row d-flex justify-content-center align-items-center h-50">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                        ویرایش محصول جدید
                                    </p>
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <form className="mx-1 mx-md-8">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fas fa-cart-plus fa-lg mx-3 mt-4 fa-fw" />
                                                    <label className="form-label" htmlFor="form3Example3c">
                                                        در صورت لزوم اسم محصول را تغییر دهید
                                                    </label>
                                                    <div className="me-2"><input
                                                        type="text"
                                                        id="form3Example3c"
                                                        placeholder={this.state.product.name}
                                                        className="form-control me-5"
                                                        onChange={(event) => { this.state.product.name = event.target.value }}
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" justify-content-center m-3 me-2">
                                                {this.state.product.image == null ? (<>
                                                    {this.state.product.image == null ? (<><img src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                                                        className="rounded me-5" alt="example placeholder" style={{ width: '400px' }} /></>) : (<><img src={this.state.product.image}
                                                            className="rounded me-5" alt="example placeholder" style={{ width: '400px' }} /></>)}
                                                </>) : (<><img src={this.state.product.image}
                                                    className="rounded me-5" alt="example placeholder" style={{ width: '400px' }} /></>)}
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0 ">
                                                    <i className="fa fa-image fa-lg mx-3 mt-4 fa-fw" />
                                                    <label className="form-label" htmlFor="form3Example4c">
                                                        در صورت لزوم تصویر محصول را تغییر دهید                                              </label>
                                                    <div className="me-2 ">
                                                        <input
                                                            type="URL"
                                                            id="form3Example4c"
                                                            className="form-control me-5 "
                                                            onChange={(event) => {
                                                                this.state.product.image = event.target.value;
                                                                console.log(this.state.product.image)
                                                                this.forceUpdate();
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fa fa-align-justify fa-lg mx-3 mt-4 fa-fw" />
                                                    <label className="form-label" htmlFor="form3Example4c">
                                                        توضیحات جدید محصول را اعمال کنید
                                                    </label>
                                                    <div className="me-2">
                                                        <textarea
                                                            type="text"
                                                            id="form3Example4c"
                                                            placeholder={this.state.product.description}
                                                            className="form-control me-5"
                                                            rows={5}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fa fa-database fa-lg mx-3 mt-4 fa-fw mt-5" />
                                                    <label className="form-label" htmlFor="form3Example4c">
                                                        دسته بندی جدید محصول را انتخاب کنید
                                                    </label>
                                                    <div className="me-2">
                                                        <select
                                                            placeholder={this.state.product.categoryId}
                                                            className="selectpicker border-borderColor rounded p-2 mt-4 me-5"
                                                            data-live-search="true"
                                                            onChange={(event) => { this.state.product.categoryId = event.target.value }}
                                                        >
                                                            <CategorySelectOption parentTitle="" config={this.state.category}>
                                                            </CategorySelectOption>
                                                        </select>
                                                        <Link to="/dashbord/newCatogoryMaking" className="text-decoration-none">
                                                            <button type="button" className="d-block d-sm-inline mt-4 mt-sm-0 btn btn-secondary btn-small me-4">
                                                                <small> دسته جدید
                                                                </small></button></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mt-5 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={this.create}>
                                                    اعمال تغییرات
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className=" d-none d-lg-block col-md-8 col-lg-4 col-xl-4 d-flex align-items-center order-1 order-lg-2 pt-5 mt-5 m-5">
                                        <img
                                            src="https://blush.design/api/download?shareUri=uD0QM-nMcIEKZvMZ&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
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
            {
                this.state.redirect && <Navigate to={-1} replace={true} />
            }
        </section>

        </>);
    }
}

export default ProuductEditing;