import React, { useState } from "react";
import "./App.css";

function App() {
                 {/* ESTADOS PARA CONTROLAR  */}
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [metodoPago, setMetodoPago] = useState("Tarjeta de crédito");

  const [error, setError] = useState("");
  const [contenido, setContenido] = useState("");

  const [compraExitosa, setCompraExitosa] = useState(false);
  const [libroComprado, setLibroComprado] = useState("");

              {/* FUNCIONES */}
  const leer = (mensaje) => {
    setContenido(mensaje);
    setMostrarModal(true);
  };

  const cerrar = () => {
    setMostrarModal(false);
  };

  const comprar = (libro) => {
  setLibroComprado(libro);
  setMostrarFormulario(true);
};
  const validarCompra = () => {

  if (!nombre || !correo || !direccion) {
    setError("Todos los campos son obligatorios");
    return;
  }

  if (!correo.includes("@")) {
    setError("El correo no es válido");
    return;
  }

  if (nombre.length < 3) {
    setError("El nombre debe tener mínimo 3 caracteres");
    return;
  }

  setError("");
  setMostrarFormulario(false);
  setCompraExitosa(true);
};

  return (
    <div>
           {/* INICIO  */}
      <header>
        <img src="/img/logo.png.jpeg" alt="Logo" />
        <h1>Librería BL</h1>
      </header>

      <section style={{ textAlign: "center", padding: "20px" }}>
        <h2>Bienvenido a Librería BL</h2>
        <p>Descubre libros que inspiran y transforman tu vida 📚</p>
      </section>
          
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#catalogo">Catálogo</a>
        <a href="#categorias">Categorías</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <h2 style={{ textAlign: "center" }}>Nuestros Libros</h2>

             {/* CATALOGO   */}
      <div className="container">


               {/* LIBRO 1 */}
        <div className="book">
          <img src="/img/libro1.jpg" alt="libro" />
          <h3>Don Quijote</h3>
          <p className="price">$18.500</p>
          <button onClick={() => leer("En un lugar de la Mancha, vivía un hombre obsesionado con las historias de caballería, tanto que decidió convertirse en uno. Armado con su imaginación, salió a luchar contra gigantes que en realidad eran molinos. Esta obra mezcla aventura, locura y reflexión sobre los sueños… ¿Qué tan lejos estarías dispuesto a llegar por lo que crees?...")}>Leer</button>
          <button onClick={() => comprar("Don Quijote")}>comprar</button>
        </div>

              {/* LIBRO 2 */}
        <div className="book">
          <img src="/img/libro2.jpg" alt="libro" />
          <h3>Mi Psicóloga Me Dijo</h3>
          <p className="price">$28.000</p>
          <button onClick={() => leer("Este libro es un viaje hacia el interior. Habla de emociones, heridas y procesos que muchas veces ignoramos. A través de experiencias reales, te hará cuestionarte, entenderte y sanar poco a poco. No es solo un libro… es una conversación contigo mismo...")}>Leer</button>
          <button onClick={() =>comprar("Mi Psicologa Me Dijo")}>comprar</button>
        </div>

             {/* LIBRO 3 */}
        <div className="book">
          <img src="/img/libro3.jpg" alt="libro" />
          <h3>Amor Fati</h3>
          <p className="price">$32.000</p>
          <button onClick={() => leer("Amor Fati significa amar tu destino, aceptar cada momento de tu vida, incluso el dolor. Este libro te invita a cambiar tu forma de ver las dificultades y convertirlas en oportunidades de crecimiento. Una filosofía poderosa para quienes buscan vivir sin arrepentimientos...")}>Leer</button>
          <button onClick={() =>comprar("Amor fati")}>comprar</button>
        </div>

              {/* LIBRO 4  */}
        <div className="book">
          <img src="/img/libro4.jpg" alt="libro" />
          <h3>El Principito</h3>
          <p className="price">$28.000</p>
          <button onClick={() => leer("A través de un pequeño viajero que recorre planetas, esta historia revela profundas lecciones sobre la vida, el amor y la amistad. Cada encuentro deja una enseñanza que solo se entiende con el corazón. Un libro que parece infantil, pero transforma a cualquier adulto...")}>Leer</button>
          <button onClick={() =>comprar("El Principito")}>comprar</button>
        </div>

             {/*  LIBRO 5 */}
        <div className="book">
          <img src="/img/libro5.jpg" alt="libro" />
          <h3>Hábitos Atómicos</h3>
          <p className="price">$35.000</p>
          <button onClick={() => leer("No necesitas cambios gigantes para transformar tu vida. Este libro demuestra cómo pequeñas acciones diarias pueden generar resultados extraordinarios con el tiempo. Aprenderás a construir buenos hábitos, eliminar los malos y mejorar cada día sin sentirte abrumado...")}>Leer</button>
          <button onClick={() =>comprar("Habitos Atomicos")}>comprar</button>
        </div>

              {/* LIBRO 6  */}
        <div className="book">
          <img src="/img/libro6.jpg" alt="libro" />
          <h3>El Poder Del Ahora</h3>
         <p className="price">$25.000</p>
          <button onClick={() => leer("La mayoría de las personas viven atrapadas en el pasado o preocupadas por el futuro. Este libro propone algo diferente: enfocarte en el presente. A través de enseñanzas profundas, te ayudará a encontrar paz mental y vivir con mayor conciencia...")}>Leer</button>
         <button onClick={() =>comprar("El Poder Del Ahora")}>comprar</button>
        </div>

             {/* LIBRO 7  */}
        <div className="book">
          <img src="/img/libro7.jpg" alt="libro" />
          <h3>Carpe Diem</h3>
          <p className="price">$35.000</p>
          <button onClick={() => leer("El tiempo pasa más rápido de lo que creemos. Este libro te invita a reflexionar sobre cómo estás viviendo tu vida, si estás aprovechando cada momento o simplemente dejando que los días pasen. Una llamada de atención para vivir con intención y propósito...")}>Leer</button>
          <button onClick={() =>comprar("Carpe Diem")}>comprar</button>
        </div>

             {/* LIBRO 8  */}
        <div className="book">
          <img src="/img/libro8.jpg" alt="libro" />
          <h3>Memento Mori</h3>
          <p className="price">$35.000</p>
          <button onClick={() => leer("Recordar que la vida es finita no es algo negativo, es una oportunidad. Este libro plantea que al aceptar nuestra mortalidad, podemos vivir con más intensidad, tomar mejores decisiones y enfocarnos en lo que realmente importa...")}>Leer</button>
        <button onClick={() =>comprar("Memento mori")}>comprar</button>
        </div>

             {/* LIBRO 9 */}
        <div className="book">
          <img src="/img/libro9.jpg" alt="libro" />
          <h3>Cien Años De Soledad</h3>
          <p className="price">$28.000</p>
          <button onClick={() => leer("La historia de la familia Buendía en el pueblo de Macondo está llena de magia, tragedia y realismo mágico. Cada generación repite errores y vive destinos marcados por el amor, la soledad y el tiempo. Una obra que te envuelve y no te suelta...")}>Leer</button>
        <button onClick={() =>comprar("Cien Años De Soledad")}>comprar</button>
        </div>

      </div>

      {/* MODAL */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-content">
            <p>{contenido}</p>
            <button onClick={cerrar}>Cerrar</button>
          </div>
        </div>
      )}
      {mostrarFormulario && (
  <div className="modal">
    <div className="modal-content">

      <h2>Datos del comprador</h2>

      <p id="libroSeleccionado">
        📖 Libro: {libroComprado}
      </p>

      <label>Nombre completo:</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label>Correo electrónico:</label>
      <input
        type="email"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <label>Dirección de envío:</label>
      <input
        type="text"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />

      <label>Método de pago:</label>
      <select
        value={metodoPago}
        onChange={(e) => setMetodoPago(e.target.value)}
      >
        <option>Tarjeta de crédito</option>
        <option>PSE</option>
        <option>Nequi</option>
        <option>Contra Entrega</option>
      </select>

      <button onClick={validarCompra}>
        Confirmar compra
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={() => setMostrarFormulario(false)}>
        Cancelar
      </button>

    </div>
  </div>
)}
      {compraExitosa && (
  <div className="modal">
    <div className="modal-content">
      <h2>✅ ¡Compra realizada con éxito!</h2>

      <p>📖 Libro: {libroComprado}</p>

      <button onClick={() => setCompraExitosa(false)}>
        Volver a la tienda
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default App;
