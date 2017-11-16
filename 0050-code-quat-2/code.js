function runCode() {
  console.log('Conjugate');
  new quat()
    .createWith(1, 2, 3, 4)
    .conjugate()
    .print();

  console.log('Magnitude');
  console.log(new quat().identityP().magnitude());
  console.log(new quat().createWith(1, 2, 3, 4).magnitude());

  console.log('Normalize');
  new quat()
    .identityP()
    .normalize()
    .print();
  new quat()
    .createWith(1, 2, 3, 4)
    .normalize()
    .print();
  new quat()
    .createWith(2, 2, 2, 2)
    .normalize()
    .print();
}
