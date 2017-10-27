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
      { src: '../vendor/js/math.js', async: true },
      { src: '../vendor/js/MathJax.2.7.0.js', async: true }
    ]
  });

  runCode();
})(window || this);
