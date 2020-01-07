function Mouse(name){
    this.name  = name;
    this.deal = false;
}



Mouse.prototype.dia = function(){
    this.deal = true;
}

module.exports = Mouse;



