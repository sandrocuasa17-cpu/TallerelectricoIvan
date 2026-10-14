// Taller Eléctrico Iván — script.js
// No hay nada obligatorio aquí para que la página funcione (es un sitio estático),
// pero dejo un par de cosas útiles.

document.addEventListener("DOMContentLoaded", function () {

  // Año automático en el pie de página, si algún día se agrega un <span id="year">
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // --- Etiquetado de clics para saber qué contactos vienen de la web ---
  // Esto NO manda datos a ningún lado por sí solo: es un gancho para conectar
  // más adelante con Google Analytics, Meta Pixel, o lo que uses.
  // Por ahora, cada clic en un botón de WhatsApp/llamada queda registrado
  // en este navegador (consola + localStorage) como referencia.
  function trackLead(source) {
    try {
      var log = JSON.parse(localStorage.getItem("taller_ivan_leads") || "[]");
      log.push({ source: source, at: new Date().toISOString() });
      localStorage.setItem("taller_ivan_leads", JSON.stringify(log));
    } catch (e) {
      // localStorage no disponible; no pasa nada, seguimos sin registrar
    }
    console.log("[lead]", source);

    // Si más adelante agregas Google Analytics (gtag.js), esta línea ya
    // manda el evento automáticamente:
    if (typeof gtag === "function") {
      gtag("event", "generate_lead", { lead_source: source });
    }
  }

  document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
    el.addEventListener("click", function () {
      trackLead("whatsapp_web");
    });
  });

  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener("click", function () {
      trackLead("llamada_web");
    });
  });

});


// Copiar datos de envío (sin cédula)
(function () {
  var btn = document.getElementById('copy-env');
  if (!btn) return;
  var texto = [
    'DATOS PARA ENVÍO – SERVIENTREGA',
    'Destinatario: Sander Ariel Cuasapás Flores',
    'Teléfono: 0963615550',
    'Agencia de retiro: Servientrega – Centro Logístico Ibarra',
    'Referencia: Avenida Fray Vacas Galindo, Ibarra, Imbabura',
    'Forma de entrega: Retiro en agencia'
  ].join('\n');
  btn.addEventListener('click', function () {
    var ok = function () {
      var t = btn.textContent; btn.textContent = '¡Copiado!';
      setTimeout(function () { btn.textContent = t; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(ok, ok);
    } else {
      var a = document.createElement('textarea'); a.value = texto;
      document.body.appendChild(a); a.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(a); ok();
    }
  });
})();
