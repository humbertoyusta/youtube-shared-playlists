import Header from "../../Components/Header";
import { BodyWrapper } from "./Layout.styled";
import { Outlet, useLocation } from "react-router-dom";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Layout() {
    const location = useLocation();

    let withHeader = location.pathname !== "/";

    return (
        <QueryClientProvider client={queryClient}>
            {withHeader && <Header />}
            <BodyWrapper>
                <Outlet />
            </BodyWrapper>
        </QueryClientProvider>
    );
}
