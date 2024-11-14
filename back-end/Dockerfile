# backend/Dockerfile
FROM node:16
WORKDIR /app
COPY app.js .
RUN npm install express
EXPOSE 3001
CMD ["node", "app.js"]