import { Component } from "react";
import ProductCards from "./ProductCards";
import ProductTable from "./ProductTable";
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
                <section className=" container mt-5">
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
                        <div className="col-12  col-md-6  col-lg-5 row">

                            <div className="col-12 col-sm-6 col-md-12 my-5 d-flex py-3  my-auto justify-content-center">
                                <div>
                                    <img style={{ height: "125px" }}
                                        src="https://blush.design/api/download?shareUri=tc04X6lVsSqSDUTy&c=Hair_0%7Ee64360_Outfit_0%7E7f0a22_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
                                        alt=""
                                        className="   flipVertical  pe-4"
                                    />
                                    <div><h1 className="text-dark  d-flex  py-3 my-auto justify-content-center">تخفیف فراوان</h1></div></div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-12 my-5 d-flex  py-3  my-auto justify-content-center">
                                <div>
                                    <div className="me-3">
                                        <img style={{ height: "125px" }}
                                            src="https://blush.design/api/download?shareUri=ZJLeeDG5J4qu9tgf&c=Hair_0%7E2b121a_Outfit_0%7E7f0a22_Skin_0%7E53303b&w=800&h=800&fm=png"
                                            alt=""
                                            className="  flipVertical mr-3 "
                                        /></div>

                                    <div><h1 className="text-dark  d-flex py-3  my-auto justify-content-center">خرید ایمن</h1></div></div>

                            </div>
                            <div className="my-5 d-flex  py-3  my-auto justify-content-center">
                                <div>
                                    <img style={{ height: "125px" }}
                                        src="https://blush.design/api/download?shareUri=6JxzPi8UDFbpag5c&c=Hair_0%7E2b121a_Outfit_0%7E2b121a_Skin_0%7Ef5a37b&w=800&h=800&fm=png"
                                        alt=""
                                        className="flipVertical pe-3 "
                                    />
                                    <div><h1 className="text-dark d-flex   my-auto justify-content-center">ارسال سریع</h1></div>
                                </div>

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


