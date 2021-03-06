

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
    var TEX = MathJax.InputJax.TeX;

    // General macros
    TEX.Macro("E","\\mathbb{E}");  // Expectation
    TEX.Macro("rank","\\operatorname{rank}");  // rank (of a matrix)
    
    // place macros here.  E.g.:
    TEX.Macro("Mt","\\mathbf{#1}",1); // A macro with 1 parameter
    TEX.Macro("Vt","\\mathbf{#1}",1);  // A macro with 1 parameter

    // Macros without parameters
    TEX.Macro("vtA","\\Vt{a}");
    TEX.Macro("vtB","\\Vt{b}");
    TEX.Macro("vtC","\\Vt{c}");
    TEX.Macro("vtD","\\Vt{d}");
    TEX.Macro("vtE","\\Vt{e}");
    TEX.Macro("vtF","\\Vt{f}");
    TEX.Macro("vtG","\\Vt{g}");
    TEX.Macro("vtH","\\Vt{h}");
    TEX.Macro("vtI","\\Vt{i}");
    TEX.Macro("vtJ","\\Vt{j}");
    TEX.Macro("vtK","\\Vt{k}");
    TEX.Macro("vtL","\\Vt{l}");
    TEX.Macro("vtM","\\Vt{m}");
    TEX.Macro("vtN","\\Vt{n}");
    TEX.Macro("vtO","\\Vt{p}");
    TEX.Macro("vtP","\\Vt{p}");
    TEX.Macro("vtQ","\\Vt{q}");
    TEX.Macro("vtR","\\Vt{r}");
    TEX.Macro("vtS","\\Vt{s}");
    TEX.Macro("vtT","\\Vt{t}");
    TEX.Macro("vtU","\\Vt{u}");
    TEX.Macro("vtV","\\Vt{v}");
    TEX.Macro("vtW","\\Vt{w}");
    TEX.Macro("vtX","\\Vt{x}");
    TEX.Macro("vtY","\\Vt{y}");
    TEX.Macro("vtZ","\\Vt{z}");
    
    TEX.Macro("mtA","\\Mt{A}");
    TEX.Macro("mtB","\\Mt{B}");
    TEX.Macro("mtC","\\Mt{C}");
    TEX.Macro("mtD","\\Mt{D}");
    TEX.Macro("mtE","\\Mt{E}");
    TEX.Macro("mtF","\\Mt{F}");
    TEX.Macro("mtG","\\Mt{G}");
    TEX.Macro("mtH","\\Mt{H}");
    TEX.Macro("mtI","\\Mt{I}");
    TEX.Macro("mtJ","\\Mt{J}");
    TEX.Macro("mtK","\\Mt{K}");
    TEX.Macro("mtL","\\Mt{L}");
    TEX.Macro("mtM","\\Mt{M}");
    TEX.Macro("mtN","\\Mt{N}");
    TEX.Macro("mtO","\\Mt{P}");
    TEX.Macro("mtP","\\Mt{P}");
    TEX.Macro("mtQ","\\Mt{Q}");
    TEX.Macro("mtR","\\Mt{R}");
    TEX.Macro("mtS","\\Mt{S}");
    TEX.Macro("mtT","\\Mt{T}");
    TEX.Macro("mtU","\\Mt{U}");
    TEX.Macro("mtV","\\Mt{V}");
    TEX.Macro("mtW","\\Mt{W}");
    TEX.Macro("mtX","\\Mt{X}");
    TEX.Macro("mtY","\\Mt{Y}");
    TEX.Macro("mtZ","\\Mt{Z}");

    // Sets
    TEX.Macro("bbA","\\mathbb{A}");
    TEX.Macro("bbB","\\mathbb{B}");
    TEX.Macro("bbC","\\mathbb{C}");
    TEX.Macro("bbD","\\mathbb{D}");
    TEX.Macro("bbE","\\mathbb{E}");
    TEX.Macro("bbF","\\mathbb{F}");
    TEX.Macro("bbG","\\mathbb{G}");
    TEX.Macro("bbH","\\mathbb{H}");
    TEX.Macro("bbI","\\mathbb{I}");
    TEX.Macro("bbJ","\\mathbb{J}");
    TEX.Macro("bbK","\\mathbb{K}");
    TEX.Macro("bbL","\\mathbb{L}");
    TEX.Macro("bbM","\\mathbb{M}");
    TEX.Macro("bbN","\\mathbb{N}");
    TEX.Macro("bbO","\\mathbb{P}");
    TEX.Macro("bbP","\\mathbb{P}");
    TEX.Macro("bbQ","\\mathbb{Q}");
    TEX.Macro("bbR","\\mathbb{R}");
    TEX.Macro("bbS","\\mathbb{S}");
    TEX.Macro("bbT","\\mathbb{T}");
    TEX.Macro("bbU","\\mathbb{U}");
    TEX.Macro("bbV","\\mathbb{V}");
    TEX.Macro("bbW","\\mathbb{W}");
    TEX.Macro("bbX","\\mathbb{X}");
    TEX.Macro("bbY","\\mathbb{Y}");
    TEX.Macro("bbZ","\\mathbb{Z}");
});

// Because this file will be used both when the post is read in github
// pages as well as when I run Jekyll locally, then I add this line twice.
MathJax.Ajax.loadComplete("/public/javascripts/mymathjaxdefs.js");
MathJax.Ajax.loadComplete("http://darcamo.github.io/public/javascripts/mymathjaxdefs.js");
