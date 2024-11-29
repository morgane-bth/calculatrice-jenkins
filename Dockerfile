# Utiliser une image Node.js
FROM node:14

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", ".", "-p", "8080"]