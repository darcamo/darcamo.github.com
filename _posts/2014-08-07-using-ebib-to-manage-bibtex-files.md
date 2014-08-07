---
layout: post
title: Using Ebib to manage Bibtex files
---

**Ebib** is a program with which you can manage BibTeX database files without
having to edit the raw '.bib' files. It runs in GNU/Emacs, version 23.1 or
higher. The easiest way to install Ebib is through elpa, and I'll not cover
this here.

The Ebib info manual that you can read in Emacs is very good and all
information in this post is basically taken from the manual. The difference
is that here I'll try to summarize everything to make it easier to consult
this later when I forget it.

# Overview of Ebib #

The best overview is written in the "Basic Usage" section in the info
manual.

> When Ebib is started, the current windows in Emacs are hidden and the
> Emacs frame is divided into two windows. The top one contains a buffer
> that is called the _index buffer_, while the lower window contains the
> _entry buffer_. When a database (a bib file) is loaded, the index buffer
> holds a list of all the keys in the database. You can move through these
> keys with the cursor keys (or the <kbd>j</kbd> and <kbd>k</kbd> keys). In
> the entry buffer, the fields of the currently highlighted entry are
> shown, with their values.

I won't repeat the whole info manual here, but this part from the
"Navigating a '.bib' File" section in the info manual is important to know.

> Below the type field, Ebib displays (up to) three sets of fields.  The
> first set are the so-called obligatory fields, the fields that BibTeX
> requires to be filled. The second group are the optional fields, which do
> not have to be filled but which BibTeX will normally add to the
> bibliography if they do have a value. The third group are the so-called
> additional fields. These fields are usually ignored by BibTeX (note that
> BibTeX normally ignores _all_ fields it does not know), although there are
> bibliography styles that treat some of these fields as optional rather than
> as additional; (i.e., the "harvard" styles do typeset the "url" field, if
> present.)

From now on I'll focus on the different aspects of working with Ebib and
the interesting key bindings.

## Starting Ebib and opening a bib file ##

You can start Ebib with <kbd>M-x ebib</kbd>. After that, use <kbd>o</kbd>
to open a new database (bib file). You can open more then one database at
once. They will be numbered (see the mode-line) and you can alternate
between then using the <kbd>←</kbd> and <kbd>→</kbd> keys.

Use <kbd>l</kbd> in the index buffer to see the log. It is a good idea to do that
after opening a database so that you can see any warning or errors.


## Navigating the database ##

- Use the <kbd>↑</kbd>/<kbd>↓</kbd> arrows or <kbd>j</kbd>/<kbd>k</kbd> to
  go up and down by one key.
- Use <kbd>Space</kbd> or <kbd>b</kbd> to go down and up by one page.
- If you know a part of a key you can use standard isearch <kbd>C-s</kbd>
  or <kbd>C-r</kbd> to search for it.
- <kbd>g</kbd>/<kbd>G</kbd> go to the first/last key in the database.
- If you open more than one database, you can alternate between then using
  the <kbd>←</kbd> and <kbd>→</kbd> keys, or you can use the
  <kbd>1</kbd>-<kbd>9</kbd> keys to go to the specified database.
  - Close the current database with <kbd>c</kbd>

## Editing the database ##

In the index buffer you can use <kbd>a</kbd> to add a new entry in the
database, <kbd>d</kbd> to delete the current entry and <kbd>e</kbd> to edit
the current entry. When you create a new entry Ebib will ask you which
entry key you want o use, unless you set the 'ebib-autogenerate-keys' to
't', in which case Ebib uses a temporary key and generate a new key after
edit the entry.

You can use <kbd>E</kbd> to edit the key of an entry or <kbd>e</kbd> to
edit the actual entry. In the later case Ebib will put the cursor in the
entry buffer and you can edit the individual fields. Note that you can also
use <kbd>K</kbd> in the index buffer to let Ebib regenerate the entry key.


### Editing an entry ###

Editing the field values for an entry is done in the lower of the two Ebib
buffers, the so-called entry buffer. You can move focus to the entry buffer
by typing the command <kbd>e</kbd> in the index buffer.

- Use <kbd>g</kbd>/<kbd>G</kbd> to go to the top/bottom to go to the
  beginning/end of the buffer.
- Use the arrows <kbd>↑</kbd>/<kbd>↓</kbd> or the keys
  <kbd>j</kbd>/<kbd>k</kbd> to go up/down by one field.
- Use <kbd>e</kbd> to edit one field.

When you type <kbd>e</kbd> in most of the fields Ebib asks for the value in
the minibuffer. You don't need to add the braces, Ebib will add them for
you. However, when using abbreviations such as the common 'jan', 'feb',
etc. for the months of any @string definition you don't want Ebib to add
the braces. In that case, use <kbd>r</kbd> in the field to mark it as
**raw** (an '*' char will be added to the left of the field value to
indicate it is a raw field).

Note that if you have string definitions in the bib file (See the String
Definitions section later) you can use <kbd>s</kbd> instead of <kbd>e</kbd> to
edit a field. Ebib will provide you with the strings (with completion) and
will automatically mark the field as raw.

You can use <kbd>c</kbd>/<kbd>x</kbd>/<kbd>y</kbd> to copy/cut/past the
field value. Note, however, that pasting only works in empty fields, but
you can always use <kbd>d</kbd> to delete the field value. Also, hit
<kbd>y</kbd> multiple times to have the same effect as <kbd>C-y</kbd> in
Emacs.

#### Editing Multiline values ####

The field 'annote' is different from the others in the sense that when you
press <kbd>e</kbd> to edit it instead of filling the value in the
minibuffer Ebib will put you in the multiline editing buffer. However, any
field (except `type` e `crossref`) can be edited in the manner if you use
<kbd>l</kbd> instead of <kbd>e</kbd> to edit the field.

In the multiline editing buffer you can use the following key-bindings:

- <kbd>C-c</kbd> <kbd>|</kbd> <kbd>q</kbd> to save and quit
- <kbd>C-c</kbd> <kbd>|</kbd> <kbd>c</kbd> to cancel
- <kbd>C-c</kbd> <kbd>|</kbd> <kbd>s</kbd> to save (but don't quit)
- <kbd>C-c</kbd> <kbd>|</kbd> <kbd>h</kbd> to see the help

Note that any field whose value has more then one line will have a '+'
character in the left of the field value. Ebib is smart enough to use the
multiline editing mode when you press <kbd>e</kbd> to edit a field that is
already filled with more then one line.


## String Definitions ##

In the index buffer, use <kbd>S</kbd> to edit the string definitions
(abbreviations). The entry buffer will change to show the current string
definitions. The following key-bindings can be used:

- <kbd>a</kbd> add a new string definition
- <kbd>e</kbd> edit the current string definition
- <kbd>c</kbd> copy the string definition
- <kbd>g</kbd>/<kbd>G</kbd> to to the first/last string definition
- <kbd>d</kbd> delete a string definition
- <kbd>q</kbd> quit e go back to the index buffer


## Saving the database ##

After any change is made to the database i it will me marked as such in the
mode-line as any file in Emacs. In the index buffer you can use <kbd>s</kbd>
to save the database.

Note that the bib file associated with the database will be sorted and
formatted and any entry with errors will not be saved. That is why it is a
good idea to see the log with <kbd>l</kbd> after opening a database.

On the other hand, in the first time the database is saved Ebib will create
a backup (Ebib will honor the value of the 'backup-directory-alist'
variable).

If you have more than one open database and you want yo save all of them,
use the option in for that in the menu.

## Searching the database ##

In the index buffer you can use the standard <kbd>C-s</kbd> and
<kbd>C-r</kbd> to search for a key. Once found, type <kbd>RET</kbd> twice
to edit it (the first leaves the isearch, while the second edit the entry).

To search in the actual field values, use <kbd>/</kbd>. Ebib will search
all entries starting from the current one. If you want to search all
entries, make sure you are in the first one by using the <kbd>g</kbd>
key. After a match, use the <kbd>n</kbd> key to go to the next one. There
is no wrap so if you want to start it over, use <kbd>g</kbd><kbd>n</kbd>.

Once a match is found, ebib will underline the matched value. If the match
is in a multiline field which is not visible, Ebib will underline the '+'
char to tell you that.

Another much more powerful search method is using filters, which will be
covered in their own section.


## Marking entries ##

Marking entries is useful to do operation on many entries at a time. Use
<kbd>m</kbd> para mark/unmark entries in the index buffer. Once some
entries are marked you can use the following key-bindings:

- <kbd>;d</kbd> delete the marked entries
- <kbd>;p</kbd> push the marked entries to a buffer
- <kbd>;m</kbd> unmark the marked entries

If you don't use the <kbd>;</kbd> before the other key-binding Ebib will
behave as if no entries were marked.


## Calling a Browser ##

In the index buffer, you can use the following key-bindings to open a
browser

- <kbd>u</kbd> open the first url ("http://" or "https://") in the 'url' field
- <kbd>i</kbd> search for the doi indicated in the 'doi' field

## Viewing Files ##

In the index buffer, use <kbd>f</kbd> to open the a file in the 'file'
field. If more than one file is in the file field (separated by ';') Ebib
will ask you which one to open.

You can configure the folder where ebib search for files and thus use
relative path in the 'file' field. You can also configure the
'ebib-file-associations' variable to tell Ebib which program to use to each
extension.

Note that in the entry buffer you go to any field and use the <kbd>f</kbd>
key to open a file indicated in that field.

## Managing keywords ##

I won't cover this here. See the info manual for that.

Tips: You could configure IEEE keywords (see
[here](http://www.ieee.org/documents/taxonomy_v101.pdf) for a list) to
enter them easily. See [here](http://code.ucsd.edu/keywords.html) for tips
on how to choose the keywords).

## Merging and importing ##

In the menu there is an option to merge the current database with another
one. To import entries from any Emacs buffer you can use the 'ebib-import'
command. From the Ebib info manual

> Another way is to import from an Emacs buffer.  If, for example, you find
> ready-formatted BibTeX entries in a text file or on the internet, you can
> copy & paste them to any Emacs buffer (e.g. the '*scratch*' buffer), and
> then execute the command <kbd>M-x</kbd> <kbd>ebib-import</kbd>. Ebib then
> goes through the buffer and loads all BibTeX entries it finds into the
> current database (i.e. the database that was active when you lowered
> Ebib). If you call 'ebib-import' while the region is active,
> Ebib only reads the BibTeX entries in the region.

> If the BibTeX entries in the buffer lack an entry key (which sometimes
> happens with BibTeX entries found on the internet), Ebib will generate a
> temporary key for it of the form `<new-keyXX>`, where `XX` is a
> number. You can change such keys by hitting <kbd>E</kbd> in the index
> buffer. They will also automatically be replaced with a more sensible key
> when you edit them. See 'Autogenerate Keys' from the Ebib manual for more
> info.


## Filters ##

This is maybe the most interesting feature in Ebib. Lets start with an
example, suppose you want to get entries containing "Goldsmith" as the
author. In the index buffer you hit <kbd>&</kbd>, select `author` and type
'Goldsmith' (or just a part of it such as 'Gold'). Ebib will show you then
only the entries that match the filter. This example is very simple, but
note that Ebib uses regexp for searching.


When a filter is active, this is indicated by Ebib in the header line of
the index buffer. You can also use <kbd>F</kbd><kbd>v</kbd> to show the
active filter in the minibuffer. Use <kbd>F</kbd><kbd>c</kbd> to cancel the
filter (when a filter is active, <kbd>c</kbd> can be used for the same
purpose, but after the filter is canceled hitting <kbd>c</kbd> again will
correspond to the 'close database' function). After canceling a filter you
can use <kbd>F</kbd><kbd>L</kbd> to re-apply the last filter.


Each time you add a filter Ebib will ask you on which field it should
operate, but what it you want a filter that can match values in any field?
For that chose the `any` type.


### How to construct filters ###

You can add a `AND` filter with <kbd>&</kbd> and concatenate multiple
conditions that must be true with it. Another useful search is an `OR`
filter, which you can create with <kbd>|</kbd> in a similar way.

Note that you can filter entries based on the entry type. For that you
should use the `=type=` type, which is the field name in which Ebib stores
the entry type internally. For example, if you want to get `book` entries,
create a new filter with <kbd>&</kbd>, select `=type=` and then book (Ebib
offer completions for the type, since only a few values are allowed in
Bibtex). Similarly, if you want to filter by keywords the keywords
associated with your database are available for completion as well.

Both the <kbd>&</kbd> and <kbd>|</kbd> commands can be used with the
negative prefix argument <kbd>M--</kbd> (or <kbd>C-u</kbd><kbd>-</kbd>,
which is identical). In this case, the search criterion is negated.


There is another way of performing a logical `not` operation, which is only
available when a filter is active: by pressing the key <kbd>~</kbd>, you
invert the current filter. Note that although <kbd>~</kbd> and the negative
prefix argument to <kbd>&</kbd> or <kbd>|</kbd> both perform logical `not`
operations, they are __not__ equivalent: <kbd>~</kbd> negates the entire
filter built up so far, while the negative prefix argument only negates the
single selection criterion you enter with it.


### Storing filters ###

It is possible to create very complex filters and you will likely want to
store some of them for later usage. The key-binding
<kbd>F</kbd><kbd>s</kbd> store the current filter (or the last one if no
filter is active). Ebib will ask you for a name to store the filter. When
Ebib is closed, all stored filters are saved automatically when Ebib
closes, but you can also save them manually with
<kbd>F</kbd><kbd>S</kbd>. The stored filters are automatically reloaded
when you open Ebib again.


You can apply a stored filter with <kbd>F</kbd><kbd>a</kbd>. After that,
you can extend a filter in the normal way, though the changes will not be
stored automatically. To store it, type <kbd>F</kbd><kbd>s</kbd> again. You
can store the extended filter under the old name, in which case Ebib will
ask you for confirmation, or under a new name, which will store it as a new
filter, keeping the old one.

A few more useful key-bindings are shown below

- <kbd>F</kbd><kbd>V</kbd> show the currently stored filters
- <kbd>F</kbd><kbd>R</kbd> rename a stored filter
- <kbd>F</kbd><kbd>d</kbd> delete a stored filter
- <kbd>F</kbd><kbd>D</kbd> delete **ALL** stored filters

These deletion commands do not ask for confirmation, but if you delete any
filters by accident, you can reload them from `~/.emacs.d/ebib-filters`
with <kbd>F</kbd><kbd>l</kbd>.


### Working with filtered databases ###

When a filter is active you can't add or remove entries, but you can edit
the fields of an entry as usual. If after you edit a field which was
matched by the current filter it does not match the filter anymore, then
Ebib will **not** remove the the entry from the filtered database
yet. However, you can reapply the same filter with <kbd>F</kbd><kbd>r</kbd>
to do that


## Consulting Bibtex databases outside Ebib ##

I won't cover this here, since I prefer using reftex in my Latex documents,
but it can be useful in other bodes such as markdown or Org-mode. See Ebib
Manual for more.


##  Good habits when creating/editing a BibTeX file ##

This topic deserves its own post.
