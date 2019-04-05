SSL/HTTPS
=

To generate SSL certificates for our local environment we use certbot (which uses LetsEncrypt), since it can create a single valid certificate for multiple wildcard domains.

Reference: [https://certbot.eff.org/](https://certbot.eff.org/)

Inside the manager container:

1.       apt-get update
1.       apt-get install software-properties-common
1.       add-apt-repository ppa:certbot/certbot
1.       apt-get update
1.       apt-get install certbot
1.       certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --preferred-challenges dns --manual

Current domain list:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*.drumeo.com, *.musora.com, *.pianote.com, *.guitareo.com, *.guitarlessons.com, *.recordeo.com

Follow on screen guide. You will need to log in to cloudflare or other DNS provider and add records to verify ownership of the domain, the command will walk you through it. Once the generation complete the command will tell you where it saved the new files. You will need the certificate: cert.pem, and the private key: privkey.pem.

These files can be used directly inside the Apache vhosts file.