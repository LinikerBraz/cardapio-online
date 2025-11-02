import React from "react";
import { produtos } from "../../dados/dados";
import { ItemCard } from "../itemcard";
import "./ItemGrid.css";

export function ItemGrid({ categoriaSelecionada }) {
const produtosFiltrados = produtos.filter(
(item) => item.categoria === categoriaSelecionada
);

return (
<div className="container my-5">
    <div className="row g-4">
    {produtosFiltrados.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <ItemCard
            nome={item.nome}
            preco={item.preco}
            imagem={item.imagem}
            descricao={item.descricao}
        />
        </div>
    ))}
    </div>
</div>
);
}
