function runCode() {
  var arr1 = [4, 2, 1, 0, 3, 3, 6, 0, 2, 1, 4, 0, 3, 2, 1, 0];

  var c = new mat4().createWith(arr1);

  // determinant
  console.log(c.determinant());

  // inverse
  c.inverse().print();

  // scalar multiplication
  c = new mat4().createWith(arr1);
  c.scale(2).print();

  // scalar vec3 multiplication
  c = new mat4().createWith(arr1);
  var v = new vec3().createWith(1, 1, 3);
  c.scaleVec3(v).print();

  // multiplication
  var arr2 = [1, 0, 2, 1, 3, 2, 1, 0, 1, 3, 3, 2, 1, 0, 1, 0];
  var arr3 = [1, 3, 2, 1, 0, 1, 1, 0, 2, 1, 3, 1, 3, 2, 2, 1];
  c = new mat4().createWith(arr2);
  var d = new mat4().createWith(arr3);
  c.multiply(d).print();

  // transpose
  c = new mat4().createWith(arr1);
  c.print();
  c.transpose().print();
}
