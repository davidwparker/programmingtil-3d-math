function runCode() {
  var arr1 = [4, 2, 1, 0, 3, 3, 6, 0, 2, 1, 4, 0, 3, 2, 1, 0];

  // Set rotation
  // setRotateX
  var m1, m2, v;
  var theta = 1.5708;
  console.log('setRotateX');
  m1 = new mat4().identity();
  m1.setRotateX(theta).print();

  m1 = new mat4().identity();
  v = new vec3().createWith(1, 0, 0);
  m1.setRotate(theta, v).print();

  // setRotateY
  console.log('setRotateY');
  m1 = new mat4().identity();
  m1.setRotateY(theta).print();

  m1 = new mat4().identity();
  v = new vec3().createWith(0, 1, 0);
  m1.setRotate(theta, v).print();

  // setRotateZ
  console.log('setRotateZ');
  m1 = new mat4().identity();
  m1.setRotateZ(theta).print();

  m1 = new mat4().identity();
  v = new vec3().createWith(0, 0, 1);
  m1.setRotate(theta, v).print();

  // Rotation
  console.log('rotateX');
  m1 = new mat4().createWith(arr1);
  m1.rotateX(theta).print();

  m1 = new mat4().createWith(arr1);
  m2 = new mat4().identity();
  m2.setRotateX(theta).multiply(m1).print();

  console.log('rotateY');
  m1 = new mat4().createWith(arr1);
  m1.rotateY(theta).print();

  m1 = new mat4().createWith(arr1);
  m2 = new mat4().identity();
  m2.setRotateY(theta).multiply(m1).print();

  console.log('rotateZ');
  m1 = new mat4().createWith(arr1);
  m1.rotateZ(theta).print();

  m1 = new mat4().createWith(arr1);
  m2 = new mat4().identity();
  m2.setRotateZ(theta).multiply(m1).print();

  console.log('rotate');
  m1 = new mat4().createWith(arr1);
  m2 = new mat4().identity();
  v = new vec3().createWith(1, 0, 0);
  m2.setRotate(theta, v).multiply(m1).print();

  m1 = new mat4().createWith(arr1);
  m1.rotate(theta, v).print();
}
