import { useState } from "react";

export default function Multiplicacion() {
  const [numero, setNumero] = useState(1);

  const tabla = Array.from({ length: 13 }, (_, i) => `${numero} × ${i + 1} = ${numero * (i + 1)}`);
  const mitad = Math.ceil(tabla.length / 2);
  const columna1 = tabla.slice(0, mitad);
  const columna2 = tabla.slice(mitad);

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div
        className="card shadow p-4 bg-black text-white text-center"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h3 className="mb-4">Tabla de Multiplicar</h3>
        <div className="mb-3">
          <input
            type="number"
            className="form-control mx-auto"
            style={{ maxWidth: "300px" }}
            placeholder="Ingresa un número"
            onChange={(e) => setNumero(+e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <ul className="list-group list-group-flush text-start">
              {columna1.map((item, index) => (
                <li key={index} className="list-group-item bg-transparent text-white border-0 px-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <ul className="list-group list-group-flush text-start">
              {columna2.map((item, index) => (
                <li key={index} className="list-group-item bg-transparent text-white border-0 px-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
