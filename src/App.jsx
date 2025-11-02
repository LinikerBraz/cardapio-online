

import { useState } from "react";
import { ItemGrid } from './componentes/itemgrid'
import { Carrossel } from './componentes/carrossel' 
import { Header } from './componentes/header'
import { Navbar } from './componentes/navbar'
import './App.css'
import './App.js'

function App() {

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("comida");

  return (
    <>
    <Header />
    <Carrossel />
    <Navbar onCategoriaChange={setCategoriaSelecionada} />
    <ItemGrid categoriaSelecionada={categoriaSelecionada} />
    </>
  )
}

export default App
