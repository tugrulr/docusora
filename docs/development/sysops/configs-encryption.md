Configs & Encryption
=

Editing Configs
"config" repository

run the "setup.sh" script in the /commands/config/ directory of railkubernetes
-   from withing railenvironmentmanager, can likely run like this: `/app/railkubernetes/commands/config/setup.sh`

-   use git credentials from lastpass

-   if you do not have railkubernetes on your machine, from railenvironment (in the the *railenvironmentmanager* container - the one you're entered into when you run "rrr" from your machine), `run r setup` and select the option for railkubernetes.

**Inside Railkuber Local Container**

-   (if first time) *gpg2 --import /railkubernetes/gpg/blackbox-config.priv*

-   use passphrase from lastpass (on the Musora Dev passphrase, you can hit enter to bypass the caleb passphrase)

-   cd /railkubernetes/config (all commands must run from here)

-   use: [https://github.com/StackExchange/blackbox](https://github.com/StackExchange/blackbox)

-   after using blackend edit end command, commit and push the changes in the config repo

-   run config update command for ur given brands

Create new Master Key
=

All of our configs are encrypted using: [https://github.com/StackExchange/blackbox](https://github.com/StackExchange/blackbox) which uses gpg.

To create new master keys (we already have one, but may need to make new ones in the future):
```bash
    docker pull harbur/haveged
    docker run --privileged -d harbur/haveged
```

1.  Make sure the *harbur/haveged* container is running, this gives us random entropy for our key:

1.  In railkubernetes run:
```bash
gpg --gen-key


# Kind of key: RSA and RSA
# Keysize: 4096
# Expire: 0
# Your full name, ex: Caleb Favor
# Your email, ex: caleb@drumeo.com
# Comment can be left blank
# o for Okay
# Enter a strong passphrase
```

1.  Export and save your public and private keys using:

```bash
gpg --export --armor
gpg --export-secret-keys --armor
gpg --export --armor
gpg --export-secret-keys --armor
```
Done!
