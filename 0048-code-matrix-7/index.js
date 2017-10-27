(function(global) {
  /*
  * www.programmingtil.com
  * www.codenameparkerllc.com
  */
  Reveal.initialize({
    history: true,
    dependencies: [
      { src: '../vendor/js/marked.js' },
      { src: '../vendor/js/markdown.js' },
      { src: '../vendor/js/math.js' },
      { src: '../vendor/js/MathJax.2.7.0.js' }
    ],
    math: {
      mathjax: '../vendor/js/MathJax.2.7.0.js'
    }
  });

  runCode();
})(window || this);
