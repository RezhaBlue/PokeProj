#pragma strict
var worldCamera : Camera ;
var battleCamera : Camera ;
// variable of type camera
static var inBattle : boolean = false ;
function Update () {
	if (inBattle == true) {
		worldCamera.active = false ;
		battleCamera.active = true ;
		// if the boolean value(true or false) for inBattle is truem the battle camera activates and the world camera deactivates.
	}
	else if (inBattle == false) {
		worldCamera.active = true ;
		battleCamera.active = false ;
	}
}