#! bin/bash
sudo docker build -t react-nginx .
sudo docker run --rm -it -p 80:8000 react-nginx