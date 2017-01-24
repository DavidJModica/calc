package
{
	import flash.display.Sprite;
	import flash.display.Shape;
	import flash.events.Event;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.text.TextFormatAlign;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	
	/**
	 * ...
	 * @author SSDRWH0
	 */
	 
	public class Main extends Sprite 
	{
		[Embed(source="../cardData.json", mimeType="application/octet-stream")]
		private static const CardData:Class;
		[Embed(source="../cardRatingData.json", mimeType="application/octet-stream")]
		private static const CardRatingData:Class;
	
		private static var ratingData:Object;
		private static var data:Object;
		
		private var faction:uint;
		private var twoDropCount:uint;
		private var threeDropCount:uint;
		private var fourDropCount:uint;
		private var fiveDropCount:uint;
		private var lateGameDropCount:uint;
		private var cardPoints:Vector.<int>;
		
		private var resultsDropbox:ResultsDropbox;
		private var resetButton:ResetButton;
		private var dropdownBoxes:Vector.<DropdownBox>;
		private var selectButtons:Vector.<SelectButton>;
		private var cardPointsText:Vector.<TextField>;
		private var factionOptions:Vector.<Function>;
		private var dropboxClicks:Vector.<Function>;
		private var dropboxDrags:Vector.<Function>;
		private var dropboxSelect1:Vector.<Function>;
		private var dropboxSelect2:Vector.<Function>;
		private var dropboxSelect3:Vector.<Function>;
		private var selectOptions:Vector.<Function>;
		private var existingCards:Vector.<Textblock>;
		private var listOfAvailableCards:Vector.<Object>;
		
		private var lyonarLogo:LyonarLogo;
		private var songhaiLogo:SonghaiLogo;
		private var vetruvianLogo:VetruvianLogo;
		private var abyssianLogo:AbyssianLogo;
		private var magmarLogo:MagmarLogo;
		private var vanarLogo:VanarLogo;
		
		private var titleText:TextField;
		
		// finds a card stats by name
		private static function findRating(name:String):Object
		{
			for each (var o:Object in ratingData)
				if (o.name == name)
					return o;
			return null;
		}
		
		// finds a card details by name
		private static function findCard(name:String):Object
		{
			for each (var o:Object in data["cardData"])
				if (o.name == name)
					return o;
			return null;
		}
		
		// finds a card details by name
		private static function getAvailableCards(name:String):Vector.<Object>
		{
			var list:Vector.<Object> = new Vector.<Object>();
			for each (var o:Object in data["cardData"]){
				if (o.factionName == name || o.factionName == "Neutral") {
					list.push(o);
				}
			}
			return list;
		}
		
		public function Main() 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
			var i:int;
			
			ratingData = JSON.parse(new CardRatingData());
			data = JSON.parse(new CardData());
			
			cardPoints = new Vector.<int>(3);
			factionOptions = new Vector.<Function>();
			for (i = 0; i < 6; i++) {
				newFactionFunction(i+1);
			}
			dropboxClicks = new Vector.<Function>();
			selectOptions = new Vector.<Function>();
			for (i = 0; i < 3; i++) {
				newDropboxFunction(i);
			}
			
			resetButton = new ResetButton();
			resetButton.x = 25;
			resetButton.y = 430;
			resetButton.addEventListener(MouseEvent.CLICK, reset);
			addChild(resetButton);
			
			resultsDropbox = new ResultsDropbox();
			resultsDropbox.x = 584;
			resultsDropbox.y = 45;
			
			var dropdownMask:Shape;
			//sets up a masking object for each dropdown box
			dropdownMask = new Shape();
			dropdownMask.graphics.beginFill(0xFFFFFF, 1);
			dropdownMask.graphics.drawRect(resultsDropbox.x, resultsDropbox.y, resultsDropbox.width, resultsDropbox.height);
			dropdownMask.graphics.endFill();
			resultsDropbox.mask = dropdownMask;
			
			addChild(resultsDropbox);
			
			lyonarLogo = new LyonarLogo();
			lyonarLogo.x = 87.5;
			lyonarLogo.y = 65;
			lyonarLogo.addEventListener(MouseEvent.CLICK, factionOptions[0]);
			addChild(lyonarLogo);	
			songhaiLogo = new SonghaiLogo();
			songhaiLogo.x = 325;
			songhaiLogo.y = 65;
			songhaiLogo.addEventListener(MouseEvent.CLICK, factionOptions[1]);
			addChild(songhaiLogo);
			vetruvianLogo = new VetruvianLogo();
			vetruvianLogo.x = 562.5
			vetruvianLogo.y = 65;
			vetruvianLogo.addEventListener(MouseEvent.CLICK, factionOptions[2]);
			addChild(vetruvianLogo);
			abyssianLogo = new AbyssianLogo();
			abyssianLogo.x = 87.5;
			abyssianLogo.y = 245;
			abyssianLogo.addEventListener(MouseEvent.CLICK, factionOptions[3]);
			addChild(abyssianLogo);
			magmarLogo = new MagmarLogo();
			magmarLogo.x = 325;
			magmarLogo.y = 245;
			magmarLogo.addEventListener(MouseEvent.CLICK, factionOptions[4]);
			addChild(magmarLogo);
			vanarLogo = new VanarLogo();
			vanarLogo.x = 562.5
			vanarLogo.y = 245;
			vanarLogo.addEventListener(MouseEvent.CLICK, factionOptions[5]);
			addChild(vanarLogo);
			
			var text:TextField;
			var dropdownBox:DropdownBox;
			var selectButton:SelectButton;
			
			cardPointsText = new Vector.<TextField>();
			dropdownBoxes = new Vector.<DropdownBox>();
			selectButtons = new Vector.<SelectButton>();
			
			for (i = 0; i < 3; i++) {
				selectButton = new SelectButton();
				selectButton.x = 450;
				selectButton.y = 295 - i * 125;
				addChild(selectButton);
				selectButtons.push(selectButton);
				
				text = new TextField();
				text.defaultTextFormat = new TextFormat("_typewriter", 18, 0x000000);
				text.x = 401.95;
				text.y = 295 - i * 125;
				text.width = 36.6;
				text.height = 24.40;
				text.mouseEnabled = false;
				cardPointsText.push(text);
				addChild(text);
				
				dropdownBox = new DropdownBox();
				dropdownBox.x = 25;
				dropdownBox.y = 295 - i * 125;
			
				//sets up a masking object for each dropdown box
				dropdownMask = new Shape();
				dropdownMask.graphics.beginFill(0xFFFFFF, 1);
				dropdownMask.graphics.drawRect(dropdownBox.x, dropdownBox.y, dropdownBox.width, dropdownBox.height);
				dropdownMask.graphics.endFill();
				dropdownBox.mask = dropdownMask;
				dropdownBox.dropdownArrow.addEventListener(MouseEvent.CLICK, dropboxClicks[i]);
				
				addChild(dropdownBox);
				dropdownBoxes.push(dropdownBox);
			}
			
			titleText = new TextField();
			titleText.defaultTextFormat = new TextFormat("_typewriter", 18, 0x000000, null, null, null, null, null, TextFormatAlign.CENTER);
			titleText.x = 310;
			titleText.y = 10;
			titleText.width = 180;
			titleText.height = 24.40;
			titleText.mouseEnabled = false;
			addChild(titleText);
			
			reset(null);
		}
		
		public function reset(e:MouseEvent):void {
			titleText.text = "Select a faction";
			
			faction = twoDropCount = threeDropCount = fourDropCount = 0;
			fiveDropCount = lateGameDropCount = 0;
			
			if (listOfAvailableCards != null) {
				while (listOfAvailableCards.length > 0) {
					listOfAvailableCards.pop();
				}
				listOfAvailableCards = null;
			}
			
			for (var i:int = 0; i < 3; i++) {
				dropdownBoxes[i].visible = false;
				dropdownBoxes[i].dropdownFill.visible = false;
				cardPointsText[i].visible = false;
				selectButtons[i].visible = false;
				//cardPointsText[i].text = "999";
			}
			
			resultsDropbox.visible = false;
			lyonarLogo.visible = true;
			songhaiLogo.visible = true;
			vetruvianLogo.visible = true;
			abyssianLogo.visible = true;
			magmarLogo.visible = true;
			vanarLogo.visible = true;
		}
		
		private function newDropboxFunction(i:int):void {
			dropboxClicks.push(
				function (e:MouseEvent):void{
					toggleDropbox(i);
				}
			);
			selectOptions.push(
				function (e:MouseEvent):void{
					cardSelected(i);
				}
			);
		}
		
		private function newFactionFunction(i:int):void {
			factionOptions.push(
				function (e:MouseEvent):void{
					factionSelected(i);
				}
			);	
		}
		
		public function factionSelected(selectedFaction:uint):void {
			faction = selectedFaction;
			//trace(faction);
			titleText.text = "Choose a card";
			
			for (var i:int = 0; i < 3; i++) {
				dropdownBoxes[i].visible = true;
				//dropdownBoxes[i].dropdownFill.visible = false;
				cardPointsText[i].visible = true;
				selectButtons[i].visible = true;
				//cardPointsText[i].text = "999";
			}
			
			resultsDropbox.visible = true;
			lyonarLogo.visible = false;
			songhaiLogo.visible = false;
			vetruvianLogo.visible = false;
			abyssianLogo.visible = false;
			magmarLogo.visible = false;
			vanarLogo.visible = false;
			
			switch(faction){
				case 1: listOfAvailableCards = getAvailableCards("Lyonar Kingdoms"); break;
				case 2: listOfAvailableCards = getAvailableCards("Songhai Empire"); break;
				case 3: listOfAvailableCards = getAvailableCards("Vetruvian Imperium"); break;
				case 4: listOfAvailableCards = getAvailableCards("Abyssian Host"); break;
				case 5: listOfAvailableCards = getAvailableCards("Magmar Aspects"); break;
				case 6: listOfAvailableCards = getAvailableCards("Vanar Kindred"); break;
			}
		}
		
		public function toggleDropbox(i:int):void {
			dropdownBoxes[i].dropdownArrow.rotation = 180;
			//dropdownBoxes[i].dropdownArrow.rotation = 0;
		}
		
		public function cardSelected(i:int):void {
			
		}
	}
	
}