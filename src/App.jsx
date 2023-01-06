import React, { Component } from "react";
import SignUpFourms from "./components/SignUpFourms";
import SignInFourm from "./components/SignInFourm";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { Route, Router, Routes } from "react-router-dom";


class App extends Component {
    state = {}
    render() {
        return (<div>
            <MyNavbar user=""></MyNavbar>
            {/* <SignUpFourms></SignUpFourms> */}
            {/* <SignInFourm></SignInFourm> */}
            <Routes>
                {/* <Route path="/users/:id" component={User} /> */}
                {/* <Route path="/users" component={Users} /> */}
                <Route path="/login" element={<SignInFourm />} />
                {/* <Route path="/logout" component={Logout} /> */}
                <Route path="/register" element={<SignUpFourms />} />
                {/* <Protect path="/dashboard" component={Dashboard} /> */}
                {/* <Redirect from="/customers" to="users" /> */}
                {/* <Route path="/not-found" component={NotFound} /> */}
                <Route path="/" element={<HomePage />} />
                {/* <Redirect to="/not-found" /> */}
            </Routes>
            <Footer></Footer>
        </div>);
    }
}
export default App;