// Empty JS object to represent a vector
function vec3() {
  // Standard Objects
  // create an empty vector
  this.create = function() {
    return this;
  };

  // create a vector given some values
  this.createWith = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  };

  // Print out values
  this.print = function() {
    console.log(this.x, this.y, this.z);
  };

  // copy a vector
  this.copy = function(copy) {
    this.x = copy.x;
    this.y = copy.y;
    this.z = copy.z;
    return this;
  };

  // Equality
  this.equals = function(a) {
    return this.x == a.x && this.y == a.y && this.z == a.z;
  };

  // Equality strict
  this.equalsStrict = function(a) {
    return this.x === a.x && this.y === a.y && this.z === a.z;
  };

  // Operations
  // Zero vector
  this.zero = function() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
  };

  // Negation
  this.negate = function() {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  };

  // Addition
  this.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    this.z += a.z;
    return this;
  };

  // Subtraction
  this.subtract = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    this.z -= a.z;
    return this;
  };

  // Multiplication: scalar
  this.multiply = function(a) {
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this;
  };

  // Division: scalar
  this.divide = function(a) {
    // Note: check for 0...
    a = 1 / a;
    this.x *= a;
    this.y *= a;
    this.z *= a;
    return this;
  };

  // Normalization
  this.normalize = function() {
    var magSquare = this.x * this.x + this.y * this.y + this.z * this.z;
    if (magSquare > 0.0) {
      var overMag = 1.0 / Math.sqrt(magSquare);
      this.x *= overMag;
      this.y *= overMag;
      this.z *= overMag;
    }
    return this;
  };

  // Cross Product
  this.cross = function(a) {
    var x = this.y * a.z - this.z * a.y;
    var y = this.z * a.x - this.x * a.z;
    var z = this.x * a.y - this.y * a.x;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  };

  // Operations that return scalars
  // Dot Product
  this.dot = function(a) {
    return this.x * a.x + this.y * a.y + this.z * a.z;
  };

  // Magnitude
  this.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  };

  // Distance
  this.distance = function(a) {
    var x = a.x - this.x;
    var y = a.y - this.y;
    var z = a.z - this.z;
    return Math.sqrt(x * x + y * y + z * z);
  };

  // Unit vector
  this.unitVector = function() {
    var len = this.magnitude();

    // Ensure small enough and unit vector
    if (Math.abs(len) < 0.000001) {
      return null;
    }

    len = 1 / len;
    this.x *= len;
    this.y *= len;
    this.z *= len;
    return this;
  };
}
