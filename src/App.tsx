import React from 'react';
import './App.css';
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <>
            <Header>
                <SearchBar />
            </Header>
            <Outlet />
        </>
    );
}

export default App;
