#!/bin/bash

# Verificar Node.js
if ! command -v node &> /dev/null
then
    echo "❌ Node.js no está instalado. Instálalo antes de continuar."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d "v" -f2 | cut -d "." -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Se requiere Node.js 18 o superior. Tu versión actual es $(node -v)"
    exit 1
fi

# Instalar librsvg2-bin
sudo apt-get update
sudo apt-get install -y librsvg2-bin

# Preparar carpeta
mkdir -p ~/.cv-creator

# Descargar archivos
curl -L https://raw.githubusercontent.com/Gabrielito666/cv-creator/main/bundle.js -o ~/.cv-creator/index.js
curl -L https://raw.githubusercontent.com/Gabrielito666/cv-creator/main/package.json -o ~/.cv-creator/package.json

# Instalar dependencias
cd ~/.cv-creator
npm install --production

# Agregar alias
echo 'alias cv-creator="node ~/.cv-creator/index.js"' >> ~/.bashrc
source ~/.bashrc

echo "✅ cv-creator instalado correctamente. Usa 'cv-creator archivo.cvml salida.pdf'"

cd ~