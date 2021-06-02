apt update
apt -y upgrade
apt-get install curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
nvm --version
npm install -g gatsby-cli

