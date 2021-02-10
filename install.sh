#! bin/bash
sudo docker build -t react-nginx .
sudo docker run --rm -it -p 8000:80 react-nginx