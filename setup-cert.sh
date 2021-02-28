#!/bin/bash
openssl version >/dev/null 2>&1 || echo "openssl is needed for dev-server. But it is not installed aborting!"

CERT_NAME="dev-server"
DAYS_VALID=365

function createCert() {
    openssl ecparam -out "cert/$CERT_NAME.key" -name prime256v1 -genkey
    openssl req -subj "/CN=''/O=''/C=FI" -new -sha256 \
        -key "cert/$CERT_NAME.key" \
        -out "cert/$CERT_NAME.csr"
    renew
}

function setup() {
    if [ -d "cert" ] && [ -f "cert/$CERT_NAME.key" ] && [ -f "cert/$CERT_NAME.csr" ] && [ -f "cert/$CERT_NAME.crt" ]; then
        echo "certs already generated"
    else
        mkdir -p cert
        createCert
    fi
}

function renew() {
    openssl x509 -req -sha256 -days $DAYS_VALID \
        -in "cert/$CERT_NAME.csr" \
        -signkey "cert/$CERT_NAME.key" \
        -out "cert/$CERT_NAME.crt"
}

if [ "$1" == "setup" ]; then
    setup
elif [ "$1" == "review" ]; then
    renew
else
    setup
fi
