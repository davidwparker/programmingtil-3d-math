function runCode() {
  console.log(new mat4());
  console.log(new mat4().create());
  console.log(
    new mat4().createWithValues(1, 2, 3, 4, 5, 2, 3, 4, 9, 2, 3, 4, 13, 2, 3, 4)
  );

  var arr1 = [1, 2, 3, 4, 5, 2, 3, 4, 9, 2, 3, 4, 13, 2, 3, 4];
  var arr2 = [1, 2, 3, 4, 5, 2, 3, 4, 9, 2, 3, 4, 13, 2, 3, 5];

  var a = new mat4().createWith(arr1);
  var b = new mat4().createWith(arr2);
  a.print();
  b.print();
  console.log(a.equals(b));
  console.log(a.equalsStrict(b));

  a.copy(b);
  console.log(a.equals(b));
  console.log(a.equalsStrict(b));

  var c = new mat4().identity();
  c.print();

  console.log('Zero Transation');
  var d = new mat4().createWith(arr1);
  d.print();
  d.zeroTranslation();
  d.print();

  console.log('Set Transation');
  var d = new mat4().createWith(arr1);
  var v = new vec3().createWith(11, 12, 13);
  d.print();
  d.setTranslation(v);
  d.print();
}
