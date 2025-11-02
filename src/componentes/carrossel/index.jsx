import './carrossel.css';

export function Carrossel() {
return (
<div id="carrosselCafe" className="carousel slide carrossel-container" data-bs-ride="carousel">
    
    {/* Indicadores */}
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carrosselCafe" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carrosselCafe" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carrosselCafe" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    {/* Slides */}
    <div className="carousel-inner">
    <div className="carousel-item active">
        <img src="/img1.jpeg" className="d-block w-100 carrossel-img" alt="Café especial" />
        <div className="carousel-caption d-none d-md-block">
        <h3>O sabor que desperta o seu dia ☕</h3>
        <p>Cafés moídos na hora com grãos selecionados.</p>
        </div>
    </div>

    <div className="carousel-item">
        <img src="/img2.jpeg" className="d-block w-100 carrossel-img" alt="Doces artesanais" />
        <div className="carousel-caption d-none d-md-block">
        <h3>Doces artesanais incríveis 🍰</h3>
        <p>Feitos com amor para adoçar seus momentos.</p>
        </div>
    </div>

    <div className="carousel-item">
        <img src="/img3.jpeg" className="d-block w-100 carrossel-img" alt="Ambiente aconchegante" />
        <div className="carousel-caption d-none d-md-block">
        <h3>Um espaço pra você relaxar ☕</h3>
        <p>Ambiente acolhedor, wi-fi e música boa.</p>
        </div>
    </div>
    </div>

    {/* Controles */}
    <button className="carousel-control-prev" type="button" data-bs-target="#carrosselCafe" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carrosselCafe" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Próximo</span>
    </button>
</div>
);
}
