function runCode() {
  var q = new quat().createWith(3, 2, 3, 4);

  console.log('Inverse');
  q.inverse().print();
  q.normalize();
  q.multiply(q.inverse()).print();
  q.conjugate().print();

  console.log('Difference');
  var q2 = new quat().identityP();
  var q3 = new quat().createWith(3, 2, 3, 4);
  q2.diff(q3).print();

  var q2 = new quat().createWith(2, 1, 2, 3);
  var q3 = new quat().createWith(3, 2, 3, 4);
  q2.diff(q3).print();

  console.log('Dot Product');
  var q = new quat().createWith(3, 2, 3, 4);
  q.normalize();
  console.log(q.dot(new quat().identityP()));
  q2.normalize();
  console.log(q.dot(q2));
}
