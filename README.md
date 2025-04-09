# CV-Creator

CV-Creator es una herramienta sencilla para crear CVs a partir de un archivo XML (cvml). El esquema sigue un prototipo simple y es fácil de usar. Si quieres colaborar, estaría genial añadir soporte para paths a archivos de fuentes personalizadas. Por ahora, las fuentes disponibles son:

- Helvetica
- Helvetica-Bold
- Helvetica-Oblique
- Helvetica-BoldOblique
- Times-Roman
- Times-Bold
- Times-Italic
- Times-BoldItalic
- Courier
- Courier-Bold
- Courier-Oblique
- Courier-BoldOblique

## Ejemplo de Archivo CVML

El archivo XML que describe tu CV debe seguir esta estructura:

```xml
<cvml>
    <head>
        <language>en|es</language>
        <color>red</color>
        <font>Time-Roman</font>
    </head>
    <body>
        <name>John Doe</name>
        <website>www.johndoe.com</website>
        <contact>
            <email>john.doe@example.com</email>
            <phone>+1234567890</phone>
            <address>1234 Main St, Anytown, USA</address>
        </contact>
        <skills>
            <skill>Programming</skill>
            <skill>Web Development</skill>
            <skill>Data Analysis</skill>
        </skills>
        <profile>Experienced developer with a strong background in web technologies and data analysis.</profile>
        <experience>5 years of experience in full-stack development, working with a variety of technologies and frameworks.</experience>
        <education>Bachelor's degree in Computer Science from XYZ University.</education>
    </body>
</cvml>
```

## Instrucciones de Uso

1. nesecitaras tener una versión de nodejs superior a las 18 y npm.
   
2. Ejecuta el instalador
```bash
curl -L https://raw.githubusercontent.com/Gabrielito666/cv-creator/main/install.sh | bash
```

3. Genera tu CV en formato PDF:
```bash
cv-creator path/a/mi/archivo.cvml ./output.pdf
```

## Personalización

Si deseas personalizar más el CV, puedes modificar los siguientes elementos en tu archivo cvml:

- **language**: Configura el idioma de tu CV (en para inglés, es para español).
- **color**: Elige un color para los encabezados de tu CV (por ejemplo, red, blue, green).
- **font**: Selecciona la fuente que prefieras entre las disponibles (por ejemplo, Helvetica, Times-Roman).

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas añadir soporte para fuentes personalizadas o mejorar cualquier otra funcionalidad, no dudes en abrir un pull request.

---
# CVML en VSCode

Para que vsc te tokenize los archivos.cvml como xml sique estos pasos:

### Editar settings.json en Visual Studio Code:

Abre tu archivo settings.json en Visual Studio Code. Puedes acceder a este archivo yendo a File > Preferences > Settings y luego buscando y seleccionando Edit in settings.json en la esquina superior derecha.

### Añadir la configuración de archivos:

Añade la siguiente configuración a tu settings.json para que VSC trate los archivos .cvml como XML:

```json
{
  "files.associations": {
    "*.cvml": "xml"
  }
}
```