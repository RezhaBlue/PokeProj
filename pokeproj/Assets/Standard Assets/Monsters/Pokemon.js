#pragma strict

class Pokemon{

	var name : String;
	var internalName : String;
	var type1 : Type;
	var type2 : Type;
	var baseStats : ArrayList;
	var genderRate : String;
	var growthRate : String;
	var baseEXP : int;
	var effortPoints : ArrayList;
	var rareness : int;
	var happiness : int;
	var abilities : String;
	var hiddenAbility : String;
	/*Moves=1,TACKLE,3,GROWL,7,LEECHSEED,9,VINEWHIP,13,POISONPOWDER,13,SLEEPPOWDER,15,TAKEDOWN,19,RAZORLEAF,21,SWEETSCENT,25,GROWTH,27,DOUBLEEDGE,31,WORRYSEED,33,SYNTHESIS,37,SEEDBOMB
	EggMoves=AMNESIA,CHARM,CURSE,ENDURE,GIGADRAIN,GRASSWHISTLE,INGRAIN,LEAFSTORM,MAGICALLEAF,NATUREPOWER,PETALDANCE,POWERWHIP,SKULLBASH,SLUDGE
	Compatibility=1,7
	StepsToHatch=5355*/
	var height : double;
	var weight : double;
	var color : String;
	var habitat : String;
	//RegionalNumbers=1,231
	var kind : String;
	var Pokedex : String;
	//BattlerPlayerY=0
	//BattlerEnemyY=25
	//BattlerAltitude=0
	//Evolutions=IVYSAUR,Level,16
}

enum Type{

normal,
fighting,
flying,
poison,
ground,
rock,
bug,
ghost,
steel,
///???,
fire,
water,
grass,
electric,
psychic,
ice,
dragon,
dark

}