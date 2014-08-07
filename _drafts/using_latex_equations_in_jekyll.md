---
layout: post
title: Using Latex Equations in Jekyll
---

Nowadays the standard way to add latex equations in HTML is
[MathJax](http://www.mathjax.org/), which is an awesome JavaScript
library. To use it in jekyll, all we need to to is adding the MathJax script
to our `_include/head.html` file after the tittle tag.

The post
[How to get beautifully typeset maths on your blog](http://checkmyworking.com/2012/01/how-to-get-beautifully-typeset-maths-on-your-blog/)
explains how to do it for several blog systems. Since jekyll qualifies as
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
