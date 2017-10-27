// Empty JS object to represent a quaternion
function quat() {
  // Standard methods
  this.create = function() {
    return this;
  };

  // create a quaternion given some values
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

  // copy
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
}
