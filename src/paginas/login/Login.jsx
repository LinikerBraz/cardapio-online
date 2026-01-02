import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function entrar() {
        if (email === "admin" && senha === "123")
            navigate("/admin");
        else
            alert("Login incorreto");
        }

return (
        <>
        <div className="login">
            <h2 className="login_titulo">Login</h2>
            <input
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <button onClick={entrar} className="botao_login">
                Entrar  
            </button>
        </div>
        </>
    )
}
