function runCode() {
  var q = new quat().createWith(1, 2, 3, 4);
  var q2 = new quat().createWith(-1, -2, -3, -4);
  var q3 = new quat().createWith(2, 3, -1, -6);

  console.log('Multiplication');
  q.multiply(new quat().identityP()).print();
  q2.multiply(new quat().identityP()).print();
  console.log('Multiplication non commutative');
  var q4 = q.multiply(q3);
  q4.print();
  q3.multiply(q).print();
  var m = q.magnitude();
  var m3 = q3.magnitude();
  console.log('magnitude');
  console.log(q4.magnitude());
  console.log(m * m3);
  q.normalize().print();
  q3.normalize().print();
  var m = q.magnitude();
  var m3 = q3.magnitude();
  var q4 = q.multiply(q3);
  console.log(q4.magnitude());
  console.log(m * m3);
}
