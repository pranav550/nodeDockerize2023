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
