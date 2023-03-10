import { faTurkishLiraSign } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";
import CategorySelectOptionExteme from "./CategorySelectOptionExteme"
class NewCatogoryMaking extends Component {
    state = {
        variation: [],
        number: 1,
        newOne: null,
        redirect: false,
        category: [],
        categoryId: null,
        name: null
    }
    create = async () => {
        if (this.state.name != null && this.state.categoryId != null) {
            const response = null
            try {
                response = axios.post("", this.state.product)
            } catch (error) {
                console.log(error)
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
            // response = await axios.get("http://192.168.97.91:8004/api/ProductCategory/20017")
            // alert("Connect OK");
        } catch (error) {
            console.log(error)
            console.log('this is error');
        }
        if (response != null)
            this.setState({ category: response.data.data })
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
    addVariation = () => {
        if (this.state.newOne != null) {
            this.state.variation.push(this.state.newOne);
            this.state.number = 1;
            this.forceUpdate();
        }
        else
            alert("لطفا فیلد موجود را کامل کنید")
    }
    deletVariation(index) {
        console.log(index)
        let delet = this.state.variation.indexOf(index)
        console.log(delet)
        console.log(this.state.variation[delet])
        this.state.variation.splice(delet, 1)
        this.state.number = 1;
        this.forceUpdate();
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
                                        ایجاد دسته بندی جدیدی
                                    </p>
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <form className="mx-1 mx-md-8">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fa fa-info fa-lg mx-3 mt-4 fa-fw d-inline" />
                                                    <label className="form-label" htmlFor="form3Example3c">
                                                        اسم دسته جدید را انتخاب کنید
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="form3Example3c"
                                                        className="form-control me-3"
                                                        onChange={(event) => { this.state.name = event.target.value }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <i className="fa fa-database fa-lg mx-3 mt-4 fa-fw mt-5 d-inline" />
                                                    <label className="form-label" htmlFor="form3Example4c">
                                                        دسته ای که ایجاد میکنید زیرمجموعه کدام دسته باشد
                                                    </label>
                                                    <div className="me-3">
                                                        <select
                                                            className="selectpicker border-borderColor rounded p-2 mt-4"
                                                            data-live-search="true me-5"
                                                            onChange={(event) => { this.state.categoryId = event.target.value }}
                                                        >
                                                            <CategorySelectOptionExteme parentTitle="" config={this.state.category}>
                                                            </CategorySelectOptionExteme>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline  mb-0">
                                                    <i className="fa fa-info fa-lg mx-3  fa-fw d-inline" />
                                                    <label className="form-label d-inline " htmlFor="form3Example3c">
                                                        ویژگی های محصولات این دسته بندی
                                                    </label>
                                                    {this.state.variation.map((index) => {
                                                        return (
                                                            <div className="mt-2">
                                                                <div className="mt-4 mb-3 me-3 h6 d-inline"> {this.state.number++} . {index}</div>
                                                                <button type="button" className="btn btn-danger btn-sm d-inline m-2 mr-auto" onClick={() => {
                                                                    this.deletVariation(index)
                                                                }}>
                                                                    حذف
                                                                </button>
                                                            </div>)
                                                    })
                                                    }
                                                    <div className="mt-4">
                                                        <input style={{ width: "150px" }}
                                                            type="text"
                                                            id="form3Example3c"
                                                            onChange={(event) => {
                                                                this.state.newOne = event.target.value;
                                                            }}
                                                            className="form-control d-inline me-3"
                                                        />
                                                        <button type="button" onClick={this.addVariation} className="btn btn-secondary d-inline me-3">
                                                            اضافه کردن
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mt-5 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn-lg" onClick={this.create}>
                                                    ایجاد
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className=" d-none d-lg-block col-md-2 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2 pt-0 mt-0 mr-auto">
                                        <img
                                            src="https://blush.design/api/download?shareUri=wtxUBy6Qs3gzClwN&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
                                            className="img-fluid flipVertical "
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

export default NewCatogoryMaking;