function runCode() {
  // var arr1 = [4, 2, 1, 0, 3, 3, 6, 0, 2, 1, 4, 0, 3, 2, 1, 0];

  // perspective
  console.log('Intro to quaternion');
  var v;
  v = new vec3().createWith(1, 0, 0);
  new mat4().identity().project(v).printSingle();
}
