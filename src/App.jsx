import React, { Component } from "react";
import SignUpFourms from "./components/SignUpFourms";
import SignInFourm from "./components/SignInFourm";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProductCards from "./components/ProductCards";
import ProductCard from "./components/ProductCard";


class App extends Component {
    state = {}
    render() {
        return (<div>
            <MyNavbar></MyNavbar>
            {/* <SignUpFourms></SignUpFourms> */}
            {/* { <SignInFourm></SignInFourm>  */}
            <HomePage></HomePage>
            <ProductCards></ProductCards>
            <Footer></Footer>
        </div>);
    }
}
export default App;