---
layout: post
title: Compiling MediaElch
---

The best program I could find to organize my media files for
[XBMC](http://xbmc.org/) (download information, create nfo files and rename
files) is [MediaElch](http://www.kvibes.de/mediaelch/).

It is not in the official repositories, but the authors provide a
[PPA](http://www.kvibes.de/en/mediaelch/download/) that can be used to
install MediaElch. This worked well when I was using Ubuntu 13.04, but
after I updated to Ubuntu 14.04 and installed MediaElch again, it didn't
work properly.

Since MediaElch is on [Github](https://github.com/Komet/MediaElch) I
decided to try compiling it. This was not straightforward. The README.md
file has no information about how to compile, there is no INSTALL file with
instructions and no sign of the usual compilation plumbing such as automake
or a configure script.

Opening the MediaElch.* files one of them call my attention,
`MediaElch.pro`. It is created by QtCreator and so my next step was
installing QtCreator and opening the project in it.

The difficult now was installing the required libraries, particularly QT
"multimediawidgets". After some Google-fu
[this forum post](http://community.kvibes.de/topic/show/is-the-2-12-version-for-ubuntu-ready)
helped, which instructs to install the required libraries with

```sh
sudo apt-get install qt5-default qtmultimedia5-dev qtscript5-dev qt5-qmake libmediainfo-dev zlib1g-dev libzen-dev libcurl4-openssl-dev
```

After that I was able to compile MediaElch in QtCreator, which compiled in
a separated folder. Alternatively, it is also possible to compile by
running

```sh
qmake && make
```

which compiles MediaElch in the same folder where
the source is located.

