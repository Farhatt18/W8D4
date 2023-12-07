Function.prototype.inherits = function(Parent){
    function surrogate(){};
    surrogate.prototype = Parent.prototype
    this.prototype = new surrogate;
    this.prototype.constructor = this; 
};

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

