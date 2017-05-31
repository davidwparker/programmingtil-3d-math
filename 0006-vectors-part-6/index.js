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

  console.log(new vec3());
  console.log(new vec3().create());
  console.log(new vec3().createWith(1,2,3));
  var a = new vec3().createWith(1,2,3);
  var b = new vec3().createWith(2,3,4);
  a.print();
  b.print();
  console.log(a.equals(b))
  console.log(a.equalsStrict(b))

  a.copy(b)
  console.log(a.equals(b))
  console.log(a.equalsStrict(b))

  var c = new vec3().zero();
  c.print();

  console.log('Addition');
  var d = new vec3().createWith(1,2,3);
  var e = new vec3().createWith(2,3,4);
  d.print();
  e.print();
  d.add(e);
  d.print();

  console.log('Subtraction');
  var f = new vec3().createWith(2,3,4);
  var g = new vec3().createWith(1,2,3);
  f.print();
  g.print();
  f.subtract(g);
  f.print();

  console.log('Multiply');
  var h = new vec3().createWith(2,3,4);
  h.print();
  h.multiply(2);
  h.print();

  console.log('Divide');
  var i = new vec3().createWith(2,3,4);
  i.print();
  i.divide(2);
  i.print();

  console.log('Normalize');
  var j = new vec3().createWith(2,3,4);
  j.print();
  j.normalize();
  j.print();

  console.log('Dot');
  var k = new vec3().createWith(2,3,4);
  k.print();
  var l = k.dot(new vec3().createWith(1,2,3));
  console.log(l);

  console.log('Cross');
  var m = new vec3().createWith(2,3,4);
  var n = new vec3().createWith(1,2,3);
  m.print();
  n.print();
  m.cross(n);
  m.print();

  console.log('Magnitude');
  var o = new vec3().createWith(2,3,4);
  o.print();
  console.log(o.magnitude());

  console.log('Distance');
  var p = new vec3().createWith(2,3,4);
  var q = new vec3().createWith(1,2,3);
  p.print();
  q.print();
  console.log(p.distance(q));

  console.log('Negation');
  var r = new vec3().createWith(2,3,4);
  r.print();
  r.negate();
  r.print();

})(window || this);
