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
import ProuductEditing from "./components/ProuductEditing"
import VariantEditing from "./components/VariantEditing"
import CategoryEditing from "./components/CategoryEditing";
import ProductCardsAll from "./components/ProductCardsAll";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";


class App extends Component {
    state = {}
    render() {
        return (<div>
            <MyNavbar user=""></MyNavbar>
            <Routes>
                <Route path="/dashbord/newVariantMaking/:id" element={<NewVariantMaking ></NewVariantMaking>} />
                <Route path="/dashbord/VariantEditing/:id/:id" element={<VariantEditing />} />
                <Route path="/dashbord/ProuductEditing/:id" element={<ProuductEditing />} />
                <Route path="/dashbord/CategoryEditing/:id" element={<CategoryEditing />} />
                <Route path="/dashbord/newCatogoryMaking" element={<NewCatogoryMaking />} />
                <Route path="/dashbord/newProuductMaking" element={<NewProuductMaking />} />
                <Route path="/dashbord/:id" element={<AdminDashbourd />} />
                <Route path="/login" element={<SignInFourm />} />
                <Route path="/register" element={<SignUpFourms />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/Product/:id" element={<ProductPage />} />
                <Route path="/AllProduct" element={<ProductCardsAll />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer></Footer>
        </div>);
    }
}

export default App;