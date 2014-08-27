#pragma strict
//in game GUI menu
var icon : Texture2D;
var GuiMenu : GUISkin;
var fpc : GameObject;
var mslk : GameObject;

function Start(){
	Screen.showCursor = false;
}

function Update(){

	if(Input.GetKeyDown("escape")){
		if(Screen.showCursor == false){
			fpc.SendMessage("toggleSuppress", true);
			mslk.SendMessage("toggleSuppress", true);
			Screen.showCursor = true;
		}
		else {
			fpc.SendMessage("toggleSuppress", false);
			mslk.SendMessage("toggleSuppress", false);
			Screen.showCursor = false;
		}
	}

}

function OnGUI () {
	if(Screen.showCursor){
		//generic game menu: resume, options, quit
		GUI.Box(Rect(Screen.width/2-65, Screen.height/2-120, 130, 180), "Menu");
	    /*if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-90, 100, 50), icon)) {
	        print ("you clicked the icon");
	    }*/
	    
	    /*if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2,100,50), GUIContent("This is text", icon))){
	    	print("you clicked the captioned icon");
	    }*/
	    
	    if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-90, 100, 20), "Resume")) {
	        print ("you clicked the 'Resume' button");
	        fpc.SendMessage("toggleSuppress", false);
			mslk.SendMessage("toggleSuppress", false);
			Screen.showCursor = false;
	    }
	    
	    if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-50, 100, 20), "Options")) {
	        print ("you clicked the 'Options' button");
	        //
	    }
	    
	    if (GUI.Button (Rect (Screen.width/2-50,Screen.height/2-10, 100, 20), "Quit Game")) {
	        print ("you clicked the 'Exit to Main Menu' button");
			Application.LoadLevel ("StartScreen");
	    }

    }
}

