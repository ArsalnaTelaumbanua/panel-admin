"use client";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";
import React from "react";
import Login from "../components/admin-apnel/Login";
import Loader from "../components/admin-apnel/Loader";
import Sidebar from "../components/admin-apnel/Sidebar";

const Layout = ({children}: {children: React.ReactNode}) => {

    const isLoading = useAppSelector((store) => store.loading);
    const {data: session} = useSession();

    if(!session?.user){
        return <Login />;
    }

    return <div className="flex">
        <Sidebar />
        <div className="w-full h-full">
            {/* <Navbar /> */}
            <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
        </div>
        {isLoading && <Loader />}
    </div>;
};

export default Layout;

function LoadingReducer(a: Element, b: Element): boolean {
    throw new Error("Function not implemented.");
}
