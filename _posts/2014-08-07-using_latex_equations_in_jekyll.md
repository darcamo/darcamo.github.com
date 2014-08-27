---
layout: post
title: Using Latex Equations in Jekyll
---

Nowadays the standard way to add latex equations in HTML is
[MathJax](http://www.mathjax.org/), which is an awesome JavaScript
library. To use it in Jekyll, all we need to to is adding the MathJax script
to our `_include/head.html` file after the tittle tag.

The post
[How to get beautifully typeset maths on your blog](http://checkmyworking.com/2012/01/how-to-get-beautifully-typeset-maths-on-your-blog/)
explains how to do it for several blog systems. Since Jekyll qualifies as
the *I have my own setup* case the provided code to add to our `head.html`
file is

```html
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['\\[','\\]'], ['$$','$$']]}});
</script>
<script type="text/javascript"
          src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
  </script>
```
  
## Examples ##

Maths between dollars is inline: $\sum_{k=1}^n k = \frac{n(n+1)}{2}$.

Maths between pairs of dollars stays in its own line: $$\sum_{k=1}^n k =
\frac{n(n+1)}{2}.$$

We can also put math between `\\(` and `\\)` for inline math and between
`\\[` and `\\]` for equations in separated lines.


## Adding new commands ##

When writing equations I usually need to write vectors and matrices, which
correspond to bold small letters and bold capital letters, respectively. To
make entering these in Latex I include a file with many new command
definitions such

```latex
\newcommand{\Vt}[1]{\mathbf{\lowercase{#1}}}
\newcommand{\Mt}[1]{\mathbf{#1}}
% ... More definitions ...
\newcommand{\vtA}{\Vt{A}}
\newcommand{\vtB}{\Vt{B}}
% ... More definitions ...
\newcommand{\mtA}{\Mt{A}}
\newcommand{\mtB}{\Mt{B}}
% ... More definitions ...
```

That is, there is a `\vtX` and `\mtX` definition for `X` being each letter
in the alphabet. To use that here we need to teach MathJax about these
definitions. One easy way to do it is to simply each of these `\newcommand`
definitions in our `head.html` file between dollar signs (after the MathJax
script part). Since they are between dollars they will be interpreted by
MathJax and MathJax is smart enough to understand them.

The problem with this approach is that even though these `newcommand` lines
don't appear in the rendered html they will be present in the source of
every page in the blog.

A better way is to define these commands in a javascript file and load this
script alongside MathJax. For that I created a script called
`mymathjaxdefs.js` in the folder `public/javascripts`.  We also need to
slightly change what we have added to the `head.html` file to load
Mathjax. Instead of adding the code from before, add the code below to
`head.html`.

```html
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']],
    displayMath: [['\\[','\\]'], ['$$','$$']]}});
</script>
<script type="text/javascript"
          src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML,{SITEBASEURL}public/javascripts/mymathjaxdefs.js">
  </script>
  ```

Only the `src` line changed, when compared with the previous version. Also,
replace `{SITEBASEURL}` with the correct Jekyll variable for that
(including the engind '/' character).

Regarding the actual content of the `mymathjaxdefs.js` file, I started by
copying the content of the `config/local/local.js` file from MathJax and
added the macro definitions I needed. This file is the one that the user is
suppose to use and edit when he uses a locally installed MathJax. If later
I decide to get a local copy of MathJax it will be very easy to adapt the
current setup.

The final `mymathjaxdefs.js` file became something similar to the code
below

```js
MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
    var TEX = MathJax.InputJax.TeX;

    // place macros here.  E.g.:
    TEX.Macro("Mt","\\mathbf{#1}",1); // A macro with 1 parameter
    TEX.Macro("Vt","\\mathbf{#1}",1);  // A macro with 1 parameter

    // Macros without parameters
    TEX.Macro("vtA","\\Vt{a}");
    // MORE DEFINITIONS
    TEX.Macro("vtZ","\\Vt{z}");
    
    TEX.Macro("mtA","\\Mt{A}");
    // MORE DEFINITIONS
    TEX.Macro("mtZ","\\Mt{Z}");
});

MathJax.Ajax.loadComplete("{{ site.baseurl }}/public/javascripts/mymathjaxdefs.js");
```

Again, replace `{SITEBASEURL}` with the correct Jekyll variable for
that. Although I'm not sure if this last line is important. I tried to be
consistent with that was in the original local.js file, from MathJax.

### Examples using the newly defined macros ###

First let's write an equation using pure latex (with mathbf, instead of
using the new macros):

\\[\mathbf{y} = \mathbf{H} \mathbf{x} + \mathbf{n}\\]

Now let's write the same equation using the macros:

\\[\vtY = \mtH \vtX + \vtN\\]

If the MathJax configuration done here is correct, both equations will be
equal. If it didn't work but MathJax is installed correctly only the first
equation will be correct.
