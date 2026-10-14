# Taller Eléctrico Iván — sitio web (SEO Ecuador)

Sitio estático (HTML/CSS/JS). Vercel lo publica directo, sin build.

## Archivos
- `index.html` — inicio (estatores, envíos, servicios, cobertura Ecuador, preguntas frecuentes)
- 5 páginas de servicio (una por cada cosa que la gente busca en Google)
- `sitemap.xml`, `robots.txt`, `vercel.json` — SEO y cabeceras
- `poner-dominio.py` — cambia el dominio de ejemplo por el real (no se sube a Vercel)

## Publicar
1. Si ya tienes dominio: `python3 poner-dominio.py https://tudominio.com`
   (si aún no, publica primero con el `.vercel.app` y usa esa URL; luego repites con el dominio real).
2. Sube la carpeta a Vercel (GitHub o `vercel --prod`).
3. Vercel → proyecto → **Analytics → Enable** (el script ya está en todas las páginas).
4. Vercel → **Domains** → agrega tu dominio y pon en tu proveedor los DNS que te indica.

## Google
1. Search Console → agrega la propiedad → envía `https://tudominio.com/sitemap.xml`.
2. Pide indexar la página principal y las 5 de servicio ("Inspección de URLs → Solicitar indexación").
3. Crea el Perfil de Negocio de Google (Google Maps) con la dirección real: es lo que más pesa en "taller cerca de mí".

## Pendiente
- Confirmar horario real (no está en el sitio ni en el schema a propósito).
- Confirmar marcas/servicios que quieras destacar antes de agregarlos al texto.
