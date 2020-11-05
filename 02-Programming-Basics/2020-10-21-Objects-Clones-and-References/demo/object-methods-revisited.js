object = {
	_a: 1, 
	set a(x) {
		console.log("setter 'a' called");
		this._a = x;
	},
	_b: 2,
	set b(x) {this._b = x},
	sum() {
		return this._a + this._b;
	},

	setA(x){
		this._a = x;
	}
	
}


object._a = 10;
object.a = 10;

object.setA(10);

console.log(object.sum());
