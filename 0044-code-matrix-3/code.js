function runCode() {
  var arr1 = [4, 2, 1, 0, 3, 3, 6, 0, 2, 1, 4, 0, 3, 2, 1, 0];
  var arr2 = [1, 3, 2, 1, 0, 1, 1, 0, 2, 1, 3, 1, 3, 2, 2, 1];

  var m = new mat4().createWith(arr1);

  // translateBy
  var v = new vec3().createWith(1, 1, 3);
  m.printSingle();
  m.translateBy(v).printSingle();

  // getTranslation
  console.log(m.getTranslation());

  // add
  var m1 = new mat4().createWith(arr1);
  var m2 = new mat4().createWith(arr2);
  m1.add(m2).printSingle();

  // subtract
  m1 = new mat4().createWith(arr1);
  m2 = new mat4().createWith(arr2);
  m1.subtract(m2).printSingle();

  // setRotate
  m1 = new mat4().createWith(arr1);
  v = new vec3().createWith(1, 0, 0);
  var theta = 1.5708;
  m1.setRotate(theta, v).print();
}
