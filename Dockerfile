# Etapa de construção
FROM node:14 AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Cria a build do projeto
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copia a build do Angular para o Nginx
COPY --from=builder /app/dist/pulse-store-web /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]