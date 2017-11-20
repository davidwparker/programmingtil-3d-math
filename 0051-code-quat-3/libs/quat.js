// Empty JS object to represent a quaternion
function quat() {
  // Standard methods
  this.create = function() {
    return this;
  };

  // create a quaternion given some values
  this.createWith = function(w, x, y, z) {
    this.w = w;
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  };

  // Print out values
  this.print = function() {
    console.log(this.w, this.x, this.y, this.z);
  };

  // copy
  this.copy = function(copy) {
    this.w = copy.w;
    this.x = copy.x;
    this.y = copy.y;
    this.z = copy.z;
    return this;
  };

  // Equality
  this.equals = function(a) {
    return this.w == a.w && this.x == a.x && this.y == a.y && this.z == a.z;
  };

  // Equality strict
  this.equalsStrict = function(a) {
    return this.w == a.w && this.x === a.x && this.y === a.y && this.z === a.z;
  };

  // Identity
  // Episode 28
  this.identityP = function() {
    this.w = 1;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
  };

  this.identityN = function() {
    this.w = -1;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
  };

  this.identity = this.identityP;

  // Episode 28
  this.negate = function() {
    this.w = -this.w;
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  };

  // Episode 28
  this.rotateAboutX = function(theta) {
    var thetaHalf = theta * 0.5;
    this.w = Math.cos(thetaHalf);
    this.x = Math.sin(thetaHalf);
    return this;
  };

  this.rotateAboutY = function(theta) {
    var thetaHalf = theta * 0.5;
    this.w = Math.cos(thetaHalf);
    this.y = Math.sin(thetaHalf);
    return this;
  };

  this.rotateAboutZ = function(theta) {
    var thetaHalf = theta * 0.5;
    this.w = Math.cos(thetaHalf);
    this.z = Math.sin(thetaHalf);
    return this;
  };

  this.rotateAbout = function(v, theta) {
    // Normalize v
    if (v.normalize() - 1.0 > 0.01) {
      return this;
    }
    var thetaHalf = theta * 0.5;
    var sinThetaHalf = Math.sin(thetaHalf);
    this.w = Math.cos(thetaHalf);
    this.x = v.x * sinThetaHalf;
    this.y = v.y * sinThetaHalf;
    this.z = v.z * sinThetaHalf;
    return this;
  };

  // Episode 28
  this.conjugate = function() {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  };

  // Episode 28
  this.magnitude = function() {
    return Math.sqrt(
      this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z
    );
  };

  this.normalize = function() {
    var magnitude = this.magnitude();
    this.w = this.w / magnitude;
    this.x = this.x / magnitude;
    this.y = this.y / magnitude;
    this.z = this.z / magnitude;
    return this;
  };

  // Episode 29
  this.multiply = function(that) {
    var q = new quat().create();
    q.w = this.w * that.w - this.x * that.x - this.y * that.y - this.z * that.z;
    q.x = this.w * that.x + this.x * that.w + this.z * that.y - this.y * that.z;
    q.y = this.w * that.y + this.y * that.w + this.x * that.z - this.z * that.x;
    q.z = this.w * that.z + this.z * that.w + this.y * that.x - this.x * that.y;
    return q;
  };
}
