(function(global) {

  /*
  * Constants, State, and Main
  * www.programmingtil.com
  * www.codenameparkerllc.com
  */
  Reveal.initialize({
    history: true,
    dependencies: [
      { src: 'vendor/marked.js' },
      { src: 'vendor/markdown.js' },
      { src: 'vendor/math.js', async: true },
      { src: 'vendor/MathJax.2.7.0.js', async: true },
    ]
  });
})(window || this);
