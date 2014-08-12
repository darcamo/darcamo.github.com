
In this folder I add draft posts in org-mode format (org extension) that
I'm still writing. Once a draft posts is finalized I move it to the
org/posts folder with an appropriate name.

Notice that posts here are not read by Jekyll. First we need to export them
(using the /publish/ functionality of org-mode) to the _drafts folder in
HTML format. Once a posts here is exported it will be read by Jekyll if the
'--watch' option is passed to the command 'jekyll serve'.
