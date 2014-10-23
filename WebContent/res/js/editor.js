/**
 * 
 */

var adjustCursor = false;
var isFirefox = false;

var charMap = {
	97:"\u0D85",
	65: "\u0D82",
	98: "\u0DB6",
	66: "\u0DB7",
	99: "\u0DA0",
	67: "\u0DA1",
	100: "\u0DA9",
	68: "\u0DAA",
	101: "\u0D91",
	69: "\u0D83",
	102: "\u0DC6",
	70: "\u0D9E",
	103: "\u0D9C",
	71: "\u0D9D",
	104: "\u0DC4",
	72: "\u0DAC",
	105: "\u0D89",
	73: "\u0D8A",
	106: "\u0DA2",
	74: "\u0DA3",
	107: "\u0D9A",
	75: "\u0D9B",
	108: "\u0DBD",
	76: "\u0DC5",
	109: "\u0DB8",
	77: "\u0DB9",
	110: "\u0DB1",
	78: "\u0DAB",
	111: "\u0D94",
	79: "\u0D8D",
	112: "\u0DB4",
	80: "\u0DB5",
	113: "\u0DA4",
	81: "\u0DA5",
	114: "\u0DBB",
	82: "\u0DCA\u200D\u0DBB",
	115: "\u0DC3",
	83: "\u0DB3",
	116: "\u0DA7",
	84: "\u0DA8",
	117: "\u0D8B",
	85: "\u0D8E",
	118: "\u0DC0",
	86: "\u0D9F",
	119: "\u0DAF",
	87: "\u0DB0",
	120: "\u0DC1",
	88: "\u0DC2",
	121: "\u0DBA",
	89: "\u0DCA\u200D\u0DBA",
	122: "\u0DAD",
	90: "\u0DAE",
	92: "\u0DCF",
	124: "\u0DCA",
	96: "\u0DD2",
	126: "\u0DD3",
	64: "\u0DD9",
	94: "\u0DDA",
	95: "\u0DD8",
	91: "\u0DD4",
	123: "\u0DD6",
	93: "\u0DD0",
	125: "\u0DD1",
	60: "\u0DDC",
	62: "\u0DDD",
	1301: "\u0DCA\u200D\u0DBA",
	1302: "\u0DCA\u200D\u0DBB",
	1303: "\u0DBB\u0DCA\u200D\u200C",
	1304: "\u0D9A\u0DCA\u200D\u0DC2",
	1305: "\u0DA4",
	1306: "\u0DA5",
	1307: "\u0DCF",
	1308: "\u0DCA",
	1309: "\u0DD2",
	1310: "\u0DD3",
	1311: "\u0DD9",
	1312: "\u0DDA",
	1313: "\u0DD8",
	1314: "\u0DD4",
	1315: "\u0DD6",
	1316: "\u0DD0",
	1317: "\u0DD1",
	1318: "\u0DDC",
	1319: "\u0DDD",
	1320: "\u0DDB",
	1321: "\u0DDE",
	1322: "\u0DF2",
	1323: "\u0DDF",
	1324: "\u0DF3",
	1325: "\u0D82",
	1326: "\u0D83"
};



function handleKeyInput( event, elTextArea ) {
	
	var charCode = event.charCode; // not needed
	var keyCode = event.keyCode;
	var keyInput = charCode ? charCode : keyCode;
	//console.log("handleKeyInput - keyInput=" + keyInput );
	
	if( keyCode == 0 ) {
		isFirefox = true;
	}
	
	var metaKey = event.metaKey; // for mac command key
	var controlKey = event.ctrlKey;
	//console.log("handleKeyInput - metaKey=" + metaKey + ", controlKey=" + controlKey );
	
	if( keyInput == 32 || keyInput == 13 ) {
		updateAllWordsList( elTextArea );
		document.getElementById("suggestionsHolder").innerHTML = "";
		
	} else if( keyInput < 48 || controlKey || metaKey ) {
		return;
		
	} else {
		updateText( elTextArea, keyInput );
	}
}



function updateText( elTextArea, newCharCode ) {
	
	
	var newChar = charMap[ newCharCode ];
	//console.log("updateText - newCharCode=" + newCharCode );
	
	if( newChar ) {
		
		//console.log("updateText - newChar=" + newChar );
		var text = elTextArea.value;
		var lengthBfrAppend = text.length;
		var cursorPos = elTextArea.selectionStart;
		var selectionEnd = elTextArea.selectionEnd;
		
		if(adjustCursor) {
			cursorPos++;
		}
		adjustCursor = false;
		//console.log("updateText - cursorPos=" + cursorPos + ", selectionEnd=" + selectionEnd + ", lengthBfrAppend=" + lengthBfrAppend );
		
		var start = 0;
		var end = text.length;
		var head = text.substring( start, cursorPos );
		//console.log("updateText - head=" + head);
		
		var tail = text.substring( cursorPos, end );
		//console.log("updateText - tail=" + tail);
		
		text = head + newChar + tail;
		//console.log("updateText - text=" + text);
		
		var lengthAfterAppend = text.length;
		var cursorDisplacement = lengthAfterAppend - lengthBfrAppend - 1;
		  
		// for Chrome and Safari ( since they seems to auto advance the cursor position for these characters )
		if( newCharCode == 65 || newCharCode == 69 || newCharCode == 92 || newCharCode == 124 || 
			newCharCode == 96 || newCharCode == 126 || newCharCode == 64 || newCharCode == 94 || 
			newCharCode == 95 || newCharCode == 91 || newCharCode == 123 || newCharCode == 93 || 
			newCharCode == 125 || newCharCode == 60 || newCharCode == 62 ) {
			
			if(!isFirefox) {
				cursorDisplacement--;
				adjustCursor = true;
			}
		}
		//console.log("updateText - lengthAfterAppend=" + lengthAfterAppend + ", cursorDisplacement=" + cursorDisplacement );
		
		// update text area and cursor position
		elTextArea.value = text;
		
		if( elTextArea.setSelectionRange !== undefined ) {
			//elTextArea.setSelectionRange( cursorPos + cursorDisplacement, selectionEnd + cursorDisplacement );
		}
		elTextArea.selectionStart = cursorPos + cursorDisplacement;
		elTextArea.selectionEnd = selectionEnd + cursorDisplacement;
		//console.log("updateText - elTextArea.selectionStart=" + elTextArea.selectionStart + ", elTextArea.selectionEnd=" + elTextArea.selectionEnd );
		
		updateSuggestions( text, elTextArea.selectionEnd );
	}
	
}



function replaceChars( elTextArea ) {
	
	var text = elTextArea.value;
	var selectionStart = elTextArea.selectionStart;
	var selectionEnd = elTextArea.selectionEnd;
	//console.log("replaceChars - selectionStart=" + selectionStart + ", selectionEnd=" + selectionEnd );
	
	text = text.replace( /[A-Za-z]/g, "" );
	text = text.replace( "`", "" );
	text = text.replace( "~", "" );
	text = text.replace( "@", "" );
	text = text.replace( "^", "" );
	text = text.replace( "_", "" );
	text = text.replace( "[", "" );
	text = text.replace( "{", "" );
	text = text.replace( "]", "" );
	text = text.replace( "}", "" );
	text = text.replace( "\\", "" );
	text = text.replace( "|", "" );
	text = text.replace( "<", "" );
	text = text.replace( ">", "" );
	
	text = text.replace(/\u0D85\u0DCF/g, '\u0D86');
	text = text.replace(/\u0D85\u0DD0/g, '\u0D87');
	text = text.replace(/\u0D85\u0DD1/g, '\u0D88');
	text = text.replace(/\u0D91\u0DD9/g, '\u0D93');
	text = text.replace(/\u0D91\u0DCA/g, '\u0D92');
	text = text.replace(/\u0D94\u0DDF/g, "\u0D96"); 
	text = text.replace(/\u0D94\u0DCA/g, "\u0D95"); 
	text = text.replace(/\u0DD9\u0DD9/g, "\u0DDB"); 
	text = text.replace(/\u0DD9\u0DCA/g, "\u0DDA"); 
	text = text.replace(/\u0DD9\u0DCF/g, "\u0DDC"); 
	text = text.replace(/\u0DD9\u0DCF\u0DCA/g, "\u0DDD"); 
	text = text.replace(/\u0DD9\u0DDF/g, "\u0DDE");
	
	// update textarea and cursor position
	elTextArea.value = text;
	elTextArea.selectionStart = selectionStart;
	elTextArea.selectionEnd = selectionEnd;
	
	// save text history in localstorage
	if( typeof(Storage) !== "undefined" ) {
		localStorage.mainText = text;
	}
}



function appendChar( charCode ) {
	
	//console.log("appendChar - charCode=" + charCode);
	
	var elTextArea = document.getElementById("mainTextArea");
	updateText( elTextArea, charCode );
	replaceChars(elTextArea);
	
	// get initial cursor position
	var cursorPos = elTextArea.selectionStart;
	var selectionEnd = elTextArea.selectionEnd;
	//console.log("appendChar - cursorPos=" + cursorPos + ", selectionEnd=" + selectionEnd );
	
	// update cursor position and set focus
	elTextArea.selectionStart = cursorPos + 1;
	elTextArea.selectionEnd = selectionEnd + 1;
	elTextArea.focus();
}



function selectAll() {
	var elTextArea = document.getElementById("mainTextArea");
	elTextArea.focus();
	elTextArea.select();
}



function clearAll() {
	var elTextArea = document.getElementById("mainTextArea");
	elTextArea.value = "";
	elTextArea.focus();
	elTextArea.select();
}



function printPreview() {
	var html = preparePrintPage();
	//console.log("printPreview - html=" + html );
	var popup = window.open("", "Print Preview", "width=720, height=900, scrollbars=yes, resizable=yes, menubar=no, status=no, titlebar=no, toolbar=no" );
	popup.document.open();
	popup.document.write(html);
}



function print() {
	var html = preparePrintPage();
	//console.log("print - html=" + html );
	var popup = window.open("", "Print", "width=720, height=900, scrollbars=yes, resizable=yes, menubar=no, status=no, titlebar=no, toolbar=no" );
	popup.document.open();
	popup.document.write(html);
	popup.print();
}



function preparePrintPage() {
	
	var elTextArea = document.getElementById("mainTextArea");
	var text = elTextArea.value;
	var fontSize = elTextArea.style.fontSize;
	//console.log("preparePrintPage - fontSize=" + fontSize );
	
	text = text.replace(/\n/g, "<br>");
	var style = 
		"<style>" +
		"	.mainText {" +
		"		font-size: " + fontSize + "; " +
		"	}" +
		"</style>";
		var head = "<head>" + style + "</head>";
	var body = "<body class='mainText'>" + text + "</body>";
	var html = "<html>" + head + body + "</html>";
	//console.log("printPreview - html=" + html );
	
	return html;
}



function changeFontSize( selFontSize ) {
	var newFontSize = selFontSize.value;
	var elTextArea = document.getElementById("mainTextArea");
	elTextArea.style.fontSize = newFontSize + 'px';
}



function toggleRightTray( toggleBtnDiv, holderDivName ) {
	
	//console.log("toggleRightTray - toggleBtnDiv.innerHTML=" + toggleBtnDiv.innerHTML );
	var holderDiv = document.getElementById( holderDivName );
	
	
	if( toggleBtnDiv.innerHTML === "&gt;&gt;" ) {
		holderDiv.className = holderDivName + "Show divTransitions rightTray";
		toggleBtnDiv.innerHTML = "&lt;&lt;";
		
	} else {
		holderDiv.className = holderDivName + "Hidden divTransitions rightTray";
		toggleBtnDiv.innerHTML = "&gt;&gt;";
	}
}



function updateAllWordsList( elTextArea ) {
	
	var newWords = 0;
	var minimumLength = 2;
	var text = elTextArea.value;
	var currentWordList = getCurrentWordsList(text);
	var allWordsList = [];
	
	// initialize all words list
	if( typeof(Storage) !== "undefined" ) {
		
		if( localStorage.allWordsList ) {
			allWordsList = localStorage.allWordsList.split(',');
			
		} else {
			localStorage.allWordsList = "";
			allWordsList = [];
		}
	}
	
	// check for any new words (except current word being typed)
	for( var i=0; i < currentWordList.length-1; i++ ) {
		
		var word = currentWordList[i];
		//console.log("updateAllWordsList - word=" + word );
		//console.log("updateAllWordsList - allWordsList.indexOf(word)=" + allWordsList.indexOf(word) );
		
		if( word.length >= minimumLength && allWordsList.indexOf(word) === -1 ) {
			allWordsList.push(word);
			newWords++;
		}
	}
	
	// update all words list in localStorage
	if( newWords > 0 && typeof(Storage) !== "undefined" ) {
		
		// sort words by length, ascending
		allWordsList.sort( function( a, b) {
			if( a.length > b.length )
				return 1;
			if (a.length < b.length )
				return -1;
			return 0;
		});
		
		localStorage.allWordsList = allWordsList;
	}
	
}



function updateSuggestions( text, selectionEnd  ) {
	
	var allWordsList = [];
	var suggestionsList = [];
	var maxSuggestions = 10;
	var minimumLength = 3;
	var suggestions = 0;
	var currentWordList = getCurrentWordsList(text);
	//console.log("updateSuggestions - currentWordList=" + currentWordList );
	
	if( currentWordList.length > 0 ) {
		
		var currentWord = "";
		var currentWordLength = 0;
		
		//get current word being typed
		var textSubstring = text.substring( 0, selectionEnd + 1);
		textSubstring = replaceSpecialCharsWithSpaces( textSubstring );
		//console.log("updateSuggestions - textSubstring='" + textSubstring + "'" );
		
		for( var i = textSubstring.length-1; i >= 0; i-- ) {
			
			var currentChar = textSubstring[i];
			//console.log("updateSuggestions - textSubstring[" + i + "]='" + currentChar + "'" );
			
			if( currentChar === ' ' ) {
				currentWord = textSubstring.substring( i+1, textSubstring.length );
				currentWordLength = currentWord.length;
				break;
				
			} else if ( i == 0 ) {
				currentWord = textSubstring.substring( i, textSubstring.length );
				currentWordLength = currentWord.length;
				break;
			}
		}
		//console.log("updateSuggestions - currentWord='" + currentWord + "'" );
		//console.log("updateSuggestions - currentWordLength='" + currentWordLength + "'" );
		
		if( currentWordLength > 0 ) {
		
			if( typeof(Storage) !== "undefined" ) {
				if( localStorage.allWordsList ) {
					allWordsList = localStorage.allWordsList.split(',');
				} else {
					allWordsList = currentWordList;
				}
			}
			//console.log("updateSuggestions - allWordsList='" + allWordsList + "'" );
			
			var suggestedWordsRows = "";
			for( var i=0; i < allWordsList.length; i++ ) {
				
				if( suggestions >= maxSuggestions ) {
					break;
				}
				
				var word = allWordsList[i];
				var wordSubstring = word.substring( 0, currentWordLength );
				//console.log("updateSuggestions - word=" + word );
				//console.log("updateSuggestions - wordSubstring=" + wordSubstring );
				
				if( wordSubstring.indexOf( currentWord ) !== -1 && suggestionsList.indexOf(word) === -1 && word !== currentWord && word.length >= minimumLength ) {
					suggestionsList.push(word);
					suggestedWordsRows += 
						"<tr>" +
							"<td>&nbsp;</td>" + 
							"<td class=\"sinhalaButton\" onclick=\"appendSuggestion('" + word.replace(currentWord, '') + "')\">" + word + "</td>" +
							"<td><a class=\"delSuggestion\" onclick=\"removeFromAllWordsList('" + word + "')\" title=\"Remove word from suggestions\">&nbsp;X&nbsp;</a></td>" +
						"</tr>";
					suggestions++;
				}
			}
			
			var suggestionsTbl = "";
			if( suggestions > 0 ) {
				suggestionsTbl =
					"<table class=\"suggestionsTable\" title=\"Provides suggestions based on previous words you have typed..\">" +
						"<caption>Suggestions</caption>" +
						suggestedWordsRows + 
					"</table>";
			}
			document.getElementById("suggestionsHolder").innerHTML = suggestionsTbl;
		
		}

	}
}



function getCurrentWordsList( text ) {
	text = replaceSpecialCharsWithSpaces( text );
	return text.split(' ');
}



function replaceSpecialCharsWithSpaces( text ) {
	text = text.replace(/(\r\n|\n|\r)/g, ' ');
	text = text.replace(/[0-9]/g, ' ');
	text = text.replace(/\./g, ' ');
	text = text.replace(/,/g, ' ');
	text = text.replace(/\(/g, ' ');
	text = text.replace(/\)/g, ' ');
	text = text.replace(/:/g, ' ');
	text = text.replace(/;/g, ' ');
	text = text.replace(/[\[\]']+/g, ' ');
	text = text.replace(/{/g, ' ');
	text = text.replace(/}/g, ' ');
	text = text.replace(/!/g, ' ');
	text = text.replace(/#/g, ' ');
	text = text.replace(/\$/g, ' ');
	text = text.replace(/&/g, ' ');
	text = text.replace(/\*/g, ' ');
	text = text.replace(/=/g, ' ');
	text = text.replace(/\+/g, ' ');
	text = text.replace(/-/g, ' ');
	text = text.replace(/"/g, ' ');
	text = text.replace(/'/g, ' ');		
	text = text.replace(/\?/g, ' ');
	text = text.replace(/\//g, ' ');
	return text;
}




function appendSuggestion( word ) {
	
	var elTextArea = document.getElementById("mainTextArea");
	var text = elTextArea.value;
	var lengthBfrAppend = text.length;
	var cursorPos = elTextArea.selectionStart;
	var selectionEnd = elTextArea.selectionEnd;
	var start = 0;
	var end = text.length;
	var head = text.substring( start, cursorPos );
	var tail = text.substring( cursorPos, end );
	text = head + word + tail;
	
	// get initial cursor position
	var lengthAfterAppend = text.length;
	var cursorDisplacement = lengthAfterAppend - lengthBfrAppend;
	
	// update text area and cursor position
	elTextArea.value = text;
	elTextArea.selectionStart = cursorPos + cursorDisplacement;
	elTextArea.selectionEnd = selectionEnd + cursorDisplacement;
	elTextArea.focus();
	
	document.getElementById("suggestionsHolder").innerHTML = "";
}



function clearMetaData() {
	localStorage.allWordsList = "";
	alert("Browser storage cleared!");
}



function removeFromAllWordsList( word ) {
	
	//console.log("removeFromAllWordsList - word=" + word );
	
	if( typeof(Storage) !== "undefined" ) {
		
		if( localStorage.allWordsList ) {
			
			var replaceString = ',' + word + ',';
			localStorage.allWordsList = localStorage.allWordsList.replace( replaceString, ',');
			alert('The word "' + word + '" was removed from browser storage');
			
		} else {
			alert('No words have been saved in browser storage yet..');
		}
		
	} else {
		alert('Browser does not support local storage');
	}
	
}




