import { Component } from "react";
import ProductCards from "./ProductCards";
import Footer from "./Footer";
class HomePage extends Component {
    state = {}
    render() {
        return (
            <>
                <section>
                    <div className="container-fluid mt-5 pt-4">
                        <div
                            className="row bg-primary align-items-center"
                            style={{ height: "70" }}
                        >
                            <div className="col-md-6 col-lg-8 text-center my-4">
                                <h1 className="display-3 text-white font-weight-bold ">
                                    <span className="display-2"> اسپرلوس ،</span>
                                    <span>شاهانه خرید کنید</span>
                                </h1>
                                <h1 className=" my-5 text-dark">هرکی پرسید بگو از کی خریدی</h1>
                                <a className="btn btn-dark btn-lg " href="">
                                    باشگاه مشتریان
                                </a>
                                <a className="btn btn-outline-info btn-lg m-2" href="">
                                    {" "}
                                    وبلاگ
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <img
                                    src="https://blush.design/api/download?shareUri=yw08QRqRBDkxZfVZ&c=Hair_0%7E2b121a_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
                                    alt=""
                                    className="img-fluid d-none d-md-block"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Of Banner */}
                {/* featcher */}
                <section className=" container ">
                    <div
                        className="row align-items-center"
                        style={{ height: "70" }}
                    >
                        <div className="col-md-6 col-lg-7">
                            <img
                                src="https://blush.design/api/download?shareUri=CJVIzOj01ebUW2D1&c=Hair_0%7E2b121a_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
                                alt=""
                                className="img-fluid d-none d-md-block flipVertical"
                            />
                        </div>
                        <div className="col-md-6 my-4 col-lg-5 text-center text-md-start">
                            <div className="my-5">
                                <img style={{ height: "150px" }}
                                    src="https://blush.design/api/download?shareUri=tc04X6lVsSqSDUTy&c=Hair_0%7Ee64360_Outfit_0%7E7f0a22_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
                                    alt=""
                                    className="img-fluid   flipVertical mx-md-5 mx-lg-5 "
                                />
                                <div><h1 className="text-dark  mx-md-5 mx-lg-4">تخفیف فراوان</h1></div>
                            </div>
                            <div className="my-5 ">
                                <img style={{ height: "150px" }}
                                    src="https://blush.design/api/download?shareUri=ZJLeeDG5J4qu9tgf&c=Hair_0%7E2b121a_Outfit_0%7E7f0a22_Skin_0%7E53303b&w=800&h=800&fm=png"
                                    alt=""
                                    className="img-fluid  flipVertical  mx-lg-1"
                                />
                                <div><h1 className="text-dark  mx-md-5  mx-5 mx-lg-5">خرید ایمن</h1></div>
                            </div>
                            <div className="my-5 ">
                                <img style={{ height: "150px" }}
                                    src="https://blush.design/api/download?shareUri=6JxzPi8UDFbpag5c&c=Hair_0%7E2b121a_Outfit_0%7E2b121a_Skin_0%7Ef5a37b&w=800&h=800&fm=png"
                                    alt=""
                                    className="img-fluid flipVertical mx-md-4 mx-lg-4 "
                                />
                                <div><h1 className="text-dark mx-md-5 mx-lg-4">ارسال سریع</h1></div>
                            </div>

                        </div>


                    </div>
                </section>
                <ProductCards></ProductCards>
            </>

        );
    }
}
export default HomePage;