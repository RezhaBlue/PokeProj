#pragma strict

function Start () {

}

function OnGUI () {
	//generic game menu: resume, options, quit
	GUI.Box(Rect(Screen.width/2-65, Screen.height/2-120, 130, 180), "Menu");
    /*if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-90, 100, 50), icon)) {
        print ("you clicked the icon");
    }*/
    
    /*if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2,100,50), GUIContent("This is text", icon))){
    	print("you clicked the captioned icon");
    }*/
    
    if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-90, 100, 20), "Start Game")) {
        print ("you clicked the 'Start Game' button");
		Application.LoadLevel("Pallet Town");
    }
    
    if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-50, 100, 20), "Options")) {
        print ("you clicked the 'Options' button");
        //
    }
    
    if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-10, 100, 20), "Exit Game")) {
        print ("you clicked the 'Exit Game' button");
		Application.Quit();
    }
}