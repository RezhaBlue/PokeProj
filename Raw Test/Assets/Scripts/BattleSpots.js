#pragma strict


function OnTriggerEnter (info : Collider) {
	if (info.tag == "Player") {
	var battleCameraSearch : BattleCameraSwitch = GetComponent(BattleCameraSwitch);
	//                     : name of the script being searched : get the stuff located in the script
	BattleCameraSwitch.update(inBattle = true);
	}
}