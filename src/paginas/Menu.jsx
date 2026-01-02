import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

import { ItemGrid } from "../componentes/itemgrid";
import { Carrossel } from "../componentes/carrossel";
import { Header } from "../componentes/header";
import { Navbar } from "../componentes/navbar";

export function Menu() {
const [categoriaSelecionada, setCategoriaSelecionada] = useState("comida");

return (
<>
    <Header />
    <Carrossel />
    <Navbar onCategoriaChange={setCategoriaSelecionada} />
    <ItemGrid categoriaSelecionada={categoriaSelecionada} />
</>
);
}
