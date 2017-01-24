//variables used for calculations
var decklist = [];
var generalpoints1 = 0;
var generalpoints2 = 0;
var cardscore1a = 0;
var cardscore1b = 0;
var cardscore2a = 0;
var cardscore2b = 0;
var cardscore3a = 0;
var cardscore3b = 0;
var cardCount = 0;

var twoDropCount = 0;
var threeDropCount = 0;
var fourDropCount = 0;
var fiveDropCount = 0;
var lateDropCount = 0;

var supportCount = 0;
var arcanystProducerPoints = 0;
var battlepetProducerPoints = 0;
var dervishProducerPoints = 0;
var golemProducerPoints = 0;
var mechProducerPoints = 0;
var structureProducerPoints = 0;
var obelyskProducerPoints = 0;
var vespyrProducerPoints = 0;
var wallProducerPoints = 0;
var warmasterProducerPoints = 0;
var wraithlingProducerPoints = 0;
var airdropProducerPoints = 0;
var celerityProducerPoints = 0;
var dyingWishProducerPoints = 0;
var flyingProducerPoints = 0;
var forcefieldProducerPoints = 0;
var frenzyProducerPoints = 0;
var openingGambitProducerPoints = 0;
var provokeProducerPoints = 0;
var rangedProducerPoints = 0;
var rushProducerPoints = 0;
var stunProducerPoints = 0;
var backstabProducerPoints = 0;
var blastProducerPoints = 0;
var deathwatchProducerPoints = 0;
var growProducerPoints = 0;
var infiltrateProducerPoints = 0;
var rebirthProducerPoints = 0;
var zealProducerPoints = 0;
var playerGeneralDamageProducerPoints = 0;
var playerMinionDamageProducerPoints = 0;
var enemyGeneralDamageProducerPoints = 0;
var enemyMinionDamageProducerPoints = 0;
var generalAttackProducerPoints = 0;
var spellProducerPoints = 0;
var spellDamageProducerPoints = 0;
var twoAttackProducerPoints = 0;
var minionProducerPoints = 0;
var artifactProducerPoints = 0;
var cardDrawProducerPoints = 0;
var enemyCardDrawProducerPoints = 0;
var buffProducerPoints = 0;
var debuffProducerPoints = 0;
var healProducerPoints = 0;
var positioningProducerPoints = 0;
var generalPositioningProducerPoints = 0;
var transformProducerPoints = 0;
var replaceProducerPoints = 0;
var scionProducerPoints = 0;
var mirrorMeldProducerPoints = 0;
var divineBondProducerPoints = 0;
var innerFocusProducerPoints = 0;
var shadowCreepProducerPoints = 0;
var darkfireProducerPoints = 0;
var flashProducerPoints = 0;
var bloodSurgeProducerPoints = 0;
var arcanystConsumerPoints = 0;
var battlepetConsumerPoints = 0;
var dervishConsumerPoints = 0;
var golemConsumerPoints = 0;
var mechConsumerPoints = 0;
var structureConsumerPoints = 0;
var obelyskConsumerPoints = 0;
var vespyrConsumerPoints = 0;
var wallConsumerPoints = 0;
var warmasterConsumerPoints = 0;
var wraithlingConsumerPoints = 0;
var airdropConsumerPoints = 0;
var celerityConsumerPoints = 0;
var dyingWishConsumerPoints = 0;
var flyingConsumerPoints = 0;
var forcefieldConsumerPoints = 0;
var frenzyConsumerPoints = 0;
var openingGambitConsumerPoints = 0;
var provokeConsumerPoints = 0;
var rangedConsumerPoints = 0;
var rushConsumerPoints = 0;
var stunConsumerPoints = 0;
var backstabConsumerPoints = 0;
var blastConsumerPoints = 0;
var deathwatchConsumerPoints = 0;
var growConsumerPoints = 0;
var infiltrateConsumerPoints = 0;
var rebirthConsumerPoints = 0;
var zealConsumerPoints = 0;
var playerGeneralDamageConsumerPoints = 0;
var playerMinionDamageConsumerPoints = 0;
var enemyGeneralDamageConsumerPoints = 0;
var enemyMinionDamageConsumerPoints = 0;
var generalAttackConsumerPoints = 0;
var spellConsumerPoints = 0;
var spellDamageConsumerPoints = 0;
var twoAttackConsumerPoints = 0;
var minionConsumerPoints = 0;
var artifactConsumerPoints = 0;
var cardDrawConsumerPoints = 0;
var enemyCardDrawConsumerPoints = 0;
var buffConsumerPoints = 0;
var debuffConsumerPoints = 0;
var healConsumerPoints = 0;
var positioningConsumerPoints = 0;
var generalPositioningConsumerPoints = 0;
var transformConsumerPoints = 0;
var replaceConsumerPoints = 0;
var scionConsumerPoints = 0;
var mirrorMeldConsumerPoints = 0;
var divineBondConsumerPoints = 0;
var innerFocusConsumerPoints = 0;
var shadowCreepConsumerPoints = 0;
var darkfireConsumerPoints = 0;
var flashConsumerPoints = 0;
var bloodSurgeConsumerPoints = 0;

var cardFound1 = false;
var cardFound2 = false;
var cardFound3 = false;
var currentFaction = "";
var cardName1 = "";
var cardName2 = "";
var cardName3 = "";

var dropdownlist = document.getElementById("cards");
// Get the <datalist> and <input> elements.
var dropdowninput1 = document.getElementById('cardlist1');
var dropdowninput2 = document.getElementById('cardlist2');
var dropdowninput3 = document.getElementById('cardlist3');
// Create a new XMLHttpRequest.
var carddatarequest = new XMLHttpRequest();
var cardratingrequest = new XMLHttpRequest();
var carddatalist = [];
var cardratinglist = [];

document.getElementById("bestGeneral").style.display = "none";
document.getElementById("buildADeck").style.display = "none";
document.getElementById("selectFaction").style.display = "none";

// Handle state changes for the request.
carddatarequest.onreadystatechange = function(response) {
  if (carddatarequest.readyState === 4) {
    if (carddatarequest.status === 200) {
      // Parse the JSON
      var jsonOptions = JSON.parse(carddatarequest.responseText);

      // Loop over the JSON array.
      jsonOptions.cardData.forEach(function(item) {
      	//add item to the card data array
        carddatalist.push(item);
      });

      // Checks if all assets have been loaded
      startGauntletCalculator();
    } else {
      // An error occured :(
      //alert("Couldn't load Card Data List :(");
    }
  }
};

// Set up and make the request.
//Card data - https://duelyststats.info/scripts/carddata/getJson.php
carddatarequest.open('GET', 'https://duelyststats.info/scripts/carddata/getJson.php', true);
carddatarequest.send();

// Handle state changes for the request.
cardratingrequest.onreadystatechange = function(response) {
  if (cardratingrequest.readyState === 4) {
    if (cardratingrequest.status === 200) {
      // Parse the JSON
      var jsonOptions = JSON.parse(cardratingrequest.responseText);

      // Loop over the JSON array.
      jsonOptions.cardData.forEach(function(item) {
      	//add item to the card rating list
        cardratinglist.push(item);
      });

      // Checks if all assets have been loaded
      startGauntletCalculator();
    } else {
      // An error occured :(
      //dropdowninput1.placeholder = "Couldn't load datalist options :(";
    }
  }
};

// Set up and make the request.
//Card Rating Data - cardRatingData.json
cardratingrequest.open('GET', 'data/cardRatingData.json', true);
cardratingrequest.send();

function startGauntletCalculator(){
	if(cardratingrequest.readyState === 4 && cardratingrequest.status === 200
		&& carddatarequest.readyState === 4 && carddatarequest.status === 200){
		resetCalculator();
	}
}

function selectFaction(factionName){
	currentFaction = factionName;
	generalpoints1 = generalpoints2 = 0;
	cardscore1a = cardscore1b = cardscore2a = 0;
	cardscore2b = cardscore3a = cardscore3b = 0;
	twoDropCount = threeDropCount = fourDropCount = 0;
	fiveDropCount = lateDropCount = supportCount = 0;
  arcanystProducerPoints = battlepetProducerPoints = 0;
  dervishProducerPoints = golemProducerPoints = 0;
  mechProducerPoints = structureProducerPoints = 0;
  obelyskProducerPoints = vespyrProducerPoints = 0;
  wallProducerPoints = warmasterProducerPoints = 0;
  wraithlingProducerPoints = airdropProducerPoints = 0;
  celerityProducerPoints = dyingWishProducerPoints = 0;
  flyingProducerPoints = forcefieldProducerPoints = 0;
  frenzyProducerPoints = openingGambitProducerPoints = 0;
  provokeProducerPoints = rangedProducerPoints = 0;
  rushProducerPoints = stunProducerPoints = 0;
  backstabProducerPoints = blastProducerPoints = 0;
  deathwatchProducerPoints = growProducerPoints = 0;
  infiltrateProducerPoints = rebirthProducerPoints = 0;
  zealProducerPoints = playerGeneralDamageProducerPoints = 0;
  playerMinionDamageProducerPoints = enemyGeneralDamageProducerPoints = 0;
  enemyMinionDamageProducerPoints = generalAttackProducerPoints = 0;
  spellProducerPoints = spellDamageProducerPoints = 0;
  twoAttackProducerPoints = minionProducerPoints = 0;
  artifactProducerPoints = cardDrawProducerPoints = 0;
  enemyCardDrawProducerPoints = buffProducerPoints = 0;
  debuffPoints = healProducerPoints = positioningProducerPoints = 0;
  generalPositioningProducerPoints = transformProducerPoints = 0;
  replaceProducerPoints = scionProducerPoints = mirrorMeldProducerPoints = 0;
  divineBondProducerPoints = innerFocusProducerPoints = 0;
  shadowCreepProducerPoints = darkfireProducerPoints = 0;
  flashProducerPoints = bloodSurgeProducerPoints = 0;
  arcanystConsumerPoints = battlepetConsumerPoints = 0;
  dervishConsumerPoints = golemConsumerPoints = mechConsumerPoints = 0;
  structureConsumerPoints = obelyskConsumerPoints = vespyrConsumerPoints = 0;
  wallConsumerPoints = warmasterConsumerPoints = wraithlingConsumerPoints = 0;
  airdropConsumerPoints = celerityConsumerPoints = dyingWishConsumerPoints = 0;
  flyingConsumerPoints = forcefieldConsumerPoints = frenzyConsumerPoints = 0;
  openingGambitConsumerPoints = provokeConsumerPoints = rangedConsumerPoints = 0;
  rushConsumerPoints = stunConsumerPoints = backstabConsumerPoints = 0;
  blastConsumerPoints = deathwatchConsumerPoints = growConsumerPoints = 0;
  infiltrateConsumerPoints = rebirthConsumerPoints = zealConsumerPoints = 0;
  playerGeneralDamageConsumerPoints = playerMinionDamageConsumerPoints = 0;
  enemyGeneralDamageConsumerPoints = enemyMinionDamageConsumerPoints = 0;
  generalAttackConsumerPoints = spellConsumerPoints = spellDamageConsumerPoints = 0;
  twoAttackConsumerPoints = minionConsumerPoints = artifactConsumerPoints = 0;
  cardDrawConsumerPoints = enemyCardDrawConsumerPoints = buffConsumerPoints = 0;
  debuffPoints = healConsumerPoints = positioningConsumerPoints = 0;
  generalPositioningConsumerPoints = transformConsumerPoints = 0;
  replaceConsumerPoints = scionConsumerPoints = mirrorMeldConsumerPoints = 0;
  divineBondConsumerPoints = innerFocusConsumerPoints = 0;
  shadowCreepConsumerPoints = darkfireConsumerPoints = 0;
  flashConsumerPoints = bloodSurgeConsumerPoints = 0;
	cardCount = 0;
	cardFound1 = false;
	cardFound2 = false;
	cardFound3 = false;
	cardName1 = "";
	cardName2 = "";
	cardName3 = "";

	dropdowninput1.value = "";
  	dropdowninput2.value = "";
  	dropdowninput3.value = "";
	var i;
    for(i = dropdownlist.options.length - 1 ; i >= 0 ; i--){
        dropdownlist.removeChild(dropdownlist.childNodes[i]);
    }
    //alert(dropdownlist.options.length);
    i = carddatalist.length;
	for(i = 0; i < carddatalist.length; i++){
		if(carddatalist[i].factionName == factionName ||
			carddatalist[i].factionName == "Neutral"){
			if(carddatalist[i].id != 20130 && matchCard(carddatalist[i].name) &&
				!matchDuplicates(carddatalist[i].name)){
				// Create a new <option> element.
	        	var option = document.createElement('option');
		        // Set the value using the item in the JSON array.
		        option.value = carddatalist[i].name;
		        // Add the <option> element to the <datalist>.
		        dropdownlist.appendChild(option);
			}
		}
	}
	displayFactionImages(factionName);
  displayFactionImages2(currentFaction);
	document.getElementById("bestGeneral").style.display = "inline";
	document.getElementById("buildADeck").style.display = "inline";
	document.getElementById("selectFaction").style.display = "none";
	document.getElementById("cardSelect1").style.display = "none";
	document.getElementById("cardSelect2").style.display = "none";
	document.getElementById("cardSelect3").style.display = "none";
	document.getElementById("deckCount").innerHTML = String(cardCount)+"/30 cards";
	
	dropdowninput1.placeholder = "Select a card.";
	dropdowninput2.placeholder = "Select a card.";
	dropdowninput3.placeholder = "Select a card.";
    //Debugging datalist length
    //dropdowninput1.placeholder = String(dropdownlist.options.length) + " elements...";
    //dropdowninput2.placeholder = String(dropdownlist.options.length) + " elements...";
    //dropdowninput3.placeholder = String(dropdownlist.options.length) + " elements...";
}

function matchCard(name){
	for(var i = 0; i < cardratinglist.length; i++){
		if(cardratinglist[i].name == name){
			return true;
		}
	}
	return false;
}

function matchDuplicates(name){
	for(var i = 0; i < dropdownlist.options.length; i++){
		if(dropdownlist.options[i].value == name){
			return true;
		}
	}
	return false;
}

function resetCalculator(){
	decklist = [];
	generalpoints1 = 0;
	generalpoints2 = 0;
	console.log("Reset");
	decklistPrintable = "";
	document.getElementById("bestGeneralScoreA").innerHTML = String(generalpoints1);
	document.getElementById("bestGeneralScoreB").innerHTML = String(generalpoints2);
	document.getElementById("decklist").innerHTML = decklistPrintable;
	document.getElementById("bestGeneral").style.display = "none";
  document.getElementById("bottomSectionCopy").style.display = "none";
	document.getElementById("loader").style.display = "none";
	document.getElementById("buildADeck").style.display = "none";
	document.getElementById("selectFaction").style.display = "inline";
}

//Displays the score of a selected card when clicked on
function calculateCard(id){
	var selectedList = document.getElementById("cardlist"+String(id+1));
	var generalDisplay1 = document.getElementById("cardlistscore"+String(id+1)+"a");
	var generalDisplay2 = document.getElementById("cardlistscore"+String(id+1)+"b");
	var selectedCard = selectedList.value;
	var flag = false;

	var cardScoreA = 0;
	var cardScoreB = 0;

	for(var i = 0; i < cardratinglist.length; i++){
		if(cardratinglist[i].name == selectedCard){
			flag = true;
			cardScoreA = calculateBaseScore(cardratinglist[i], 0);
			cardScoreB = calculateBaseScore(cardratinglist[i], 1);
			break;
		}
	}
	//If the card has been found on input, then a cardFound flag will be
	//set to true
	if(flag){
		for(var i = 0; i < carddatalist.length; i++){
			if(carddatalist[i].name == selectedCard){
				var extraPoints = manaCurveRating(carddatalist[i]);
				cardScoreA += extraPoints;
				cardScoreB += extraPoints;
				break;
			}
		}
		generalDisplay1.innerHTML = String(cardScoreA);
		generalDisplay2.innerHTML = String(cardScoreB);
		switch(id){
			case 1:
				cardscore2a = cardScoreA;
				cardscore2b = cardScoreB;
				cardFound2 = true;
				cardName2 = selectedCard;
				break;
			case 2:
				cardscore3a = cardScoreA;
				cardscore3b = cardScoreB;
				cardFound3 = true;
				cardName3 = selectedCard;
				break;
			default:
				cardscore1a = cardScoreA;
				cardscore1b = cardScoreB;
				cardFound1 = true;
				cardName1 = selectedCard;
				break;
		}
		checkProgress();
	}
}

function checkProgress(){
	if(cardFound1 && cardFound2 && cardFound3){
		document.getElementById("cardSelect1").style.display = "inline";
		document.getElementById("cardSelect2").style.display = "inline";
		document.getElementById("cardSelect3").style.display = "inline";
	}
}

//Returns the base score of a card, depending on card count and current synergy points
//Of existing cards in your deck
function calculateBaseScore(synergyData, generalId){
	var basePoints = synergyData.baseRating
    + arcanystConsumerPoints * synergyData.arcanystConsumerReceive
    + battlepetConsumerPoints * synergyData.battlepetConsumerReceive
    + dervishConsumerPoints * synergyData.dervishConsumerReceive
    + golemConsumerPoints * synergyData.golemConsumerReceive
    + mechConsumerPoints * synergyData.mechConsumerReceive
    + obelyskConsumerPoints * synergyData.obelyskConsumerReceive
    + structureConsumerPoints * synergyData.structureConsumerReceive
    + vespyrConsumerPoints * synergyData.vespyrConsumerReceive
    + wallConsumerPoints * synergyData.wallConsumerReceive
    + warmasterConsumerPoints * synergyData.warmasterConsumerReceive
    + wraithlingConsumerPoints * synergyData.wraithlingConsumerReceive
    + airdropConsumerPoints * synergyData.airdropConsumerReceive
    + celerityConsumerPoints * synergyData.celerityConsumerReceive
    + dyingWishConsumerPoints * synergyData.dyingWishConsumerReceive
    + flyingConsumerPoints * synergyData.flyingConsumerReceive
    + forcefieldConsumerPoints * synergyData.forcefieldConsumerReceive
    + frenzyConsumerPoints * synergyData.frenzyConsumerReceive
    + openingGambitConsumerPoints * synergyData.openingGambitConsumerReceive
    + provokeConsumerPoints * synergyData.provokeConsumerReceive
    + rangedConsumerPoints * synergyData.rangedConsumerReceive
    + rushConsumerPoints * synergyData.rushConsumerReceive
    + stunConsumerPoints * synergyData.stunConsumerReceive
    + backstabConsumerPoints * synergyData.backstabConsumerReceive
    + blastConsumerPoints * synergyData.blastConsumerReceive
    + deathwatchConsumerPoints * synergyData.deathwatchConsumerReceive
    + growConsumerPoints * synergyData.growConsumerReceive
    + infiltrateConsumerPoints * synergyData.infiltrateConsumerReceive
    + rebirthConsumerPoints * synergyData.rebirthConsumerReceive
    + zealConsumerPoints * synergyData.zealConsumerReceive
    + playerGeneralDamageConsumerPoints * synergyData.playerGeneralDamageConsumerReceive
    + playerMinionDamageConsumerPoints * synergyData.playerMinionDamageConsumerReceive
    + enemyGeneralDamageConsumerPoints * synergyData.enemyGeneralDamageConsumerReceive
    + enemyMinionDamageConsumerPoints * synergyData.enemyMinionDamageConsumerReceive
    + generalAttackConsumerPoints * synergyData.generalAttackConsumerReceive
    + spellConsumerPoints * synergyData.spellConsumerReceive
    + spellDamageConsumerPoints * synergyData.spellDamageConsumerReceive
    + twoAttackConsumerPoints * synergyData.twoAttackConsumerReceive
    + minionConsumerPoints * synergyData.minionConsumerReceive
    + artifactConsumerPoints * synergyData.artifactConsumerReceive
    + cardDrawConsumerPoints * synergyData.cardDrawConsumerReceive
    + enemyCardDrawConsumerPoints * synergyData.enemyCardDrawConsumerReceive
    + buffConsumerPoints * synergyData.buffConsumerReceive
    + debuffConsumerPoints * synergyData.debuffConsumerReceive
    + healConsumerPoints * synergyData.healConsumerReceive
    + positioningConsumerPoints * synergyData.positioningConsumerReceive
    + generalPositioningConsumerPoints * synergyData.generalPositioningConsumerReceive
    + transformConsumerPoints * synergyData.transformConsumerReceive
    + replaceConsumerPoints * synergyData.replaceConsumerReceive
    + scionConsumerPoints * synergyData.scionConsumerReceive
    + mirrorMeldConsumerPoints * synergyData.mirrorMeldConsumerReceive
    + divineBondConsumerPoints * synergyData.divineBondConsumerReceive
    + innerFocusConsumerPoints * synergyData.innerFocusConsumerReceive
    + shadowCreepConsumerPoints * synergyData.shadowCreepConsumerReceive
    + arcanystProducerPoints * synergyData.arcanystProducerReceive
    + battlepetProducerPoints * synergyData.battlepetProducerReceive
    + dervishProducerPoints * synergyData.dervishProducerReceive
    + golemProducerPoints * synergyData.golemProducerReceive
		+ mechProducerPoints * synergyData.mechProducerReceive
		+ obelyskProducerPoints * synergyData.obelyskProducerReceive
    + structureProducerPoints * synergyData.structureProducerReceive
		+ vespyrProducerPoints * synergyData.vespyrProducerReceive
		+ wallProducerPoints * synergyData.wallProducerReceive
		+ warmasterProducerPoints * synergyData.warmasterProducerReceive
		+ wraithlingProducerPoints * synergyData.wraithlingProducerReceive
		+ airdropProducerPoints * synergyData.airdropProducerReceive
		+ celerityProducerPoints * synergyData.celerityProducerReceive
		+ dyingWishProducerPoints * synergyData.dyingWishProducerReceive
		+ flyingProducerPoints * synergyData.flyingProducerReceive
		+ forcefieldProducerPoints * synergyData.forcefieldProducerReceive
		+ frenzyProducerPoints * synergyData.frenzyProducerReceive
		+ openingGambitProducerPoints * synergyData.openingGambitProducerReceive
		+ provokeProducerPoints * synergyData.provokeProducerReceive
		+ rangedProducerPoints * synergyData.rangedProducerReceive
		+ rushProducerPoints * synergyData.rushProducerReceive
    + stunProducerPoints * synergyData.stunProducerReceive
		+ backstabProducerPoints * synergyData.backstabProducerReceive
		+ blastProducerPoints * synergyData.blastProducerReceive
		+ deathwatchProducerPoints * synergyData.deathwatchProducerReceive
		+ growProducerPoints * synergyData.growProducerReceive
		+ infiltrateProducerPoints * synergyData.infiltrateProducerReceive
		+ rebirthProducerPoints * synergyData.rebirthProducerReceive
		+ zealProducerPoints * synergyData.zealProducerReceive
		+ playerGeneralDamageProducerPoints * synergyData.playerGeneralDamageProducerReceive
		+ playerMinionDamageProducerPoints * synergyData.playerMinionDamageProducerReceive
		+ enemyGeneralDamageProducerPoints * synergyData.enemyGeneralDamageProducerReceive
		+ enemyMinionDamageProducerPoints * synergyData.enemyMinionDamageProducerReceive
		+ generalAttackProducerPoints * synergyData.generalAttackProducerReceive
		+ spellProducerPoints * synergyData.spellProducerReceive
		+ spellDamageProducerPoints * synergyData.spellDamageProducerReceive
		+ twoAttackProducerPoints * synergyData.twoAttackProducerReceive
		+ minionProducerPoints * synergyData.minionProducerReceive
		+ artifactProducerPoints * synergyData.artifactProducerReceive
		+ cardDrawProducerPoints * synergyData.cardDrawProducerReceive
		+ enemyCardDrawProducerPoints * synergyData.enemyCardDrawProducerReceive
		+ buffProducerPoints * synergyData.buffProducerReceive
		+ debuffProducerPoints * synergyData.debuffProducerReceive
		+ healProducerPoints * synergyData.healProducerReceive
		+ positioningProducerPoints * synergyData.positioningProducerReceive
		+ generalPositioningProducerPoints * synergyData.generalPositioningProducerReceive
    + transformProducerPoints * synergyData.transformProducerReceive
		+ replaceProducerPoints * synergyData.replaceProducerReceive
    + scionProducerPoints * synergyData.scionProducerReceive
		+ mirrorMeldProducerPoints * synergyData.mirrorMeldProducerReceive
		+ divineBondProducerPoints * synergyData.divineBondProducerReceive
		+ innerFocusProducerPoints * synergyData.innerFocusProducerReceive
		+ shadowCreepProducerPoints * synergyData.shadowCreepProducerReceive
		- synergyData.synergyDecay * cardCount;
	var generalPoints = 0;
	switch(currentFaction){
		case "Lyonar Kingdoms":
			generalPoints = generalId == 0 ?
				synergyData.argeonHighmaneBonus: synergyData.ziranSunforgeBonus;
			break;
		case "Songhai Empire":
			generalPoints = generalId == 0 ?
				synergyData.kaleosXaanBonus: synergyData.revaEventideBonus;
			break;
		case "Vetruvian Imperium":
			generalPoints = generalId == 0 ?
				synergyData.zirixStarstriderBonus: synergyData.scionessSajjBonus;
			break;
		case "Abyssian Host":
			generalPoints = generalId == 0 ?
				synergyData.lilitheBlightchaserBonus: synergyData.cassyvaSoulreaperBonus;
			break;
		case "Magmar Aspects":
			generalPoints = generalId == 0 ?
				synergyData.vaathTheImmortalBonus: synergyData.starhornTheSeekerBonus;
			break;
		case "Vanar Kindred":
			generalPoints = generalId == 0 ?
				synergyData.faieBloodwingBonus: synergyData.karaWinterbladeBonus;
			break;
	}
	return basePoints + generalPoints;
}

//Calculates the current deck curve and determines the bonus
//points given to a selected card
function manaCurveRating(thisCardData){
	if(thisCardData.type == "Minion" || thisCardData.name == "Wraithling Swarm" || thisCardData.name == "Blazing Spines" || thisCardData.name == "Bonechill Barrier" || thisCardData.name == "Gravity Well" || thisCardData.name == "Mind Steal" || thisCardData.name == "Valknu's Seal" || thisCardData.name == "Sky Phalanx" || thisCardData.name == "Nature's Confluence"){
		var highest = twoDropCount;
		var bonus = 0;
		if(threeDropCount > highest) highest = threeDropCount;
		if(fourDropCount > highest) highest = fourDropCount;
		if(thisCardData.cost <= 2){
			if(twoDropCount > 6){
				bonus = twoDropCount - 6;
				bonus *= -5;
			}else{
				bonus = highest - twoDropCount;
				bonus *= 5;
			}
		}else if(thisCardData.cost == 3){
			if(threeDropCount > 6){
				bonus = threeDropCount - 6;
				bonus *= -5;
			}else{
				bonus = highest - threeDropCount;
				bonus *= 5;
			}
		}else if(thisCardData.cost == 4){
			if(fourDropCount > 6){
				bonus = fourDropCount - 6;
				bonus *= -5;
			}else{
				bonus = highest - fourDropCount;
				bonus *= 5;
			}
		}else if(thisCardData.cost == 5){
			if(fiveDropCount > 3){
				bonus = fiveDropCount - 3;
				bonus *= -10;
			}
		}else{
			if(lateDropCount > 3){
				bonus = lateDropCount - 3;
				bonus *= -10;
			}
		}
		return bonus;
	}else{
		supportPenalty = supportCount - 6;
		if(supportPenalty < 0) supportPenalty = 0;
		supportPenalty *= -5;
		return supportPenalty;
	}
}

function selectCard(id){
	if(!cardFound1 || !cardFound2 || !cardFound3)
		return;
	var selectedCard;
	switch(id){
		case 1:
			generalpoints1 += cardscore2a;
			generalpoints2 += cardscore2b;
			selectedCard = cardName2;
			break;
		case 2:
			generalpoints1 += cardscore3a;
			generalpoints2 += cardscore3b;
			selectedCard = cardName3;
			break;
		default:
			generalpoints1 += cardscore1a;
			generalpoints2 += cardscore1b;
			selectedCard = cardName1;
			break;
	}
	var i;
	for(i = 0; i < cardratinglist.length; i++){
		if(cardratinglist[i].name == selectedCard){
			addSynergyPoints(cardratinglist[i]);
			break;
		}
	}
	for(var i = 0; i < carddatalist.length; i++){
		if(carddatalist[i].name == selectedCard){
			addCurvePoints(carddatalist[i]);
			break;
		}
	}
	cardscore1a = 0;
	cardscore1b = 0;
	cardscore2a = 0;
	cardscore2b = 0;
	cardscore3a = 0;
	cardscore3b = 0;
	cardFound1 = false;
	cardFound2 = false;
	cardFound3 = false;
	cardName1 = "";
	cardName2 = "";
	cardName3 = "";
	document.getElementById("cardSelect1").style.display = "none";
	document.getElementById("cardSelect2").style.display = "none";
	document.getElementById("cardSelect3").style.display = "none";
	document.getElementById("cardlistscore1a").innerHTML = "0";
	document.getElementById("cardlistscore1b").innerHTML = "0";
	document.getElementById("cardlistscore2a").innerHTML = "0";
	document.getElementById("cardlistscore2b").innerHTML = "0";
	document.getElementById("cardlistscore3a").innerHTML = "0";
	document.getElementById("cardlistscore3b").innerHTML = "0";
	document.getElementById("cardlist1").value = "";
	document.getElementById("cardlist2").value = "";
	document.getElementById("cardlist3").value = "";
	decklist[cardCount-1] = selectedCard;
	console.log(decklist[cardCount-1]);
	var decklistPrintable ="";
	for (i = 0; i < decklist.length; i++) {
    decklistPrintable += "<li>" + decklist[i] + "</li>";
	}
	//document.getElementById("decklist").innerHTML = decklistPrintable;
	document.getElementById("bestGeneralScoreA2").innerHTML = decklistPrintable;
	console.log(decklistPrintable);
	document.getElementById("bestGeneralScoreA").innerHTML = String(generalpoints1);
	document.getElementById("bestGeneralScoreB").innerHTML = String(generalpoints2);
	document.getElementById("deckCount").innerHTML = String(cardCount)+"/30 cards";
	document.getElementById("deckCount2").innerHTML = String(cardCount)+"/30 cards";
	if(cardCount > 29){
		document.getElementById("buildADeck").style.display = "none";
    document.getElementById("bottomSectionCopy").style.display = "inline";
		//document.getElementById("bestGeneral").style.display = "inline";
	}
}

function addSynergyPoints(synergyData){
  arcanystProducerPoints += synergyData.arcanystProducerGive;
  battlepetProducerPoints += synergyData.battlepetProducerGive;
  dervishProducerPoints += synergyData.dervishProducerGive;
  golemProducerPoints += synergyData.golemProducerGive;
  mechProducerPoints += synergyData.mechProducerGive;
  obelyskProducerPoints += synergyData.obelyskProducerGive;
  structureProducerPoints += synergyData.structureProducerGive;
  vespyrProducerPoints += synergyData.vespyrProducerGive;
  wallProducerPoints += synergyData.wallProducerGive;
  warmasterProducerPoints += synergyData.warmasterProducerGive;
  wraithlingProducerPoints += synergyData.wraithlingProducerGive;
  airdropProducerPoints += synergyData.airdropProducerGive;
  celerityProducerPoints += synergyData.celerityProducerGive;
  dyingWishProducerPoints += synergyData.dyingWishProducerGive;
  flyingProducerPoints += synergyData.flyingProducerGive;
  forcefieldProducerPoints += synergyData.forcefieldProducerGive;
  frenzyProducerPoints += synergyData.frenzyProducerGive;
  openingGambitProducerPoints += synergyData.openingGambitProducerGive;
  provokeProducerPoints += synergyData.provokeProducerGive;
  rangedProducerPoints += synergyData.rangedProducerGive;
  rushProducerPoints += synergyData.rushProducerGive;
  stunProducerPoints += synergyData.stunProducerGive;
  backstabProducerPoints += synergyData.backstabProducerGive;
  blastProducerPoints += synergyData.blastProducerGive;
  deathwatchProducerPoints += synergyData.deathwatchProducerGive;
  growProducerPoints += synergyData.growProducerGive;
  infiltrateProducerPoints += synergyData.infiltrateProducerGive;
  rebirthProducerPoints += synergyData.rebirthProducerGive;
  zealProducerPoints += synergyData.zealProducerGive;
  playerGeneralDamageProducerPoints += synergyData.playerGeneralDamageProducerGive;
  playerMinionDamageProducerPoints += synergyData.playerMinionDamageProducerGive;
  enemyGeneralDamageProducerPoints += synergyData.enemyGeneralDamageProducerGive;
  enemyMinionDamageProducerPoints += synergyData.enemyMinionDamageProducerGive;
  generalAttackProducerPoints += synergyData.generalAttackProducerGive;
  spellProducerPoints += synergyData.spellProducerGive;
  spellDamageProducerPoints += synergyData.spellDamageProducerGive;
  twoAttackProducerPoints += synergyData.twoAttackProducerGive;
  minionProducerPoints += synergyData.minionProducerGive;
  artifactProducerPoints += synergyData.artifactProducerGive;
  cardDrawProducerPoints += synergyData.cardDrawProducerGive;
  enemyCardDrawProducerPoints += synergyData.enemyCardDrawProducerGive;
  buffProducerPoints += synergyData.buffProducerGive;
  debuffProducerPoints += synergyData.debuffProducerGive;
  healProducerPoints += synergyData.healProducerGive;
  positioningProducerPoints += synergyData.positioningProducerGive;
  generalPositioningProducerPoints += synergyData.generalPositioningProducerGive;
  transformProducerPoints += synergyData.transformProducerGive;
  replaceProducerPoints += synergyData.replaceProducerGive;
  scionProducerPoints += synergyData.scionProducerGive;
  mirrorMeldProducerPoints += synergyData.mirrorMeldProducerGive;
  divineBondProducerPoints += synergyData.divineBondProducerGive;
  innerFocusProducerPoints += synergyData.innerFocusProducerGive;
  arcanystConsumerPoints += synergyData.arcanystConsumerGive;
  battlepetConsumerPoints += synergyData.battlepetConsumerGive;
  dervishConsumerPoints += synergyData.dervishConsumerGive;
	golemConsumerPoints += synergyData.golemConsumerGive;
	mechConsumerPoints += synergyData.mechConsumerGive;
	obelyskConsumerPoints += synergyData.obelyskConsumerGive;
  structureConsumerPoints += synergyData.structureConsumerGive;
	vespyrConsumerPoints += synergyData.vespyrConsumerGive;
	wallConsumerPoints += synergyData.wallConsumerGive;
	warmasterConsumerPoints += synergyData.warmasterConsumerGive;
	wraithlingConsumerPoints += synergyData.wraithlingConsumerGive;
	airdropConsumerPoints += synergyData.airdropConsumerGive;
	celerityConsumerPoints += synergyData.celerityConsumerGive;
	dyingWishConsumerPoints += synergyData.dyingWishConsumerGive;
	flyingConsumerPoints += synergyData.flyingConsumerGive;
	forcefieldConsumerPoints += synergyData.forcefieldConsumerGive;
	frenzyConsumerPoints += synergyData.frenzyConsumerGive;
	openingGambitConsumerPoints += synergyData.openingGambitConsumerGive;
	provokeConsumerPoints += synergyData.provokeConsumerGive;
	rangedConsumerPoints += synergyData.rangedConsumerGive;
	rushConsumerPoints += synergyData.rushConsumerGive;
  stunConsumerPoints += synergyData.stunConsumerGive;
	backstabConsumerPoints += synergyData.backstabConsumerGive;
	blastConsumerPoints += synergyData.blastConsumerGive;
	deathwatchConsumerPoints += synergyData.deathwatchConsumerGive;
	growConsumerPoints += synergyData.growConsumerGive;
	infiltrateConsumerPoints += synergyData.infiltrateConsumerGive;
	rebirthConsumerPoints += synergyData.rebirthConsumerGive;
	zealConsumerPoints += synergyData.zealConsumerGive;
	playerGeneralDamageConsumerPoints += synergyData.playerGeneralDamageConsumerGive;
	playerMinionDamageConsumerPoints += synergyData.playerMinionDamageConsumerGive;
	enemyGeneralDamageConsumerPoints += synergyData.enemyGeneralDamageConsumerGive;
	enemyMinionDamageConsumerPoints += synergyData.enemyMinionDamageConsumerGive;
	generalAttackConsumerPoints += synergyData.generalAttackConsumerGive;
	spellConsumerPoints += synergyData.spellConsumerGive;
	spellDamageConsumerPoints += synergyData.spellDamageConsumerGive;
	twoAttackConsumerPoints += synergyData.twoAttackConsumerGive;
	minionConsumerPoints += synergyData.minionConsumerGive;
	artifactConsumerPoints += synergyData.artifactConsumerGive;
	cardDrawConsumerPoints += synergyData.cardDrawConsumerGive;
	enemyCardDrawConsumerPoints += synergyData.enemyCardDrawConsumerGive;
	buffConsumerPoints += synergyData.buffConsumerGive;
	debuffConsumerPoints += synergyData.debuffConsumerGive;
	healConsumerPoints += synergyData.healConsumerGive;
	positioningConsumerPoints += synergyData.positioningConsumerGive;
	generalPositioningConsumerPoints += synergyData.generalPositioningConsumerGive;
  transformConsumerPoints += synergyData.transformConsumerGive;
	replaceConsumerPoints += synergyData.replaceConsumerGive;
  scionConsumerPoints += synergyData.scionConsumerGive;
	mirrorMeldConsumerPoints += synergyData.mirrorMeldConsumerGive;
	divineBondConsumerPoints += synergyData.divineBondConsumerGive;
	innerFocusConsumerPoints += synergyData.innerFocusConsumerGive;
	cardCount++;
}

function addCurvePoints(thisCardData){
	if(thisCardData.type == "Minion" || thisCardData.name == "Wraithling Swarm" || thisCardData.name == "Blazing Spines" || thisCardData.name == "Bonechill Barrier" || thisCardData.name == "Gravity Well" || thisCardData.name == "Mind Steal" || thisCardData.name == "Valknu's Seal" || thisCardData.name == "Sky Phalanx" || thisCardData.name == "Nature's Confluence"){
		if(thisCardData.cost <= 2){
			twoDropCount++;
		}else if(thisCardData.cost == 3){
			threeDropCount++;
		}else if(thisCardData.cost == 4){
			fourDropCount++;
		}else if(thisCardData.cost == 5){
			fiveDropCount++;
		}else{
			lateDropCount++;
		}
	}else{
		supportCount++;
	}
}

//This function has huge lines of coding just to display images of the select
//faction's generals
function displayFactionImages(factionName){
	switch(factionName){
		case "Lyonar Kingdoms":
			document.getElementById("generalimg1a").src = "images/Lyonar Argeon Highmane.png";
			document.getElementById("generalimg2a").src = "images/Lyonar Argeon Highmane.png";
			document.getElementById("generalimg3a").src = "images/Lyonar Argeon Highmane.png";
			document.getElementById("generalimg1b").src = "images/Lyonar Ziran Sunforge.png";
			document.getElementById("generalimg2b").src = "images/Lyonar Ziran Sunforge.png";
			document.getElementById("generalimg3b").src = "images/Lyonar Ziran Sunforge.png";
			break;
		case "Songhai Empire":
			document.getElementById("generalimg1a").src = "images/Songhai Kaleos Xaan.png";
			document.getElementById("generalimg2a").src = "images/Songhai Kaleos Xaan.png";
			document.getElementById("generalimg3a").src = "images/Songhai Kaleos Xaan.png";
			document.getElementById("generalimg1b").src = "images/Songhai Reva Eventide.png";
			document.getElementById("generalimg2b").src = "images/Songhai Reva Eventide.png";
			document.getElementById("generalimg3b").src = "images/Songhai Reva Eventide.png";
			break;
		case "Vetruvian Imperium":
			document.getElementById("generalimg1a").src = "images/Vetruvian Zirix Starstrider.png";
			document.getElementById("generalimg2a").src = "images/Vetruvian Zirix Starstrider.png";
			document.getElementById("generalimg3a").src = "images/Vetruvian Zirix Starstrider.png";
			document.getElementById("generalimg1b").src = "images/Vetruvian Scioness Sajj.png";
			document.getElementById("generalimg2b").src = "images/Vetruvian Scioness Sajj.png";
			document.getElementById("generalimg3b").src = "images/Vetruvian Scioness Sajj.png";
			break;
		case "Abyssian Host":
			document.getElementById("generalimg1a").src = "images/Abyssian Lilithe Blightchaser.png";
			document.getElementById("generalimg2a").src = "images/Abyssian Lilithe Blightchaser.png";
			document.getElementById("generalimg3a").src = "images/Abyssian Lilithe Blightchaser.png";
			document.getElementById("generalimg1b").src = "images/Abyssian Cassyva Soulreaper.png";
			document.getElementById("generalimg2b").src = "images/Abyssian Cassyva Soulreaper.png";
			document.getElementById("generalimg3b").src = "images/Abyssian Cassyva Soulreaper.png";
			break;
		case "Magmar Aspects":
			document.getElementById("generalimg1a").src = "images/Magmar Vaath the Immortal.png";
			document.getElementById("generalimg2a").src = "images/Magmar Vaath the Immortal.png";
			document.getElementById("generalimg3a").src = "images/Magmar Vaath the Immortal.png";
			document.getElementById("generalimg1b").src = "images/Magmar Starhorn the Seeker.png";
			document.getElementById("generalimg2b").src = "images/Magmar Starhorn the Seeker.png";
			document.getElementById("generalimg3b").src = "images/Magmar Starhorn the Seeker.png";
			break;
		case "Vanar Kindred":
			document.getElementById("generalimg1a").src = "images/Vanar Faie Bloodwing.png";
			document.getElementById("generalimg2a").src = "images/Vanar Faie Bloodwing.png";
			document.getElementById("generalimg3a").src = "images/Vanar Faie Bloodwing.png";
			document.getElementById("generalimg1b").src = "images/Vanar Kara Winterblade.png";
			document.getElementById("generalimg2b").src = "images/Vanar Kara Winterblade.png";
			document.getElementById("generalimg3b").src = "images/Vanar Kara Winterblade.png";
			break;
	}
}

function displayFactionImages2(factionName){
	switch(factionName){
		case "Lyonar Kingdoms":
			document.getElementById("bestGeneralImgA").src = "images/Lyonar Argeon Highmane.png";
			document.getElementById("bestGeneralImgB").src = "images/Lyonar Ziran Sunforge.png";
			break;
		case "Songhai Empire":
			document.getElementById("bestGeneralImgA").src = "images/Songhai Kaleos Xaan.png";
			document.getElementById("bestGeneralImgB").src = "images/Songhai Reva Eventide.png";
			break;
		case "Vetruvian Imperium":
			document.getElementById("bestGeneralImgA").src = "images/Vetruvian Zirix Starstrider.png";
			document.getElementById("bestGeneralImgB").src = "images/Vetruvian Scioness Sajj.png";
			break;
		case "Abyssian Host":
			document.getElementById("bestGeneralImgA").src = "images/Abyssian Lilithe Blightchaser.png";
			document.getElementById("bestGeneralImgB").src = "images/Abyssian Cassyva Soulreaper.png";
			break;
		case "Magmar Aspects":
			document.getElementById("bestGeneralImgA").src = "images/Magmar Vaath the Immortal.png";
			document.getElementById("bestGeneralImgB").src = "images/Magmar Starhorn the Seeker.png";
			break;
		case "Vanar Kindred":
			document.getElementById("bestGeneralImgA").src = "images/Vanar Faie Bloodwing.png";
			document.getElementById("bestGeneralImgB").src = "images/Vanar Kara Winterblade.png";
			break;
	}
}
