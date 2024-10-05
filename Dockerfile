FROM node:alpine
WORKDIR usr/src/app
COPY package*.json .
# localdeki dependence larla tam olarak aynı olanları kuruyor. 
# lock.jsondaki versiyonlarla birebir aynısını kuracaktı ci açılımı continious integration
RUN npm ci install 
COPY . .
CMD ["npm", "start"]