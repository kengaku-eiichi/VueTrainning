#!/bin/bash

yum info installed git || {
    yum -y install git
}

nvm --version || {
    git clone git://github.com/creationix/nvm.git /opt/nvm
    ln -snf /opt/nvm/nvm.sh /etc/profile.d/.
    source /opt/nvm/nvm.sh
    nvm --version

    nvm install stable
    nvm use stable
    node --version
    npm -v

    npm install -g @vue/cli
    vue --version
}
nohup vue ui --host 0.0.0.0 --port 8000 --headless --quiet >/dev/null 2>&1 &
