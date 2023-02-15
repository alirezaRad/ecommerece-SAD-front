import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import CategorySelectOption from "./CategorySelectOption"
import { Navigate } from "react-router-dom";
import axios from "axios";
class NewProuductMaking extends Component {
    state = {
        redirect: false,
        product: {
            name: null,
            categoryId: null,
            description: null,
            image: null
        },
        category: [],
        name: null,
        image: null,
        description: null,
        categoryId: null
    }
    convertStringToBinary = (str) => str.split("").map(l => l.charCodeAt(0).toString(2)).join(" ");
    create = async () => {
        if (this.state.name != null && this.state.image != null && this.state.description != null && this.state.categoryId != null) {
            this.state.product.name = this.state.name
            this.state.product.categoryId = this.state.categoryId
            this.state.product.description = this.state.description
            this.state.product.image = this.convertStringToBinary(this.state.image)
            let response = null
            let temSample = {
                name: this.state.product.name,
                categoryId: this.state.product.categoryId,
                description: this.state.product.description
            }
            try {
                alert(this.state.product)
                console.log(this.state.product)
                response = axios.post("http://192.168.97.91:8004/api/Product/Create", temSample)
                alert("send")
                alert(response)
            } catch (error) {
                console.log(error)
                alert(error)
            }
            if (response != null)
                this.setState({ products: response.data.data })
            else {
                // alert(" we cant send data")
            }
            this.state.redirect = true;
            this.forceUpdate();
        }
        else {
            alert("فیلد های موجود را کامل کنید")
        }
    }

    async componentDidMount() {
        let response = null
        try {
            response = await axios.get("http://192.168.97.91:8004/api/ProductCategory/20017")
            // alert("Connect OK");
        } catch (error) {
            console.log(error)
            console.log('this is error');
        }
        if (response != null)
            this.setState({ category: [response.data] })
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
                                        ثبت محصول جدید
                                    </p>
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <form className="mx-1 mx-md-8">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fas fa-cart-plus fa-lg mx-3 mt-4 fa-fw" />
                                                    <label className="form-label" htmlFor="form3Example3c">
                                                        اسم محصول را وارد کنید
                                                    </label>
                                                    <div className="me-2"><input
                                                        type="text"
                                                        id="form3Example3c"
                                                        className="form-control me-5"
                                                        onChange={(event) => {
                                                            this.state.name = event.target.value
                                                        }}
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" justify-content-center m-3 me-2">
                                                {this.state.image == null ? (<><img src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                                                    className="rounded me-5" alt="example placeholder" style={{ width: '400px' }} /></>) : (<><img src={this.state.image}
                                                        className="rounded me-5" alt="example placeholder" style={{ width: '400px' }} /></>)}
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0 ">
                                                    <i className="fa fa-image fa-lg mx-3 mt-4 fa-fw" />
                                                    <label className="form-label" htmlFor="form3Example4c">
                                                        تصویر محصول را اضافه کنید                                                    </label>
                                                    <div className="me-2 ">
                                                        <input
                                                            type="URL"
                                                            id="form3Example4c"
                                                            className="form-control me-5 "
                                                            onChange={(event) => {
                                                                this.state.image = event.target.value;
                                                                console.log(this.state.image)
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
                                                        توضیحات محصول را اضافه کنید
                                                    </label>
                                                    <div className="me-2">
                                                        <textarea
                                                            type="text"
                                                            id="form3Example4c"
                                                            className="form-control me-5"
                                                            rows={5}
                                                            onChange={(event) => { this.state.description = event.target.value }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fa fa-database fa-lg mx-3 mt-4 fa-fw mt-5" />
                                                    <label className="form-label" htmlFor="form3Example4c">
                                                        دسته بندی محصول را انتخاب کنید
                                                    </label>
                                                    <div className="me-2">
                                                        <select
                                                            className="selectpicker border-borderColor rounded p-2 mt-4 me-5"
                                                            data-live-search="true"
                                                            onChange={(event) => { this.state.categoryId = event.target.value }}
                                                        >
                                                            {this.state.category == null ? (<></>) :
                                                                (<><CategorySelectOption parentTitle="" config={this.state.category}
                                                                >
                                                                </CategorySelectOption></>)}

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
                                                    ثبت
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className=" d-none d-lg-block col-md-8 col-lg-4 col-xl-4 d-flex  order-1 order-lg-2 pt-5 mt-5 m-5">
                                        <img
                                            src="https://blush.design/api/download?shareUri=cnHzSK1782i4hJ5y&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
                                            className="img-fluid flipVertical me-5"
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
        </section >

        </>);
    }
}

export default NewProuductMaking;