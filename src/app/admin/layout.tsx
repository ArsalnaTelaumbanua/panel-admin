"use client";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from "react";
import Login from "../components/admin-apnel/Login";

const Layout = () => {

    const isLoading = useAppSelector((store) => store.loading);
    const {data: session} = useSession();

    if(!session?.user){
        return <Login />;
    }

    return <div>layout</div>;
};

export default Layout;

function LoadingReducer(a: Element, b: Element): boolean {
    throw new Error("Function not implemented.");
}
