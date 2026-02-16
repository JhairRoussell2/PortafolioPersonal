# Portafolio de John Luis Alberto Castillo Reupo

Portafolio personal de Data Engineer en formación.

## 🚀 Estructura del Proyecto

```
portfolio/
│
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css     # Estilos personalizados
│   ├── js/
│   │   ├── main.js        # JavaScript principal
│   │   └── scrollreveal.min.js  # Animaciones de scroll
│   └── img/
│       ├── perfil.png     # Tu foto de perfil (necesitas agregarla)
│       ├── about-perfil.png  # Foto sección About (necesitas agregarla)
│       ├── project-1.jpg  # Imagen de proyecto (necesitas agregarla)
│       └── favicon.png    # Icono del sitio (opcional)
│
└── README.md              # Este archivo
```

## 📋 Instrucciones de Uso

### 1. Preparar las Imágenes

Necesitas agregar las siguientes imágenes en la carpeta `assets/img/`:

- **perfil.png**: Tu foto de perfil para la sección principal (recomendado: 640x925px)
- **about-perfil.png**: Tu foto para la sección "Sobre Mí" (recomendado: 600x600px)
- **project-1.jpg**: Imagen de tu proyecto destacado (recomendado: 800x600px)
- **favicon.png**: Icono del sitio web (opcional, 32x32px)

### 2. Configurar EmailJS (Opcional)

Para que el formulario de contacto funcione, necesitas configurar EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Crea una plantilla de email
4. Obtén tu Public Key
5. En el archivo `assets/js/main.js`, línea 49-52, reemplaza:
   - `service_YOUR_SERVICE_ID` con tu Service ID
   - `template_YOUR_TEMPLATE_ID` con tu Template ID
   - `YOUR_PUBLIC_KEY` con tu Public Key

### 3. Actualizar Enlaces

Actualiza los siguientes enlaces en `index.html`:

- **Línea 48-54**: Enlaces de GitHub y LinkedIn en la sección home
- **Línea 284**: Enlace al código del proyecto en GitHub
- **Línea 287**: Enlace a la demo del proyecto
- **Línea 330**: Enlace a LinkedIn
- **Líneas 408-420**: Enlaces en el footer

### 4. Personalizar Colores (Opcional)

Si deseas cambiar el color principal verde, edita el archivo `assets/css/styles.css`:

En la línea 9, cambia el valor de `--hue`:
- Verde (actual): `--hue: 162;`
- Naranja: `--hue: 14;`
- Azul: `--hue: 210;`
- Rosa: `--hue: 356;`
- Morado: `--hue: 250;`

### 5. Descargar CV

Si quieres agregar la funcionalidad de descarga de CV:

1. Crea un archivo PDF de tu CV
2. Guárdalo en `assets/files/cv.pdf`
3. En `index.html`, línea 163, actualiza el enlace:
   ```html
   <a href="assets/files/cv.pdf" download class="button button__ghost">
   ```

## 🎨 Características

- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves con ScrollReveal
- ✅ Menú de navegación funcional
- ✅ Formulario de contacto con EmailJS
- ✅ Secciones: Home, Sobre Mí, Experiencia, Habilidades, Proyectos, Contacto
- ✅ Botón "Scroll to Top"
- ✅ Links activos en la navegación

## 📱 Compatibilidad

- Chrome, Firefox, Safari, Edge (últimas versiones)
- Responsive: dispositivos móviles, tablets y desktop

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript (Vanilla)
- ScrollReveal.js
- EmailJS
- RemixIcons

## 📝 Notas Adicionales

- Todos los archivos están listos para copiar y pegar
- Solo necesitas agregar tus imágenes personales
- Los colores y estilos ya están configurados según tu plantilla
- El código está comentado para facilitar futuras modificaciones

## 🚀 Cómo Subir a Internet

### Opción 1: GitHub Pages (Gratis)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings > Pages
4. Selecciona la rama main
5. Tu sitio estará en: `https://tuusuario.github.io/nombre-repo`

### Opción 2: Netlify (Gratis)
1. Crea una cuenta en [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta del proyecto
3. Tu sitio estará en línea en segundos

### Opción 3: Vercel (Gratis)
1. Crea una cuenta en [Vercel](https://vercel.com/)
2. Importa tu proyecto desde GitHub
3. Deploy automático

## 📧 Contacto

- Email: castilloreupoluis@gmail.com
- Teléfono: 974052815
- Ubicación: Lima, Perú

---

**¡Éxito con tu portafolio! 🎉**
