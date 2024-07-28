import {ReactNode} from "react";
import MainHeader from "@/pages/ui/MainHeader";

export default function Layout({children}: {children: ReactNode}) {
    return <>
        <MainHeader/>
        {children}
    </>
}