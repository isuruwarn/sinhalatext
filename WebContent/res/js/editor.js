
var charMap = {
	97 : { NAME: "AYANNA",  UNICODE: "\u0D85",  HTMLCODE: "&#3461;",  CHARCODE: "a", },
	65 : { NAME: "ANUSVARAYA",  UNICODE: "\u0D82",  HTMLCODE: "&#3458;",  CHARCODE: "A", },
	98 : { NAME: "ALPAPRAANA_BAYANNA",  UNICODE: "\u0DB6",  HTMLCODE: "&#3510;",  CHARCODE: "b", },
	66 : { NAME: "MAHAAPRAANA_BAYANNA",  UNICODE: "\u0DB7",  HTMLCODE: "&#3511;",  CHARCODE: "B", },
	99 : { NAME: "ALPAPRAANA_CHAYANNA",  UNICODE: "\u0DA0",  HTMLCODE: "&#3488;",  CHARCODE: "c", },
	67 : { NAME: "MAHAAPRAANA_CHAYANNA",  UNICODE: "\u0DA1",  HTMLCODE: "&#3489;",  CHARCODE: "C", },
	100 : { NAME: "ALPAPRAANA_DDAYANNA",  UNICODE: "\u0DA9",  HTMLCODE: "&#3497;",  CHARCODE: "d",  },
	68 : { NAME: "MAHAAPRAANA_DDAYANNA",  UNICODE: "\u0DAA",  HTMLCODE: "&#3498;",  CHARCODE: "D", },
	101 : { NAME: "EYANNA",  UNICODE: "\u0D91",  HTMLCODE: "&#3473;",  CHARCODE: "e",  },
	69 : { NAME: "VISARGAYA",  UNICODE: "\u0D83",  HTMLCODE: "&#3459;",  CHARCODE: "E", },
	102 : { NAME: "FAYANNA",  UNICODE: "\u0DC6",  HTMLCODE: "&#3526;",  CHARCODE: "f",  },
	70 : { NAME: "KANTAJA_NAASIKYAYA",  UNICODE: "\u0D9E",  HTMLCODE: "&#3486;",  CHARCODE: "F", },
	103 : { NAME: "ALPAPRAANA_GAYANNA",  UNICODE: "\u0D9C",  HTMLCODE: "&#3484;",  CHARCODE: "g",  },
	71 : { NAME: "MAHAAPRAANA_GAYANNA",  UNICODE: "\u0D9D",  HTMLCODE: "&#3485;",  CHARCODE: "G", },
	104 : { NAME: "HAYANNA",  UNICODE: "\u0DC4",  HTMLCODE: "&#3524;",  CHARCODE: "h",  },
	72 : { NAME: "SANYAKA_DDAYANNA",  UNICODE: "\u0DAC",  HTMLCODE: "&#3500;",  CHARCODE: "H", },
	105 : { NAME: "IYANNA",  UNICODE: "\u0D89",  HTMLCODE: "&#3465;",  CHARCODE: "i",  },
	73 : { NAME: "IIYANNA",  UNICODE: "\u0D8A",  HTMLCODE: "&#3466;",  CHARCODE: "I", },
	106 : { NAME: "ALPAPRAANA_JAYANNA",  UNICODE: "\u0DA2",  HTMLCODE: "&#3490;",  CHARCODE: "j",  },
	74 : { NAME: "MAHAAPRAANA_JAYANNA",  UNICODE: "\u0DA3",  HTMLCODE: "&#3491;",  CHARCODE: "J", },
	107 : { NAME: "ALPAPRAANA_KAYANNA",  UNICODE: "\u0D9A",  HTMLCODE: "&#3482;",  CHARCODE: "k",  },
	75 : { NAME: "MAHAAPRAANA_KAYANNA",  UNICODE: "\u0D9B",  HTMLCODE: "&#3483;",  CHARCODE: "K", },
	108 : { NAME: "DANTAJA_LAYANNA",  UNICODE: "\u0DBD",  HTMLCODE: "&#3517;",  CHARCODE: "l",  },
	76 : { NAME: "MUURDHAJA_LAYANNA",  UNICODE: "\u0DC5",  HTMLCODE: "&#3525;",  CHARCODE: "L", },
	109 : { NAME: "MAYANNA",  UNICODE: "\u0DB8",  HTMLCODE: "&#3512;",  CHARCODE: "m",  },
	77 : { NAME: "AMBA_BAYANNA",  UNICODE: "\u0DB9",  HTMLCODE: "&#3513;",  CHARCODE: "M", },
	110 : { NAME: "DANTAJA_NAYANNA",  UNICODE: "\u0DB1",  HTMLCODE: "&#3505;",  CHARCODE: "n",  },
	78 : { NAME: "MUURDHAJA_NAYANNA",  UNICODE: "\u0DAB",  HTMLCODE: "&#3499;",  CHARCODE: "N", },
	111 : { NAME: "OYANNA",  UNICODE: "\u0D94",  HTMLCODE: "&#3476;",  CHARCODE: "o",  },
	79 : { NAME: "IRUYANNA",  UNICODE: "\u0D8D",  HTMLCODE: "&#3469;",  CHARCODE: "O", },
	112 : { NAME: "ALPAPRAANA_PAYANNA",  UNICODE: "\u0DB4",  HTMLCODE: "&#3508;",  CHARCODE: "p",  },
	80 : { NAME: "MAHAAPRAANA_PAYANNA",  UNICODE: "\u0DB5",  HTMLCODE: "&#3509;",  CHARCODE: "P", },
	113 : { NAME: "TAALUJA_NAASIKYAYA",  UNICODE: "\u0DA4",  HTMLCODE: "&#3492;",  CHARCODE: "q",  },
	81 : { NAME: "TAALUJA_SANYOOGA_NAAKSIKYAYA",  UNICODE: "\u0DA5",  HTMLCODE: "&#3493;",  CHARCODE: "Q", },
	114 : { NAME: "RAYANNA",  UNICODE: "\u0DBB",  HTMLCODE: "&#3515;",  CHARCODE: "r",  },
	82 : { NAME: "RAKAYANSAYA",  UNICODE: "\u0DCA\u200D\u0DBB",  HTMLCODE: "&#3530;&#8205;&#3515;",  CHARCODE: "R", },
	115 : { NAME: "DANTAJA_SAYANNA",  UNICODE: "\u0DC3",  HTMLCODE: "&#3523;",  CHARCODE: "s",  },
	83 : { NAME: "SANYAKA_DAYANNA",  UNICODE: "\u0DB3",  HTMLCODE: "&#3507;",  CHARCODE: "S", },
	116 : { NAME: "ALPAPRAANA_TTAYANNA",  UNICODE: "\u0DA7",  HTMLCODE: "&#3495;",  CHARCODE: "t",  },
	84 : { NAME: "MAHAAPRAANA_TTAYANNA",  UNICODE: "\u0DA8",  HTMLCODE: "&#3496;",  CHARCODE: "T", },
	117 : { NAME: "UYANNA",  UNICODE: "\u0D8B",  HTMLCODE: "&#3467;",  CHARCODE: "u",  },
	85 : { NAME: "IRUUYANNA",  UNICODE: "\u0D8E",  HTMLCODE: "&#3470;",  CHARCODE: "U", },
	118 : { NAME: "VAYANNA",  UNICODE: "\u0DC0",  HTMLCODE: "&#3520;",  CHARCODE: "v",  },
	86 : { NAME: "SANYAKA_GAYANNA",  UNICODE: "\u0D9F",  HTMLCODE: "&#3487;",  CHARCODE: "V", },
	119 : { NAME: "ALPAPRAANA_DAYANNA",  UNICODE: "\u0DAF",  HTMLCODE: "&#3503;",  CHARCODE: "w",  },
	87 : { NAME: "MAHAAPRAANA_DAYANNA",  UNICODE: "\u0DB0",  HTMLCODE: "&#3504;",  CHARCODE: "W", },
	120 : { NAME: "TAALUJA_SHAYANNA",  UNICODE: "\u0DC1",  HTMLCODE: "&#3521;",  CHARCODE: "x",  },
	88 : { NAME: "MUURDHAJA_SHAYANNA",  UNICODE: "\u0DC2",  HTMLCODE: "&#3522;",  CHARCODE: "X", },
	121 : { NAME: "YAYANNA",  UNICODE: "\u0DBA",  HTMLCODE: "&#3514;",  CHARCODE: "y",  },
	89 : { NAME: "YANSAYA",  UNICODE: "\u0DCA\u200D\u0DBA",  HTMLCODE: "&#3530;&#8205;&#3514;",  CHARCODE: "Y", },
	122 : { NAME: "ALPAPRAANA_TAYANNA",  UNICODE: "\u0DAD",  HTMLCODE: "&#3501;",  CHARCODE: "z",  },
	90 : { NAME: "MAHAAPRAANA_TAYANNA",  UNICODE: "\u0DAE",  HTMLCODE: "&#3502;",  CHARCODE: "Z", },
	92 : { NAME: "AELA_PILLA",  UNICODE: "\u0DCF",  HTMLCODE: "&#3535;",  CHARCODE: "\\", },
	124 : { NAME: "AL_LAKUNA",  UNICODE: "\u0DCA",  HTMLCODE: "&#3530;",  CHARCODE: "|",  },
	96 : { NAME: "KETTI_IS_PILLA",  UNICODE: "\u0DD2",  HTMLCODE: "&#3538;",  CHARCODE: "`", },
	126 : { NAME: "DIGA_IS_PILLA",  UNICODE: "\u0DD3",  HTMLCODE: "&#3539;",  CHARCODE: "~",  },
	64 : { NAME: "KOMBUVA",  UNICODE: "\u0DD9",  HTMLCODE: "&#3545;",  CHARCODE: "@", },
	94 : { NAME: "DIGA_KOMBUVA",  UNICODE: "\u0DDA",  HTMLCODE: "&#3546;",  CHARCODE: "^", },
	95 : { NAME: "GAETTA_PILLA",  UNICODE: "\u0DD8",  HTMLCODE: "&#3544;",  CHARCODE: "_", },
	91 : { NAME: "PAA_PILLA",  UNICODE: "\u0DD4",  HTMLCODE: "&#3540;",  CHARCODE: "[", },
	123 : { NAME: "DIGA_PAA_PILLA",  UNICODE: "\u0DD6",  HTMLCODE: "&#3542;",  CHARCODE: "{",  },
	93 : { NAME: "AEDA_PILLA",  UNICODE: "\u0DD0",  HTMLCODE: "&#3536;",  CHARCODE: "]", },
	125 : { NAME: "DIGA_AEDA_PILLA",  UNICODE: "\u0DD1",  HTMLCODE: "&#3537;",  CHARCODE: "}",  },
	60 : { NAME: "KOMBUVA_HAA_AELA_PILLA",  UNICODE: "\u0DDC",  HTMLCODE: "&#3548;",  CHARCODE: "<", },
	62 : { NAME: "KOMBUVA_HAA_DIGA_AELA_PILLA",  UNICODE: "\u0DDD",  HTMLCODE: "&#3549;",  CHARCODE: ">", },
	1304 : { NAME: "KSHA",  UNICODE: "\u0D9A\u0DCA\u200D\u0DC2",  HTMLCODE: "&#3482;&#3530;&#8205;&#3522;",  CHARCODE: "1304", },
	1305 : { NAME: "THALUJA_NASIKAYA",  UNICODE: "\u0DA4",  HTMLCODE: "&#3492;",  CHARCODE: "1305", },
	1306 : { NAME: "SANYOGA_NASIKAYA",  UNICODE: "\u0DA5",  HTMLCODE: "&#3493;",  CHARCODE: "1306", },
	1320 : { NAME: "KOMBU_DEKA",  UNICODE: "\u0DDB",  HTMLCODE: "&#3547;",  CHARCODE: "1320", },
	1321 : { NAME: "KOMBUVA_HAA_GAYANUKITTA",  UNICODE: "\u0DDE",  HTMLCODE: "&#3550;",  CHARCODE: "1321", },
	1322 : { NAME: "DIGA_GAETTA_PILLA",  UNICODE: "\u0DF2",  HTMLCODE: "&#3570;",  CHARCODE: "1322", },
	1323 : { NAME: "GAYANUKITTA",  UNICODE: "\u0DDF",  HTMLCODE: "&#3551;",  CHARCODE: "1323", },
	1324 : { NAME: "DIGA_GAYANUKITTA",  UNICODE: "\u0DF3",  HTMLCODE: "&#3571;",  CHARCODE: "1324", },
	1400 : { NAME: "AAYANNA",  UNICODE: "\u0D86",  HTMLCODE: "&#3462;",  CHARCODE: "1400", },
	1401 : { NAME: "AEYANNA",  UNICODE: "\u0D87",  HTMLCODE: "&#3463;",  CHARCODE: "1401", },
	1402 : { NAME: "AEEYANNA",  UNICODE: "\u0D88",  HTMLCODE: "&#3464;",  CHARCODE: "1402", },
	1403 : { NAME: "EEYANNA",  UNICODE: "\u0D92",  HTMLCODE: "&#3474;",  CHARCODE: "1403", },
	1404 : { NAME: "AIYANNA",  UNICODE: "\u0D93",  HTMLCODE: "&#3475;",  CHARCODE: "1404", },
	1405 : { NAME: "OOYANNA",  UNICODE: "\u0D95",  HTMLCODE: "&#3477;",  CHARCODE: "1405", },
	1406 : { NAME: "AUYANNA",  UNICODE: "\u0D96",  HTMLCODE: "&#3478;",  CHARCODE: "1406", },
	1407 : { NAME: "UUYANNA",  UNICODE: "\u0D8C",  HTMLCODE: "&#3468;",  CHARCODE: "1407", },
	1408 : { NAME: "SANYAKA JAYANNA",  UNICODE: "\u0DA6",  HTMLCODE: "&#3494;",  CHARCODE: "1408", }
	};




$("#mainTextArea").bind("keypress", function(event) {
	
	var sinhalaMode = $("#sinhalaMode").is(":checked");
	
	if( sinhalaMode ) {
		
		var keyInput = event.which;
		//console.log("handleKeyInput - keyInput=" + keyInput );
		
		var metaKey = event.metaKey; // for mac command key
		var controlKey = event.ctrlKey;
		
		if( keyInput == 32 || keyInput == 13 ) {
			
			updateAllWordsList( this );
			$("#suggestionsHolder").html("");
			
		} else if( keyInput < 60 || keyInput == 61 || keyInput == 63 || controlKey || metaKey ) {
			return;
			
		} else {
			// prevent english characters from being typed
			event.preventDefault();
			updateText( this, keyInput );
		}
		
	}
	
});





function updateText( elTextArea, keyInput ) {
	
	var newChar = charMap[ keyInput ].UNICODE;
	//console.log("updateText - newChar=" + newChar );
	
	if( newChar ) {
		
		if( document.selection ) { // Internet Explorer
			
			elTextArea.focus();
		    var sel = document.selection.createRange();
		    sel.text = newChar;
		    elTextArea.focus();
		
		} else if( elTextArea.selectionStart || elTextArea.selectionStart == '0' ) { //firefox and webkit based browser
			
			var startPos = elTextArea.selectionStart;
			var endPos = elTextArea.selectionEnd;
			var scrollTop = elTextArea.scrollTop;
			var head = elTextArea.value.substring( 0, startPos );
			var tail = elTextArea.value.substring( endPos, elTextArea.value.length );
			var text = head + newChar + tail;
			elTextArea.value = text;
			elTextArea.focus();
			elTextArea.selectionStart = startPos + newChar.length;
			elTextArea.selectionEnd = startPos + newChar.length;
			elTextArea.scrollTop = scrollTop;
		      
		} else { 
			elTextArea.value += newChar;
			elTextArea.focus();
		}
		
		fixUnicodeIssues( elTextArea );
		updateSuggestions( elTextArea.value, elTextArea.selectionEnd );
		updateTextInLocalStorage( elTextArea.value );
	}
	
}




function appendChar( charCode ) {
	//console.log("appendChar - charCode=" + charCode);
	var elTextArea = document.getElementById("mainTextArea");
	updateText( elTextArea, charCode );
}




function fixUnicodeIssues( elTextArea ) {
	
	var text = elTextArea.value;
	var selectionStart = elTextArea.selectionStart;
	var selectionEnd = elTextArea.selectionEnd;
	
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
	
	// update textarea and cursor position if a replace was carried out
	if( text !== elTextArea.value ) {
		
		elTextArea.value = text;
		elTextArea.selectionStart = selectionStart - 1;
		elTextArea.selectionEnd = selectionEnd - 1;
		
		updateTextInLocalStorage( elTextArea.value );
	}
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



function clearMetaData() {
	localStorage.allWordsList = "";
	alert("Browser storage cleared!");
}



function printPreview() {
	var html = preparePrintPage();
	var popup = window.open("", "Print Preview", "width=720, height=900, scrollbars=yes, resizable=yes, menubar=no, status=no, titlebar=no, toolbar=no" );
	popup.document.open();
	popup.document.write(html);
}



function print() {
	var html = preparePrintPage();
	var popup = window.open("", "Print", "width=720, height=900, scrollbars=yes, resizable=yes, menubar=no, status=no, titlebar=no, toolbar=no" );
	popup.document.open();
	popup.document.write(html);
	popup.print();
}



function preparePrintPage() {
	
	var elTextArea = document.getElementById("mainTextArea");
	var text = elTextArea.value;
	var fontSize = elTextArea.style.fontSize;
	
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
	
	return html;
}




function changeFontSize() {
	var selFontSize = document.getElementById("selFontSize");
	var newFontSize = selFontSize.value;
	var elTextArea = document.getElementById("mainTextArea");
	elTextArea.style.fontSize = newFontSize + 'px';
}




function toggleRightTray( toggleBtnDiv, holderDivName ) {
	
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
	var allWordsList = window.localStorage.allWordsList;
	
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
	
	updateTextInLocalStorage( elTextArea.value );
	
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
		var textSubstring = text.substring( 0, selectionEnd );
		textSubstring = replaceSpecialCharsWithSpaces( textSubstring );
		//console.log("updateSuggestions - textSubstring=" + textSubstring );
		
		for( var i = textSubstring.length-1; i >= 0; i-- ) {
			
			var currentChar = textSubstring[i];
			//console.log("updateSuggestions - currentChar=" + currentChar );
			
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
		
		if( currentWordLength > 0 ) {
			
			//console.log("updateSuggestions - currentWord=" + currentWord );
		
			// get list of known words
			if( typeof(Storage) !== "undefined" ) {
				if( localStorage.allWordsList ) { // first look in localstorage
					allWordsList = localStorage.allWordsList.split(',');
				} else { // if local storage is empty, use current word list
					allWordsList = currentWordList;
				}
			}
			
			var suggestedWordsRows = "";
			for( var i=0; i < allWordsList.length; i++ ) {
				
				if( suggestions >= maxSuggestions ) {
					break;
				}
				
				var word = allWordsList[i];
				var wordSubstring = word.substring( 0, currentWordLength );
				
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
			$("#suggestionsHolder").html(suggestionsTbl);
		
		}

	}
}



function getCurrentWordsList( text ) {
	text = replaceSpecialCharsWithSpaces( text );
	return text.split(' ');
}



function replaceSpecialCharsWithSpaces( text ) {
	text = text.replace(/(\r\n|\n|\r)/g, " ");
	text = text.replace(/[0-9]/g, " ");
	text = text.replace(/\./g, " ");
	text = text.replace(/,/g, " ");
	text = text.replace(/\(/g, " ");
	text = text.replace(/\)/g, " ");
	text = text.replace(/:/g, " ");
	text = text.replace(/;/g, " ");
	text = text.replace(/[\[\]"]+/g, " ");
	text = text.replace(/{/g, " ");
	text = text.replace(/}/g, " ");
	text = text.replace(/!/g, " ");
	text = text.replace(/#/g, " ");
	text = text.replace(/\$/g, " ");
	text = text.replace(/&/g, " ");
	text = text.replace(/\*/g, " ");
	text = text.replace(/=/g, " ");
	text = text.replace(/\+/g, " ");
	text = text.replace(/-/g, " ");
	text = text.replace(/"/g, " ");
	text = text.replace(/"/g, " ");
	text = text.replace(/\?/g, " ");
	text = text.replace(/\//g, " ");
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
	
	updateTextInLocalStorage( elTextArea.value );
	$("#suggestionsHolder").html("");
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




function createKeyMapTable() {
	
	var mainKMTable = $("<table></table>").addClass("keyMapTable");
	var captionMainTable = $("<caption></caption>").text("Key Map");
	
	var keys = [97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 71, 104, 72, 105, 73, 106, 74, 107, 75, 108, 76, 109, 77, 110, 78, 111, 79, 112, 80, 113, 81, 114, 82, 115, 83, 116, 84, 117, 85, 118, 86, 119, 87, 120, 88, 121, 89, 122, 90, 92, 124, 96, 126, 64, 94, 95, 91, 123, 93, 125, 60, 62 ];
	
	for( var i=0; i<22; i++ ) {
		
		var trMainTable = $("<tr></tr>");
		
		var key = keys[i];
		var symbol = charMap[key];
		var td1 = $("<td>" + symbol.CHARCODE + "</td>");
		var td2 = $("<td>-</td>");
	    var td3 = $("<td>" + symbol.HTMLCODE + "</td>").addClass("sinhalaButton").attr( { title: symbol.NAME, onclick: "appendChar(" + key + ")"  } );
	    var td4 = $("<td>&nbsp;&nbsp;</td>").attr( { width: "20px" } );
	    
    	var td5 = $("<td></td>");
    	var td6 = $("<td></td>");
    	var td7 = $("<td></td>");
    	var td8 = $("<td></td>");
	    key = keys[i+22];
	    if(key) {
			symbol = charMap[key];
		    td5 = $("<td>" + symbol.CHARCODE + "</td>");
			td6 = $("<td>-</td>");
		    td7 = $("<td>" + symbol.HTMLCODE + "</td>").addClass("sinhalaButton").attr( { title: symbol.NAME, onclick: "appendChar(" + key + ")"  } );
		    td8 = $("<td>&nbsp;&nbsp;</td>").attr( { width: "20px" } );
	    }
	    
    	var td9 = $("<td></td>");
    	var td10 = $("<td></td>");
    	var td11 = $("<td></td>");
	    key = keys[i+45];
	    if(key) {
			symbol = charMap[key];
		    td9 = $("<td>" + symbol.CHARCODE + "</td>");
			td10 = $("<td>-</td>");
		    td11 = $("<td>" + symbol.HTMLCODE + "</td>").addClass("sinhalaButton").attr( { title: symbol.NAME, onclick: "appendChar(" + key + ")"  } );
	    }
	    
	    trMainTable.append(td1);
	    trMainTable.append(td2);
	    trMainTable.append(td3);
	    trMainTable.append(td4);
	    trMainTable.append(td5);
	    trMainTable.append(td6);
	    trMainTable.append(td7);
	    trMainTable.append(td8);
	    trMainTable.append(td9);
	    trMainTable.append(td10);
	    trMainTable.append(td11);
	    mainKMTable.append(trMainTable);
	}
	
	mainKMTable.append(captionMainTable);
	$('#keyMapDiv').append(mainKMTable);
	
	var br = $("<br>");
	$("#keyMapDiv").append(br);
	
	var specialSymbols = [ 1304, 1305, 1306, 1320, 1321, 1322, 1323, 1324 ];
	var addCharsTable = $("<table></table>").addClass("keyMapTable");
	var captionAddCharsTable = $("<caption></caption>").text("Additional Characters");
	var trAddCharsTable = $("<tr></tr>");
	
	for( var i=0; i<specialSymbols.length; i++ ) {
		
		var key = specialSymbols[i];
		var symbol = charMap[key];
	    var td = $("<td>" + symbol.HTMLCODE + "</td>").addClass("sinhalaButton").attr( { title: symbol.NAME, onclick: "appendChar(" + key + ")"  } );
	    trAddCharsTable.append(td);
	}
	
	addCharsTable.append(captionAddCharsTable);
	addCharsTable.append(trAddCharsTable);
	$('#keyMapDiv').append(addCharsTable);
	
}




function restorePreviousText() {
	var elTextArea = document.getElementById("mainTextArea");
	// retrieve text from previous session
	if( typeof(Storage) !== "undefined" && localStorage.mainText && localStorage.mainText !== "" ) {
		elTextArea.value = localStorage.mainText;
	}
}




function updateTextInLocalStorage( text ) {
	// save text history in localstorage
	if( typeof(Storage) !== "undefined" ) {
		localStorage.mainText = text;
	}
}



