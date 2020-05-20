#!/bin/bash

rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
yum -y install nginx
systemctl start nginx.service

mkdir -p /vagrant/etc/nginx
mv /etc/nginx/nginx.conf /vagrant/etc/nginx/nginx.conf.org
ln -s /vagrant/etc/nginx/nginx.conf.org /vagrant/etc/nginx/nginx.conf
