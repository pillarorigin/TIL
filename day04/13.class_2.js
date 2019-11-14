function Health(name) {
    this.name = name;
}

Health.prototype.showHealth = function() {
    console.log(this.name + "님 안녕하세요");
}

