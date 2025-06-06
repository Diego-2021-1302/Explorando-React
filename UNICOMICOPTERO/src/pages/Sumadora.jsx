import { useState } from "react";

export default function Sumadora() {
const [a, setA] = useState(0);
const [b, setB] = useState(0);

return (
<div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
<div className="card shadow p-4 justify-content-center align-items-center bg-black text-white" style={{ maxWidth: "400px", width: "100%" }}>
<h3 className="text-center mb-4">Sumadora</h3>
<div className="mb-3 ">
<input
type="number"
className="form-control"
placeholder="Número 1"
onChange={(e) => setA(+e.target.value)}
/>
</div>
<div className="mb-3 ">
<input
type="number"
className="form-control"
placeholder="Número 2"
onChange={(e) => setB(+e.target.value)}
/>
</div>
<div className="text-center">
<p className="fw-bold fs-5">Resultado: {a + b}</p>
</div>
</div>
</div>
);
}

 