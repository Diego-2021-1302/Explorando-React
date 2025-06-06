export default function Experiencia() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4 justify-content-center align-items-center bg-black text-white" style={{ maxWidth: "700px", width: "100%" }}>
        <h3 className="text-center mb-4">Mi Experiencia</h3>
        <div className="ratio ratio-16x9 w-100">
          <iframe
            src="https://www.youtube.com/embed/TU_ID_DEL_VIDEO"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
