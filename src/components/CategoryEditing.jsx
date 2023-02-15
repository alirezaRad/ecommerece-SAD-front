import { faTurkishLiraSign } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Component } from "react";
import { Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import CategorySelectOptionExteme from "./CategorySelectOptionExteme"
class CategoryEditing extends Component {
    state = {
        variation: [],
        number: 1,
        newOne: "نمونه جدید",
        redirect: false,
        category: [],
        newName: null,
        name: "Name",
        parentId: 20017,
        newParentId: 20017
    }
    addVariation = () => {
        let tem = {
            categoryId: this.state.id,
            name: this.state.newOne
        }
        this.state.variation.push(tem);
        this.state.number = 1;
        this.forceUpdate();
    }
    create = async () => {
        const response = null;
        if (this.state.newName != null)
            this.state.name = this.state.newName;
        if (this.state.newParentId != 20017)
            this.state.parentId = this.state.newParentId
        try {
            response = axios.post("", this.state.variation)
        } catch (error) {
            console.log(error)
        }
        if (response != null)
            console.log(response);
        else {
            alert(" we cant send data")
        }

        this.state.redirect = true;
        this.forceUpdate();
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
    async componentDidMount() {
        let temid = window.location.href.split('/')[5];
        this.setState({ id: temid })
        let responseCategory = null
        try {
            responseCategory = await axios.get(`http://192.168.97.91:8004/api/ProductCategory/${this.state.id}`)
            this.forceUpdate();
            // alert("Connect OK");
        } catch (error) {
            console.log(error)
            console.log('this is error');
        }
        if (responseCategory != null) {
            alert("OKOKOK")
            this.setState({ name: responseCategory.data.name })
        }
        else {
            this.setState({
                name: "لپتاپ"
            })
            // alert(" Connect not ok");
        }

        let response = null
        try {
            response = await axios.get("http://192.168.97.91:8004/api/ProductCategory/20017")
            alert("Connect OK");
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
        let response2 = null
        try {
            response2 = await axios.get(`http://192.168.97.91:8004/api/ProductVariation/ByCategory?categoryId=${this.state.id}`)
            alert("Connect OK YES");
        } catch (error) {
            console.log(error)
            console.log('this is error');
            alert(error);
        }
        if (response2 != null) {

            this.setState({ variation: response2.data })
        }
        else {
            this.setState({
                variation: [
                    {
                        "values": [],
                        "id": 7,
                        "name": "اندازه",
                        "categoryId": 40022
                    },
                    {
                        "values": [],
                        "id": 8,
                        "name": "طرح",
                        "categoryId": 40022
                    },
                    {
                        "values": [],
                        "id": 9,
                        "name": "شکل",
                        "categoryId": 40022
                    }
                ]
            })
            // alert(" Connect not ok");
        }
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
                                            ویرایش دسته بندی موجود
                                        </p>
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <form className="mx-1 mx-md-8">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <i className="fa fa-info fa-lg mx-3 mt-4 fa-fw d-inline" />
                                                        <label className="form-label" htmlFor="form3Example3c">
                                                            اسم جدید دسته بندی را انتخاب کنید
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="form3Example3c"
                                                            placeholder={this.state.name}
                                                            className="form-control me-3"
                                                            onChange={(event) => (this.state.nameChange = event.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-outline flex-fill mb-0">
                                                        <i className="fa fa-database fa-lg mx-3 mt-4 fa-fw mt-5 d-inline" />
                                                        <label className="form-label" htmlFor="form3Example4c">
                                                            دسته بندی ویرایش شده زیرمجموعه کدام دسته بندی باشد
                                                        </label>
                                                        <div className="me-3">
                                                            <select
                                                                className="selectpicker border-borderColor rounded p-2 mt-4"
                                                                data-live-search="true me-5"
                                                            // onChange={(event) => { this.state.newParentId = event.target.value }}
                                                            >
                                                                <CategorySelectOptionExteme parentTitle="" id='' config={this.state.category}>
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
                                                                <div>
                                                                    <div className="mt-5 mb-3 me-3 h6 d-inline"> {this.state.number++} . {index.name}</div>
                                                                    <button type="button" className="btn btn-danger btn-sm d-inline mt-3 mb-2 mx-3 mr-auto" onClick={() => {
                                                                        this.deletVariation(index.id)
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
                                                <div className="d-flex justify-content-center   mb-3 mt-5 mb-lg-4 ">
                                                    <button type="button" className="btn btn-primary btn-lg text-start " onClick={this.create}>
                                                        اعمال تغییرات
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className=" d-none d-lg-block col-md-2 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2 pt-0 mt-0 ">
                                            <img
                                                src="https://blush.design/api/download?shareUri=C5hT_WjUwWSeN-EO&c=Hair_0%7Ef26037_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
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

export default CategoryEditing;