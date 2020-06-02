var Task = function (name) {
  this.name = name;
  this.createdDate = new Date();
  return this;
}

export { Task }