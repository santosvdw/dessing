import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/home.js";
import { Assortiment } from "./pages/assortiment/assortiment.js";
import { Contact } from "./pages/contact/contact.js"

// import '../scss/globals/_index.scss';
import { OverOns } from "./pages/over-ons/overons.js";

const About: React.FC = () => <h2>About Page</h2>;

export const App: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assortiment" element={<Assortiment />} />
                <Route path="/over-ons" element={<OverOns />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};
