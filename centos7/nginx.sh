#!/bin/bash

yum info installed nginx || {
    rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
    yum -y install nginx

    mkdir -p /vagrant/etc/nginx/conf.d.org
    cp /etc/nginx/nginx.conf /vagrant/etc/nginx/nginx.conf.org
    cp -n /etc/nginx/conf.d/* /vagrant/etc/nginx/conf.d.org/
}
\cp -f /vagrant/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
systemctl restart nginx.service
