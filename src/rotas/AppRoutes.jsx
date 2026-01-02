import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu } from "../paginas/Menu";
import { Login } from "../paginas/login/Login";


export function AppRoutes() {
return (
<BrowserRouter>
    <Routes>

    <Route path="/" element={<Menu />} />
    <Route path="/login" element={<Login />} />
    {/*<Route path="/admin" element={<Admin />} />*/}

    </Routes>
</BrowserRouter>
);
}
