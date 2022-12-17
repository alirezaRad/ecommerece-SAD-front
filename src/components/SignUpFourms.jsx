import { Component } from "react";
class SignUpFourms extends Component {
    state = {}
    render() {
        return (
            <section dir="rtl" className="vh-50 m-5 " style={{ backgroundColor: "#FFFFFF" }}>
                <div className="container h-50 mb-5">
                    <div className="row d-flex justify-content-center align-items-center h-50">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                ثبت نام
                                            </p>
                                            <form className="mx-1 mx-md-8">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label " htmlFor="form3Example1c">
                                                            نام خود را وارد کنید
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="form3Example3c">
                                                            ایمیل خود را وارد کنید
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="form3Example4c">
                                                            رمز عبور خود را وارد کنید
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <label className="form-label" htmlFor="form3Example4cd">
                                                            رمز عبور خود را تکرار کنید
                                                        </label>
                                                        <input
                                                            type="password"
                                                            id="form3Example4cd"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mt-5 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg">
                                                        ثبت نام
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className=" d-none d-lg-block col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">
                                            <img
                                                src="https://blush.design/api/download?shareUri=t4FnXbfnUM39J6FX&c=Hair_0%7E2b121a_Outfit_0%7E2b121a_Skin_0%7Ef8bc9a&w=800&h=800&fm=png"
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
            </section>
        );
    }
}
export default SignUpFourms;