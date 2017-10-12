function runCode() {
  var arr1 = [4, 2, 1, 0, 2, 3, -1, 0, -2, 3, 1, 0, 3, 2, 1, 0];

  // Adjoint
  var m1, m2, v;
  m1 = new mat4().createWith(arr1);
  m2 = m1.adjoint();
  m2.print();

  // From scale (Scaling cardinal axes)
  v = new vec3().createWith(3, 4, 3);
  m1 = new mat4().identity().fromScale(v).print();

  // Scaling arbitrary direction
  v = new vec3().createWith(3, 4, 3);
  m1 = new mat4().identity().scaleArbitrary(2, v).print();
}
