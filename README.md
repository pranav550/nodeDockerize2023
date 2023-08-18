#remove image
docker rmi imageId

#remove all image
docker system prune -a

#build image
docker build -t node-app-image .

#run command
docker run -d -p 3000:3000 --name node-app node-app-image

#list of docker
docker ps

#delete running container
docker rm containerID -f
docker rm containerName -f

#inside container
docker exec -it node-app /bin/sh
cat index.js

#docker volume
docker volume create node_volume

#run command
#windows
docker run -d -v "%cd%:/app" -p 3000:3000 --name node-app node-app-image:latest

#linux
docker run -d -v "$(pwd)":/app -p 3000:3000 --name node-app node-app-image:latest

docker run -d -v node_volume:/app -p 3000:3000 --name node-app node-app-image:latest
docker run -d --mount source=node_volume,destination=/app -p 3000:3000 --name node-app node-app-image:latest

#inspect container
docker inspect containerId

#If container is not updating code
docker exec -it node-app /bin/sh
cat index.js
docker logs node-app

#after modules deleted
docker rm -f containerId
docker run -d -v "%cd%:/app" -v /app/node_modules -p 3000:3000 --name node-app node-app-image:latest

#readonly
docker run -d -v "%cd%:/app" -v /app/node_modules -p 3000:3000 --name node-app node-app-image:latest

#environment set
docker run -d -v "%cd%:/app" -v /app/node_modules -e PORT=4000 -p 3000:4000 --name node-app node-app-image:latest
docker exec -it node-app /bin/sh
printenv

#environment file
docker rm node-app -f
docker run -d -v "%cd%:/app" -v /app/node_modules --env-file ./.env -p 3000:4000 --name node-app

#delete docker volume
docker volume ls
docker volume prune (delete volume but not curent volume)

#delete volume and container current
docker rm node-app -fv

###dockerCompose create image, container, volume, network is created
docker-compose up -d

###remove container and remove volume , network is removed
docker-compose down -v

###IF I am re run again dockerCompose container, volume, network is created
not rebuild the image
docker-compose up -d

###If iam change the dockerfile
not rebuild the image
docker-compose up -d

##If iam want to build a image
docker-compose up -d --build

##run dev docker compose up file
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

##run dev docker compose down file
docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v

##run prod docker compose up file (code not changing)
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

##run prod docker compose down file
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v

############################################################################################

##other
docker build . -t nodeTest
docker images
docker run --rm -d -p 5500:5500 --name nodeTestContainer nodeTest
docker ps

##volume
docker run --rm -d -p 5500:5500 -v $(pwd):/app -v /app/node_modules --name nodeTestContainer nodeTest
docker ps
docker stop containerId

##environment
docker run --rm -d -p 5500:5600 -v $(pwd):/app -e PORT='5600' --name nodeTestContainer nodeTest
docker ps

##inside container
docker exec -it containerId bash
exit

##docker logs
docker logs containerId

##take whole file of .env
docker run --rm -d -p 5500:5600 -v $(pwd):/app --env-file ./.env --name nodeTestContainer nodeTest
