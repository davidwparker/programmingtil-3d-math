function runCode() {
  console.log('Intro to quaternion');
  new quat().createWith(1, 0, 0, 0).print();
  new quat().identityP().print();
  new quat().identityN().print();
  new quat().identity().print();
  new quat()
    .createWith(1, 2, 3, 4)
    .negate()
    .print();
  new quat()
    .identity()
    .rotateAboutX(45)
    .print();
  new quat()
    .identity()
    .rotateAboutY(45)
    .print();
  new quat()
    .identity()
    .rotateAboutZ(45)
    .print();
  new quat()
    .identity()
    .rotateAbout(new vec3().createWith(1, 0, 0), 45)
    .print();
  new quat()
    .identity()
    .rotateAbout(new vec3().createWith(0, 1, 0), 45)
    .print();
  new quat()
    .identity()
    .rotateAbout(new vec3().createWith(0, 0, 1), 45)
    .print();
  new quat()
    .identity()
    .rotateAbout(new vec3().createWith(1, 1, 1), 45)
    .print();
}
