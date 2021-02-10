#! bin/bash
sudo docker build -t react-nginx .
sudo docker run --rm -it -p 80000:80 react-nginx