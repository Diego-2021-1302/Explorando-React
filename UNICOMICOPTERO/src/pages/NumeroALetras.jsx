import { useState } from "react";
import numeroALetras from "../utils/NumeroALetras";

export default function NumeroALetras() {
const [numero, setNumero] = useState("");

return (
<div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
<div className="card shadow p-4 justify-content-center align-items-center bg-black text-white" style={{ maxWidth: "400px", width: "100%" }}>
<h3 className="text-center mb-4">Traductor de Números</h3>
<div className="mb-3">
<input
type="number"
className="form-control"
placeholder="Número entre 1 y 1000"
onChange={(e) => setNumero(e.target.value)}
/>
</div>
<div className="text-center">
<p className="fw-bold fs-5">
{numero ? numeroALetras(parseInt(numero)) : ""}
</p>
</div>
</div>
</div>
);
}

 