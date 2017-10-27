function runCode() {
  // var arr1 = [4, 2, 1, 0, 3, 3, 6, 0, 2, 1, 4, 0, 3, 2, 1, 0];

  // Reflection
  console.log('reflect');
  var v;
  v = new vec3().createWith(1, 0, 0);
  new mat4().identity().scaleArbitrary(-1, v).printSingle();
  new mat4().identity().reflect(v).printSingle();

  v = new vec3().createWith(0, 1, 0);
  new mat4().identity().reflect(v).printSingle();

  v = new vec3().createWith(0, 0, 1);
  new mat4().identity().reflect(v).printSingle();

  v = new vec3().createWith(1, 1, 0);
  new mat4().identity().reflect(v).print();

  // Orthographic
  console.log('ortho');
  v = new vec3().createWith(1, 0, 0);
  new mat4().identity().ortho(v).printSingle();
}
