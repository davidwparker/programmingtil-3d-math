function runCode() {
  var arr1 = [4, 2, 1, 0, 3, 3, 6, 0, 2, 1, 4, 0, 3, 2, 1, 0];

  // Shearing
  var m1, m2;
  m1 = new mat4().createWith(arr1);
  m1.shearXY(1, 2).printSingle();

  m1 = new mat4().createWith(arr1);
  m2 = new mat4().identity();
  m2.setShearXY(1, 2).multiply(m1).printSingle();

  m1 = new mat4().createWith(arr1);
  m1.shearXZ(1, 2).printSingle();

  m1 = new mat4().createWith(arr1);
  m2 = new mat4().identity();
  m2.setShearXZ(1, 2).multiply(m1).printSingle();

  m1 = new mat4().createWith(arr1);
  m1.shearYZ(1, 2).printSingle();

  m1 = new mat4().createWith(arr1);
  m2 = new mat4().identity();
  m2.setShearYZ(1, 2).multiply(m1).printSingle();
}
