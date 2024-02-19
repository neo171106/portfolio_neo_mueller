# Verwenden Sie ein Basisimage mit Node.js
FROM node:16-alpine

# Setzen Sie das Arbeitsverzeichnis im Container
WORKDIR /src

# Kopieren Sie die Paketkonfiguration und Installieren Sie die Abhängigkeiten
COPY package.json package-lock.json ./
RUN npm install

# Kopieren Sie den Projektinhalt in das Arbeitsverzeichnis im Container
COPY . ./

# Bauen Sie die Anwendung
RUN npm run build

# Starten Sie den Produktions-Webserver
CMD ["npm", "start"]
