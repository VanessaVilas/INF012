import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import HomePage from "../pages/HomePage"


export default function Routes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    )
}