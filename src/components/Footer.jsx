import { Component } from "react";

class Footer
    extends Component {
    state = {}
    render() {
        return (
            <footer dir="rtl" className="container-fluid p-3 pt-4 my-0 bg-dark">
                <div className="d-flex justify-content-center ">
                    <div className="copyright text-white ">
                        <p >
                            ساخته شده توسط{" "}
                            <a href="#" target="_blank" className="text-secondary font-weight-bold">
                                گروه 3
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer
    ;