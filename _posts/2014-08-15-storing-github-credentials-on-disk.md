---
layout: post
title: Storing Github credentials on disk (for https protocol)
---

The way to avoid passwords on pull/push commands will dependent on which
git protocol is used to track the remote repo. For gitub I use https
because it can work with the firewall used at my work place.

The way to avoid having to type the username and password all the time is
using one of the git credential helpers. The simplest one is probably using
a cache. If you want to cache the credentials for, 1 hour you could use

`git config credential.helper 'cache --timeout=3600'`

Git does not seem to come with a *native* way to store the credentials on
disk, but it can be configured to use a script to provide the
credentials. The script will be in charge of reading the credentials from a
file (encrypted) and pass them to git. The accepted answer for
[this stackoverflow question](http://stackoverflow.com/questions/5343068/is-there-a-way-to-skip-password-typing-when-using-https-github)
illustrates how to do this.

First, download the script with

```sh
wget git-credential-netrc https://raw.github.com/git/git/master/contrib/credential/netrc/git-credential-netrc
```

Copy this script to some folder in your path (such as `/usr/local/bin/`)
and set its execute permission.

Now set the credential helper in git with

```sh
git config --global credential.helper "netrc -f ~/.authinfo.gpg -v"
```

The name **netrc** comes from the script name. You could change this to
**somethingelse** if you renamed the script to
**git-credential-somethingelse**.

Since I already had an `.authinfo.gpg` file I'm using that one. What we
need to add to `.authinfo.gpg` is a line such as

```
machine github.com login myemail@gmail.com password MyPassWord protocol https
```

Note that the protocol part is important. I initially tried without it but
using `https://github.com` as the machine name, but it didn't
work. Furthermore, we are using the *gpg* extension here, which means the
file will be encrypted with gpg. You need to have a configured gpg key for
this to work.
