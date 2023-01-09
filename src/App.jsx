import React, { Component } from "react";
import SignUpFourms from "./components/SignUpFourms";
import SignInFourm from "./components/SignInFourm";
import MyNavbar from "./components/MyNavbar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { Route, Router, Routes } from "react-router-dom";
import AdminDashbourd from "./components/AdminDashbourd";
import NewProuductMaking from "./components/NewProuductMaking";
import NewCatogoryMaking from "./components/NewCatogoryMaking";
import NewVariantMaking from "./components/NewVariantMaking";


class App extends Component {
    state = {}
    render() {
        return (<div>
            <MyNavbar user=""></MyNavbar>

            <Routes>

                <Route path="/dashbord/newVariantMaking" element={<NewVariantMaking variants={[{
                    "name": "رنگ",
                    "value": ["آبی", "قرمز"]
                }, {
                    "name": "میزان حافظه SSD",
                    "value": ["256 گیگS SD", "512 گیگ SSD"]
                }, {
                    "name": "رم",
                    "value": ["16 گیگ", "8 گیگ"]
                }, {
                    "name": "هارد",
                    "value": ["گیگابایت 512", "ترابایت 1"]
                }]} ></NewVariantMaking>} />
                <Route path="/dashbord/newCatogoryMaking" element={<NewCatogoryMaking authed={true} />} />
                <Route path="/dashbord/newProuductMaking" element={<NewProuductMaking />} />
                <Route path="/dashbord" element={<AdminDashbourd />} />
                <Route path="/login" element={<SignInFourm />} />
                <Route path="/register" element={<SignUpFourms />} />
                <Route path="/" element={<AdminDashbourd />} />
            </Routes>
            <Footer></Footer>
        </div>);
    }
}

export default App;