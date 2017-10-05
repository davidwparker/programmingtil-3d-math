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
      [this.m11, this.m12, this.m13, this.m14],
      [this.m21, this.m22, this.m23, this.m24],
      [this.m31, this.m32, this.m33, this.m34],
      [this.t41, this.t42, this.t43, this.t44]
    );
  };

  this.printSingle = function() {
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
    return this;
  };

  this.setTranslation = function(vec3) {
    this.t41 = vec3.x;
    this.t42 = vec3.y;
    this.t43 = vec3.z;
    return this;
  };

  this.translateBy = function(vec3) {
    this.t41 += vec3.x;
    this.t42 += vec3.y;
    this.t43 += vec3.z;
    return this;
  };

  this.getTranslation = function(vec3) {
    return [this.t41, this.t42, this.t43];
  };

  // Operations that return scalars
  // Episodes 19 and 20
  // compute the 3x3 portion of the determinant
  this.determinant = function() {
    return (
      this.m11 * (this.m22 * this.m33 - this.m23 * this.m32) +
      this.m12 * (this.m23 * this.m31 - this.m21 * this.m33) +
      this.m13 * (this.m21 * this.m32 - this.m22 * this.m31)
    );
  };

  // Episode 21
  // compute the 3x3 portion of the inverse
  this.inverse = function() {
    var det = this.determinant();
    console.assert(Math.abs(det) > 0.0000001);
    var oneOverDet = 1.0 / det;
    var mat = new mat4().create();
    mat.m11 = (this.m22 * this.m33 - this.m23 * this.m32) * oneOverDet;
    mat.m12 = (this.m13 * this.m32 - this.m12 * this.m33) * oneOverDet;
    mat.m13 = (this.m12 * this.m23 - this.m13 * this.m22) * oneOverDet;

    mat.m21 = (this.m23 * this.m31 - this.m21 * this.m33) * oneOverDet;
    mat.m22 = (this.m11 * this.m33 - this.m13 * this.m31) * oneOverDet;
    mat.m23 = (this.m13 * this.m21 - this.m11 * this.m23) * oneOverDet;

    mat.m31 = (this.m21 * this.m32 - this.m22 * this.m31) * oneOverDet;
    mat.m32 = (this.m12 * this.m31 - this.m11 * this.m32) * oneOverDet;
    mat.m33 = (this.m11 * this.m22 - this.m12 * this.m21) * oneOverDet;

    mat.t41 = this.m22 * this.m33 - this.m23 * this.m32;
    mat.t42 = this.m22 * this.m33 - this.m23 * this.m32;
    mat.t43 = this.m22 * this.m33 - this.m23 * this.m32;
    return mat;
  };

  // Episode 8
  this.scale = function(scalar) {
    this.m11 *= scalar;
    this.m12 *= scalar;
    this.m13 *= scalar;
    this.m21 *= scalar;
    this.m22 *= scalar;
    this.m23 *= scalar;
    this.m31 *= scalar;
    this.m32 *= scalar;
    this.m33 *= scalar;
    return this;
  };

  // Episode 10
  this.scaleVec3 = function(vec3) {
    this.m11 *= vec3.x;
    this.m12 *= vec3.x;
    this.m13 *= vec3.x;
    this.m21 *= vec3.y;
    this.m22 *= vec3.y;
    this.m23 *= vec3.y;
    this.m31 *= vec3.z;
    this.m32 *= vec3.z;
    this.m33 *= vec3.z;
    return this;
  };

  // Episode 9
  // Matrix multiplication /
  this.multiply = function(that) {
    var mat = new mat4().create();
    mat.m11 = this.m11 * that.m11 + this.m12 * that.m21 + this.m13 * that.m31;
    mat.m12 = this.m11 * that.m12 + this.m12 * that.m22 + this.m13 * that.m32;
    mat.m13 = this.m11 * that.m13 + this.m12 * that.m23 + this.m13 * that.m33;
    mat.m21 = this.m21 * that.m11 + this.m22 * that.m21 + this.m23 * that.m31;
    mat.m22 = this.m21 * that.m12 + this.m22 * that.m22 + this.m23 * that.m32;
    mat.m23 = this.m21 * that.m13 + this.m22 * that.m23 + this.m23 * that.m33;
    mat.m31 = this.m31 * that.m11 + this.m32 * that.m21 + this.m33 * that.m31;
    mat.m32 = this.m31 * that.m12 + this.m32 * that.m22 + this.m33 * that.m32;
    mat.m33 = this.m31 * that.m13 + this.m32 * that.m23 + this.m33 * that.m33;
    mat.t41 =
      this.t41 * that.m11 +
      this.t42 * that.m21 +
      this.t43 * that.m31 +
      that.t41;
    mat.t42 =
      this.t41 * that.m12 +
      this.t42 * that.m22 +
      this.t43 * that.m32 +
      that.t42;
    mat.t43 =
      this.t41 * that.m13 +
      this.t42 * that.m23 +
      this.t43 * that.m33 +
      that.t42;
    mat.m14 = mat.m24 = mat.m34 = mat.t44 = 0;
    return mat;
  };

  // Episode 8
  this.transpose = function() {
    var a12 = this.m12,
      a13 = this.m13,
      a14 = this.m14,
      a23 = this.m23,
      a24 = this.m24,
      a34 = this.m34;
    this.m12 = this.m21;
    this.m13 = this.m31;
    this.m14 = this.t41;
    this.m21 = a12;
    this.m23 = this.m32;
    this.m24 = this.t42;
    this.m31 = a13;
    this.m32 = a23;
    this.m34 = this.t43;
    this.t41 = a14;
    this.t42 = a24;
    this.t43 = a34;
    return this;
  };

  this.add = function(that) {
    this.m11 = this.m11 + that.m11;
    this.m12 = this.m12 + that.m12;
    this.m13 = this.m13 + that.m13;
    this.m14 = this.m14 + that.m14;
    this.m21 = this.m21 + that.m21;
    this.m22 = this.m22 + that.m22;
    this.m23 = this.m23 + that.m23;
    this.m24 = this.m24 + that.m24;
    this.m31 = this.m31 + that.m31;
    this.m32 = this.m32 + that.m32;
    this.m33 = this.m33 + that.m33;
    this.m34 = this.m34 + that.m34;
    this.t41 = this.t41 + that.t41;
    this.t42 = this.t42 + that.t42;
    this.t43 = this.t43 + that.t43;
    this.t44 = this.t44 + that.t44;
    return this;
  };

  this.subtract = function(that) {
    this.m11 = this.m11 - that.m11;
    this.m12 = this.m12 - that.m12;
    this.m13 = this.m13 - that.m13;
    this.m14 = this.m14 - that.m14;
    this.m21 = this.m21 - that.m21;
    this.m22 = this.m22 - that.m22;
    this.m23 = this.m23 - that.m23;
    this.m24 = this.m24 - that.m24;
    this.m31 = this.m31 - that.m31;
    this.m32 = this.m32 - that.m32;
    this.m33 = this.m33 - that.m33;
    this.m34 = this.m34 - that.m34;
    this.t41 = this.t41 - that.t41;
    this.t42 = this.t42 - that.t42;
    this.t43 = this.t43 - that.t43;
    this.t44 = this.t44 - that.t44;
    return this;
  };

  // Episode 12
  this.setRotate = function(theta, axis) {
    var x = axis.x;
    var y = axis.y;
    var z = axis.z;
    var len = Math.sqrt(x * x + y * y + z * z);

    // Ensure small enough and unit vector
    if (Math.abs(len) < 0.000001) {
      return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    var s = Math.sin(theta);
    var c = Math.cos(theta);

    // compute 1 - cos(theta) and more
    var a = 1 - c;
    var ax = a * x;
    var ay = a * y;
    var az = a * z;

    // oh my, it's the rotation matrix elements
    this.m11 = x * ax + c;
    this.m12 = y * ax + z * s;
    this.m13 = z * ax - y * s;
    this.m21 = x * ay - z * s;
    this.m22 = y * ay + c;
    this.m23 = z * ay + x * s;
    this.m31 = x * az + y * s;
    this.m32 = y * az - x * s;
    this.m33 = z * az + c;
    return this;
  };

  this.rotate = function(theta, axis) {
    var x = axis.x;
    var y = axis.y;
    var z = axis.z;
    var len = Math.sqrt(x * x + y * y + z * z);

    // Ensure small enough and unit vector
    if (Math.abs(len) < 0.000001) {
      return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    var s = Math.sin(theta);
    var c = Math.cos(theta);

    // compute 1 - cos(theta) and more
    var a = 1 - c;
    var ax = a * x;
    var ay = a * y;
    var az = a * z;

    // oh my, it's the rotation matrix elements
    var m11 = x * ax + c;
    var m12 = y * ax + z * s;
    var m13 = z * ax - y * s;
    var m21 = x * ay - z * s;
    var m22 = y * ay + c;
    var m23 = z * ay + x * s;
    var m31 = x * az + y * s;
    var m32 = y * az - x * s;
    var m33 = z * az + c;
    var a11 = this.m11;
    var a12 = this.m12;
    var a13 = this.m13;
    var a14 = this.m14;
    var a21 = this.m21;
    var a22 = this.m22;
    var a23 = this.m23;
    var a24 = this.m24;
    var a31 = this.m31;
    var a32 = this.m32;
    var a33 = this.m33;
    var a34 = this.m34;
    this.m11 = a11 * m11 + a21 * m12 + a31 * m13;
    this.m12 = a12 * m11 + a22 * m12 + a32 * m13;
    this.m13 = a13 * m11 + a23 * m12 + a33 * m13;
    this.m14 = a14 * m11 + a24 * m12 + a34 * m13;
    this.m21 = a11 * m21 + a21 * m22 + a31 * m23;
    this.m22 = a12 * m21 + a22 * m22 + a32 * m23;
    this.m23 = a13 * m21 + a23 * m22 + a33 * m23;
    this.m24 = a14 * m21 + a24 * m22 + a34 * m23;
    this.m31 = a11 * m31 + a21 * m32 + a31 * m33;
    this.m32 = a12 * m31 + a22 * m32 + a32 * m33;
    this.m33 = a13 * m31 + a23 * m32 + a33 * m33;
    this.m34 = a14 * m31 + a24 * m32 + a34 * m33;
    return this;
  };

  // Episode 11
  this.setRotateX = function(theta) {
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    this.m11 = 1;
    this.m22 = c;
    this.m23 = s;
    this.m32 = -s;
    this.m33 = c;
    this.m12 = this.m13 = this.m21 = this.m31 = 0;
    return this;
  };

  this.setRotateY = function(theta) {
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    this.m11 = c;
    this.m13 = -s;
    this.m22 = 1;
    this.m31 = s;
    this.m33 = c;
    this.m12 = this.m21 = this.m23 = this.m32 = 0;
    return this;
  };

  this.setRotateZ = function(theta) {
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    this.m11 = c;
    this.m12 = s;
    this.m21 = -s;
    this.m22 = c;
    this.m33 = 1;
    this.m13 = this.m23 = this.m31 = this.m32 = 0;
    return this;
  };

  this.rotateX = function(theta) {
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    var a11 = this.m21;
    var a12 = this.m22;
    var a13 = this.m23;
    var a14 = this.m24;
    var a21 = this.m31;
    var a22 = this.m32;
    var a23 = this.m33;
    var a24 = this.m34;
    this.m21 = a11 * c + a21 * s;
    this.m22 = a12 * c + a22 * s;
    this.m23 = a13 * c + a23 * s;
    this.m24 = a14 * c + a24 * s;
    this.m31 = a21 * c - a11 * s;
    this.m32 = a22 * c - a12 * s;
    this.m33 = a23 * c - a13 * s;
    this.m34 = a24 * c - a14 * s;
    return this;
  };

  this.rotateY = function(theta) {
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    var a11 = this.m11;
    var a12 = this.m12;
    var a13 = this.m13;
    var a14 = this.m14;
    var a31 = this.m31;
    var a32 = this.m32;
    var a33 = this.m33;
    var a34 = this.m34;
    this.m11 = a11 * c - a31 * s;
    this.m12 = a12 * c - a32 * s;
    this.m13 = a13 * c - a33 * s;
    this.m14 = a14 * c - a34 * s;
    this.m31 = a31 * c + a11 * s;
    this.m32 = a32 * c + a12 * s;
    this.m33 = a33 * c + a13 * s;
    this.m34 = a34 * c + a14 * s;
    return this;
  };

  this.rotateZ = function(theta) {
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    var a11 = this.m11;
    var a12 = this.m12;
    var a13 = this.m13;
    var a14 = this.m14;
    var a21 = this.m21;
    var a22 = this.m22;
    var a23 = this.m23;
    var a24 = this.m24;
    this.m11 = a11 * c + a21 * s;
    this.m12 = a12 * c + a22 * s;
    this.m13 = a13 * c + a23 * s;
    this.m14 = a14 * c + a24 * s;
    this.m31 = a21 * c - a11 * s;
    this.m32 = a22 * c - a12 * s;
    this.m33 = a23 * c - a13 * s;
    this.m34 = a24 * c - a14 * s;
    return this;
  };
}
