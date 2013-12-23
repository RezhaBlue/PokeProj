#pragma strict

var destroyobjectConfirmation = false ;
function OnTriggerEnter (info : Collider) 
{
	if (info.tag == "Player")
	{	
		Debug.Log("Fix this destroy feature to remove Cube5 platform") ;
		destroyobjectConfirmation = true ;
	}
	if (destroyobjectConfirmation == true)
	{
		Destroy (gameObject) ;
		Debug.Log("For now this will just kill the coin") ;
	}
}
