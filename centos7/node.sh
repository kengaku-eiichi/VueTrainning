#!/bin/bash

yum info installed git || {
    yum -y install git
}

cd /git/VueTrainning/
nvm --version || {
    git clone git://github.com/creationix/nvm.git /opt/nvm
    ln -snf /opt/nvm/nvm.sh /etc/profile.d/.
    source /etc/profile.d/nvm.sh
    nvm --version

    # nvm install --lts
    # nvm use --lts
    nvm install stable
    nvm use stable

    node -v
    npm -v

    npm i -g yarn
    yarn -v

    yarn global add @vue/cli
    vue -V
}
nohup vue ui --host 0.0.0.0 --port 8000 --headless --quiet >/dev/null 2>&1 &


