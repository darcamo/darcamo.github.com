---
layout: post
title: Using Beets to Organize Music
---

[Beets](http://beets.radbox.org/) is a nice way to keep your music library
organized. It uses [MusicBrainz](musicbrainz.org) to get the metadata.


# Installation

I have installed beets through pip with the command

`pip install beets`


# Extra plugins I have installed

- LastGenre Plugin: `pip install pylast`


Note that The web plugin requires flask. I have installed the version from
the Ubuntu (14.04) repository, named `python-flask`.


# Usage

## Importing my library ##

The music in my music folder (`~/Música`) was already well
tagged. Therefore, I imported it with `beet import -A ~/Música`

Import an album with

`beet import FolderName`

If you have a folder with several subfolders (each one being one album) use

`beet import FolderName`

Import a folder containing multiple albums with all files in the same
folder (withou subfolders)

`beet import --group-albums FolderName`

Import singletons with

`beet import -s FileNameORFolderName`


When you import musit to your library beets will try to find the metadata
in musicbrains. If you metadata is already correct you should pass the '-A'
option to the import command so that it does not auto-tag your music. This
is also useful when I want to categorize some music files already in my
library as singleton. I just import the music file with the '-s -A' options.


## Query the library ##

`beet ls somw word some other word etc`

Search terms by default search all attributes of songs. They’re also
implicitly joined by ANDs: a track must match all criteria in order to
match the query.

To narrow a search term to a particular metadata field, just put the field
before the term, separated by a : character. So album:bird only looks for
bird in the “album” field of your songs.

See [Queries](http://beets.readthedocs.org/en/v1.3.7/reference/query.html)
for more search examples (very nice).


The beet list command has another useful option worth mentioning, -a, which
searches for albums instead of songs:

```sh
$ beet ls -a forever
Bon Iver - For Emma, Forever Ago
Freezepop - Freezepop Forever
```


Beets also has a stats command, just in case you want to see how much music
you have:

```sh
$ beet stats
Tracks: 6099
Total time: 2.5 weeks (1522528.44 seconds)
Total size: 41.0 GB
Artists: 1212
Albums: 579
```


## Compilations, Singletons, etc ##

In order to set an album as a compilation, set the 'comp' field value to
true. Note that there is an 'albumtype' field which can have a value of
'compilation', but it is something different. To give an example, consider
the album "The Best of Vanessa-Mae". The 'albumtype' field of this album
(the field for each individual track and the field of the album) will be
set to 'compilation'. However, all tracks are from the same artist and thus
the 'comp' field will be set to false.


Porque exist o field 'comp' mas não o field 'singleton' ou 'single'? Note
que para singletons o (album) field 'albumtype' é


## Command-line interface ##

http://beets.readthedocs.org/en/v1.3.7/reference/cli.html

Here are the built-in commands available in beets:

- import
- list
- remove
- modify
- move
- update
- write
- stats
- fields
- config


### beet list ###

`beet list ambum:"Top 1000 Pop Hits"

## Global Flags ##

Beets has a few “global” flags that affect all commands. These must appear
between the executable name (beet) and the command—for example, beet -v
import ....

- `-l LIBPATH`: specify the library database file to use.
- `-d DIRECTORY`: specify the library root directory.
- `-v: verbose` mode; prints out a deluge of debugging information. Please
  use this flag when reporting bugs.
- `-c FILE`: read a specified YAML configuration file.

Beets also uses the BEETSDIR environment variable to look for configuration
and data.


# Modifying field values #

http://beets.radbox.org/blog/flexattr.html

`beet modify mood=sexy artist:miguel`

Set the 'comp' field to true for all tracks maching "20 AND anos AND de AND rock AND brasil"
`beet modify comp=true 20 anos de rock brasil`

`beet modify album='Summer Eletrohits 4' -a summer eletro 4`

Notice that you must use single quotes and NOT double quotes.

There are fields that can be set per track or per album. For instamce, with

`beet modify albumtype=soundtrack metal gear`

you will set the albumtype field of **the tracks** that match the +metal +gear
query. On the other hand, with

`beet modify albumtype=soundtrack -a metal gear`

you will modify the albumtype field of **the album** that match the query.
This distinction is specially important for the `comp` fild. If you want to
set an album as a compilation then set the `comp` field of the album to
true.


# Compilations #

Set the 'comp' field to true with

`beet modify comp=true the words for the query`


# Replaygain #

To calculate the replaygain per album use

`beet replaygain -a`


# Setting the language of albums without language #

First we need to find which albums don't have the langiage field set.  For
this we use `beet list -a language::'^$'`. The '::' indicates that we will
search as regexps, which in this case means an empty value.

After that we can set the language of an album as usual.
Ex: 
