# wirejs


const vanilla = require('vanilla.js')

var Wire = function(){
	
  this.action = function() {
    console.log('dump');
  }

	return {
    'action': this.action
	}
};

(function(lib){
  
 function factoryWire() {
   return new Wire()
 }

 var littleWire = factoryWire()

 littleWire.action()

})(vanilla)



