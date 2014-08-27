---
layout: post
title: The first post
---

This is the first post I actually write in Jekyll. I decided to start
writing a blog mainly to have a place where I can put knowledge and random
thoughts. I imagine many blogs start like this.

This first post is intended to get the Jekyll running and learn how it
integrates with github pages. I'm using poole as a starting point.

# Installing Jekyll #

My first try was installing Jekyll from the Ubuntu repositories and then
trying to run `jekyll serve` from the root folder of my poole blog, but
that didn't work. After that I tried to install Jekyll with `gem install
jekyll`, but I got an error. Installing 'ruby-all-dev' from the Ubuntu and
then repeting `gem install jekyll` did the job.

Note that when running Jekyll locally to preview posts before committing to
github the command you actually want to use (from the root folder) is

    jekyll serve --watch --baseurl '/'

The *watch* is very useful when editing posts, since Jekyll will
automatically rebuild the post after it is saved.

The *baseurl* option is important because we have set a baseurl in the
`_config.yml` file, but we want it to be an empty string when running
Jekyll locally.

# Creating new post #

Simply create a file with a name in the format
`YYYY-MM-DD-the-tittle-of-your-post.md` in the `_posts` folder. In the
beginin of the file, add lines below

    ---
    layout: post
    title: Tittle of your post
    ---

and start writting using the Markdown syntax.

I won't enter in details, since there are better places to learn about
Jekyll. A good place is [Jekyll's own page](http://jekyllrb.com/docs/home/).


If you need helo with the markdown syntax,
[this site](https://daringfireball.net/projects/markdown/syntax) is a good.
one. If you only need a quick reference,
[this site](http://www.darkcoding.net/software/markdown-quick-reference/)
is a good one.

# Defining new HTML tags #

If you want to add new HTML tags that you can use when creating posts, edit
the `public/css/my\_additions.css' file to add the tag. For instance, I have
added the tat 'kbd' in 'my\_additions.css' and used extensivelly in the post
"[Using Ebib to manage Bibtex files]({% post_url 2014-08-07-using-ebib-to-manage-bibtex-files %})"
to typeset keyboard keys.

# Entering Unicode characters #

You can enter any unicode character in Emacs with <kbd>C-x</kbd>
<kbd>8</kbd> <kbd>Enter↵</kbd>. Then you need to type the name of the
unicode character you want to insert (helm mode is very useful here).

A list of common unicode characters is given below

- ↑: UPWARDS ARROW
- ↓: DOWNWARDS ARROW
- ←: LEFTWARDS ARROW
- →: RIGHTWARDS ARROW
- ↵: DOWNWARDS ARROW WITH CORNER LEFTWARDS

Tip: If you have a unicode character in buffer and you want to know its
name, use <kbd>C-u</kbd> <kbd>C-x</kbd> <kbd>=</kbd>. Emacs will tell you a
lot of things about the character, including its name.

