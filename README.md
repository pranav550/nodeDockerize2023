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

#run command
%cd%
docker run -d -v "$(pwd)":/app -p 3000:3000 --name node-app node-app-image:latest

#inspect container
docker inspect containerId


############################################################################################

##other
docker build . -t nodeTest
docker images
docker run --rm -d -p 5500:5500 --name nodeTestContainer nodeTest
docker ps

##volume
docker run --rm -d -p 5500:5500 -v $(pwd):/app --name nodeTestContainer nodeTest
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


