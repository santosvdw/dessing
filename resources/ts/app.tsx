import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home/home.js";

const About: React.FC = () => <h2>About Page</h2>;

export const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};
