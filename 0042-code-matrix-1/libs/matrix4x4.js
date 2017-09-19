// Empty JS object to represent a 4x4 matrix
function mat4() {
  // Standard Objects
  // create an empty matrix
  this.create = function() {
    return this;
  };

  // create a matrix given array
  this.createWith = function(arr) {
    this.m11 = arr[0];
    this.m12 = arr[1];
    this.m13 = arr[2];
    this.m14 = arr[3];
    this.m21 = arr[4];
    this.m22 = arr[5];
    this.m23 = arr[6];
    this.m24 = arr[7];
    this.m31 = arr[8];
    this.m32 = arr[9];
    this.m33 = arr[10];
    this.m34 = arr[11];
    this.t41 = arr[12];
    this.t42 = arr[13];
    this.t43 = arr[14];
    this.t44 = arr[15];
    return this;
  };

  // create a matrix given values
  this.createWithValues = function(
    m11,
    m12,
    m13,
    m14,
    m21,
    m22,
    m23,
    m24,
    m31,
    m32,
    m33,
    m34,
    t41,
    t42,
    t43,
    t44
  ) {
    this.m11 = m11;
    this.m12 = m12;
    this.m13 = m13;
    this.m14 = m14;
    this.m21 = m21;
    this.m22 = m22;
    this.m23 = m23;
    this.m24 = m24;
    this.m31 = m31;
    this.m32 = m32;
    this.m33 = m33;
    this.m34 = m34;
    this.t41 = t41;
    this.t42 = t42;
    this.t43 = t43;
    this.t44 = t44;
    return this;
  };

  // Print out values
  this.print = function() {
    console.log(
      this.m11,
      this.m12,
      this.m13,
      this.m14,
      this.m21,
      this.m22,
      this.m23,
      this.m24,
      this.m31,
      this.m32,
      this.m33,
      this.m34,
      this.t41,
      this.t42,
      this.t43,
      this.t44
    );
  };

  // copy a matrix
  this.copy = function(copy) {
    this.m11 = copy.m11;
    this.m12 = copy.m12;
    this.m13 = copy.m13;
    this.m14 = copy.m14;
    this.m21 = copy.m21;
    this.m22 = copy.m22;
    this.m23 = copy.m23;
    this.m24 = copy.m24;
    this.m31 = copy.m31;
    this.m32 = copy.m32;
    this.m33 = copy.m33;
    this.m34 = copy.m34;
    this.t41 = copy.t41;
    this.t42 = copy.t42;
    this.t43 = copy.t43;
    this.t44 = copy.t44;
    return this;
  };

  // Equality
  this.equals = function(copy) {
    return (
      this.m11 == copy.m11 &&
      this.m12 == copy.m12 &&
      this.m13 == copy.m13 &&
      this.m14 == copy.m14 &&
      this.m21 == copy.m21 &&
      this.m22 == copy.m22 &&
      this.m23 == copy.m23 &&
      this.m24 == copy.m24 &&
      this.m31 == copy.m31 &&
      this.m32 == copy.m32 &&
      this.m33 == copy.m33 &&
      this.m34 == copy.m34 &&
      this.t41 == copy.t41 &&
      this.t42 == copy.t42 &&
      this.t43 == copy.t43 &&
      this.t44 == copy.t44
    );
  };

  // Equality strict
  this.equalsStrict = function(copy) {
    return (
      this.m11 === copy.m11 &&
      this.m12 === copy.m12 &&
      this.m13 === copy.m13 &&
      this.m14 === copy.m14 &&
      this.m21 === copy.m21 &&
      this.m22 === copy.m22 &&
      this.m23 === copy.m23 &&
      this.m24 === copy.m24 &&
      this.m31 === copy.m31 &&
      this.m32 === copy.m32 &&
      this.m33 === copy.m33 &&
      this.m34 === copy.m34 &&
      this.t41 === copy.t41 &&
      this.t42 === copy.t42 &&
      this.t43 === copy.t43 &&
      this.t44 === copy.t44
    );
  };

  // Operations
  // Identity Matrix
  this.identity = function() {
    this.m11 = this.m22 = this.m33 = this.t44 = 1;
    this.m12 = this.m13 = this.m14 = 0;
    this.m21 = this.m23 = this.m24 = 0;
    this.m31 = this.m32 = this.m34 = 0;
    this.t41 = this.t42 = this.t43 = 0;
    return this;
  };

  this.zeroTranslation = function() {
    this.t41 = this.t42 = this.t43 = this.t44 = 0;
  };

  this.setTranslation = function(vec3) {
    this.t41 = vec3.x;
    this.t42 = vec3.y;
    this.t43 = vec3.z;
  };
}
