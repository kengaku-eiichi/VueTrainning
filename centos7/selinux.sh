#!/bin/bash

path="/etc/selinux/config"
[ -f "${path}" ] || cp "${path}" /vagrant"${path}".org
\cp -f /vagrant"${path}" "${path}"
setenforce 0
