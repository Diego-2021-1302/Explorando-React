export default function Home() {
  return (
<div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card bg-black text-light shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body text-center">
          <img
            src="./Perfil.jpg"
            alt="Mi Foto"
            className="rounded-circle mb-3"
            width="120"
            height="120"
            style={{ objectFit: 'cover' }}
          />
          <h3 className="card-title mb-3">Diego Garabito</h3>
          <p className="card-text"><strong>Correo:</strong> Diegoesmerlingarabito@hotmail.com</p>
        </div>
      </div>
    </div>
  );
}
