#!/usr/bin/env python3
"""Uso: python3 poner-dominio.py https://tudominio.com
Reemplaza el dominio de ejemplo en todos los .html, sitemap.xml y robots.txt."""
import sys, glob
if len(sys.argv) != 2 or not sys.argv[1].startswith("http"):
    sys.exit("Uso: python3 poner-dominio.py https://tudominio.com")
nuevo = sys.argv[1].rstrip("/")
for f in glob.glob("*.html") + ["sitemap.xml", "robots.txt"]:
    t = open(f, encoding="utf-8").read()
    open(f, "w", encoding="utf-8").write(t.replace("https://TU-DOMINIO.com", nuevo))
print("Listo. Dominio puesto:", nuevo)
