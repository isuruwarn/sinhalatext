

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



