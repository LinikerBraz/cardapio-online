// src/componentes/ItemCard.jsx
import React from "react";
import "./ItemCard.css";

export function ItemCard({ nome, preco, imagem, descricao }) {
return (
<div className="card item-card shadow-sm h-100">
    <div className="image-container">
    <img
        src={imagem || "/placeholder.svg"}
        className="card-img-top"
        alt={nome}
    />
    </div>

    <div className="card-body text-center">
    <h5 className="card-title">{nome}</h5>
    {descricao && <p className="card-text text-muted">{descricao}</p>}
    <p className="fw-bold preco">R$ {preco.toFixed(2)}</p>
    </div>
</div>
);
}
