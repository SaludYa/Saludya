<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salud Ya - Contacto</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>

    <header>
        <div class="contenedor">
            <div class="logo">
                <img src="img/logo.png" alt="Logo Salud Ya">
                <div>
                    <h1>Salud Ya</h1>
                    <p>Tu salud al alcance de un clic.</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="portafolio.html">Portafolio</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <section class="contacto-section">
        <h2 class="titulo-contacto">Contacto</h2>
        
        <div class="contacto-grid">
            <!-- Columna Izquierda -->
            <div class="columna-izquierda">
                <div class="contacto-info-caja">
                    <h3>Información de Contacto</h3>
                    <p><strong>Teléfono:</strong> 55-7876-2557</p>
                    <p><strong>Email:</strong> saludyasoporte@gmail.com</p>
                    <p><strong>Dirección:</strong> Coacalco, Estado de México</p>
                </div>
                
                <div class="redes-container">
                    <a href="https://www.facebook.com/share/1aTwfR5DQC/" class="btn-red" target="_blank">
                        <img src="img/Facebook.png" alt="Facebook" class="icono-red">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/salud_yaap?igsh=MW9iemR0MDJydWl0eQ==" class="btn-red" target="_blank">
                        <img src="img/Instagram.png" alt="Instagram" class="icono-red">
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/salud-ya-88366a421?utm_source=share_via&utm_content=profile&utm_medium=member_android" class="btn-red" target="_blank">
                        <img src="img/Linkedin.png" alt="LinkedIn" class="icono-red">
                        LinkedIn
                    </a>
                </div>
                <a href="https://wa.me/5578762557" class="btn-whatsapp" target="_blank">WhatsApp</a>
            </div>

            <!-- Columna Derecha: Formulario con AJAX -->
            <div class="columna-derecha">
                <!-- Mensaje de éxito oculto -->
                <div id="status" style="display: none; color: #0B7A75; font-weight: bold; margin-bottom: 15px; text-align: center; background: #e8f5f4; padding: 10px; border-radius: 5px;">
                    ¡Gracias! Tu mensaje ha sido enviado.
                </div>

                <form id="mi-formulario" class="contacto-form" action="https://formspree.io/f/mzdlnnpk" method="POST">
                    <input type="text" name="nombre" placeholder="Tu Nombre" required>
                    <input type="email" name="email" placeholder="Tu Correo" required>
                    <textarea name="mensaje" placeholder="¿En qué podemos ayudarte?" rows="5" required></textarea>
                    <button type="submit" id="btn-enviar" class="btn-enviar">Enviar Mensaje</button>
                </form>
            </div>
        </div>
    </section>

    <script>
        var form = document.getElementById("mi-formulario");
        
        async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("status");
            var data = new FormData(event.target);
            
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.style.display = "block"; // Muestra el mensaje
                    form.reset(); // Limpia el formulario
                    // Opcional: Ocultar el mensaje después de 5 segundos
                    setTimeout(() => { status.style.display = "none"; }, 5000);
                } else {
                    alert("Hubo un error al enviar tu mensaje.");
                }
            });
        }
        form.addEventListener("submit", handleSubmit);
    </script>

</body>
</html>