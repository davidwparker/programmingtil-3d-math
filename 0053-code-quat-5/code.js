function runCode() {
  var q = new quat().createWith(1, 1, 1, 1);

  console.log('Log');
  q.normalize().print();
  q2 = q.log();
  q2.print();

  console.log('Exp');
  q3 = q2.exp().print();

  console.log('Multiplication with Scalar');
  q = new quat()
    .createWith(3, 2, 3, 4)
    .scale(2)
    .print();
}
