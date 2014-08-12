---
layout: post
title: Creating posts in org-mode format
---

Since this blog is written using Jekyll, the posts are written in markdown
format. However, using the
[publishing functionality](http://orgmode.org/worg/org-tutorials/org-publish-html-tutorial.html)
of [org-mode](http://orgmode.org/) we can also create posts in org-mode
which will be converted to HTML (only the body) and later processed by
Jekyll. This allows using all of the org-mode power when writing a post,
including the awesome org-babel functionality.


For this to work, a `org` folder was added to the root folder containing
two subfolders: `drafts` and `posts`. With a property configured org-mode,
any posts in org format in the `org/drafts` folder is exported to
`_drafts`, while any post in `org/posts` is exported to `_posts`.

To configure org-mode add the code below to your Emacs configuration after
making the required changed

```emacs-lisp
(setq org-publish-project-alist
      '(
        ("org-darcamo-posts"
         ;; Path to your org files.
         :base-directory "~/JEKYLL_BLOG_FOLDER/org/posts/"
         :base-extension "org"

         ;; Path to your Jekyll project.
         :publishing-directory "~/JEKYLL_BLOG_FOLDER/_posts/"
         :recursive t
         :publishing-function org-html-publish-to-html
         :headline-levels 4 
         :html-extension "html"
         :body-only t ;; Only export section between <body> </body>
         )

         ("org-darcamo-drafts"
         ;; Path to your org files.
         :base-directory "~/JEKYLL_BLOG_FOLDER/org/drafts/"
         :base-extension "org"

         ;; Path to your Jekyll project.
         :publishing-directory "~/JEKYLL_BLOG_FOLDER/_drafts/"
         :recursive t
         :publishing-function org-html-publish-to-html
         :headline-levels 4 
         :html-extension "html"
         :body-only t ;; Only export section between <body> </body>
         )

        ("org-static-darcamo"
         :base-directory "~/JEKYLL_BLOG_FOLDER/org/posts/"
         :base-extension "css\\|js\\|png\\|jpg\\|gif\\|pdf\\|mp3\\|ogg\\|swf\\|php"
         ;; Maybe change this to a different folder
         :publishing-directory "~/JEKYLL_BLOG_FOLDER/_posts"
         :recursive t
         :publishing-function org-publish-attachment)

        ("darcamo" :components ("org-darcamo-posts" "org-darcamo-drafts" "org-static-darcamo"))

        ))
```

This configuration was adapted from
http://orgmode.org/worg/org-tutorials/org-jekyll.html

I still have to actually test it and fix any problems.
