import Header from "../../Components/Header";
import {BodyWrapper} from "./Layout.styled";
import {Outlet, useLocation} from "react-router-dom";
import React from "react";

export default function Layout() {
    const location = useLocation();

    let withHeader = (location.pathname !== "/");

    return (
        <>
            {withHeader &&
                <Header />
            }
            <BodyWrapper>
                <Outlet />
            </BodyWrapper>
        </>
    );
};