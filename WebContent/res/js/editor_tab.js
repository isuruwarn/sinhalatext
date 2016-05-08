

$("#mainTextArea").focus( function() {
	$("#header").html("");
	$("#header").removeClass("headerDiv");
	$("#mainDiv").css({ top: '0px' });
});



//if( navigator.appVersion.indexOf('Android') !== -1 ) { // for stupid android virtual keyboard issue

	$("#mainTextArea").bind("keydown", function(event) {
		bindKeyEventAndroid(event);
	});
//} else {
//	$("#mainTextArea").bind("keypress", function(event) {
//		bindKeyEvent(event);
//	});
//}


function bindKeyEvent(event) {
	
	var keyInput = event.which;
	var metaKey = event.metaKey; // for mac command key
	var controlKey = event.ctrlKey;
	//console.log("handleKeyInput - keyInput=" + keyInput );
	
	var elTextArea = document.getElementById("mainTextArea");
	
	if( keyInput == 32 || keyInput == 13 ) {
		updateAllWordsList( elTextArea );
		$("#suggestionsHolder").html("");
		
	} else if( keyInput < 60 || keyInput == 61 || keyInput == 63 || controlKey || metaKey ) {
		return;
		
	} else {
		// prevent english characters from being typed
		event.preventDefault();
		updateText( elTextArea, keyInput );
	}
}



function bindKeyEventAndroid(event) {
	
	//var debugMsg = 'event=' + Object.getOwnPropertyNames(event);
	//var debugMsg = 'event.which=' + event.which + ", event.type=" + event.type;
	var debugMsg = "";
	
	/*Object.keys(event).forEach( function(key) {
		debugMsg += key + "= " + event[key] + "<br>";
	});
	*/
	
	debugMsg += "<br>***originalEvent***<br>";
	Object.keys(event.originalEvent).forEach( function(key) {
		debugMsg += key + "= " + event[key] + "<br>";
	});
	debugMsg += "<br>***view***<br>";
	Object.keys(event.view).forEach( function(key) {
		debugMsg += key + "= " + event[key] + "<br>";
	});
	debugMsg += "<br>***target***<br>";
	Object.keys(event.target).forEach( function(key) {
		debugMsg += key + "= " + event[key] + "<br>";
	});
	debugMsg += "<br>***currentTarget***<br>";
	Object.keys(event.currentTarget).forEach( function(key) {
		debugMsg += key + "= " + event[key] + "<br>";
	});
	debugMsg += "<br>***delegateTarget***<br>";
	Object.keys(event.delegateTarget).forEach( function(key) {
		debugMsg += key + "= " + event[key] + "<br>";
	});
	debugMsg += "<br>***handleObj***<br>";
	Object.keys(event.handleObj).forEach( function(key) {
		debugMsg += key + "= " + event[key] + "<br>";
	});
	
	
	$("#debugAreaDiv").html( debugMsg );
	
	/*var elTextArea = document.getElementById("mainTextArea");
	var startPos = elTextArea.selectionStart;
	var inputChar = elTextArea.value.charAt(startPos-1);
	var keyInput = elTextArea.value.charCodeAt(startPos-1);
	var metaKey = event.metaKey; // for mac command key
	var controlKey = event.ctrlKey;
	
	console.log("handleKeyInput -  inputChar=" + inputChar + ", keyInput=" + keyInput );
	
	if( keyInput == 32 || keyInput == 13 ) {
		updateAllWordsList( elTextArea );
		$("#suggestionsHolder").html("");
		
	} else if( keyInput < 60 || keyInput == 61 || keyInput == 63 || controlKey || metaKey ) {
		return;
		
	} else {
		// prevent english characters from being typed
		//event.preventDefault();
		updateText( elTextArea, keyInput );
	}
	*/
}




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



function updateTextForAndroid( elTextArea, keyInput ) {
	
}




function createSinhalaButtons() {
	
	var mainKMTable = $("<table></table>").addClass("keyMapTable");
	var trMainTable = $("<tr></tr>");

	var alphabet = [ 97, 1400, 1401, 1402, 105, 73, 117, 1407, 79, 85, 
	             101, 1403, 1404, 111, 1405, 1406, 107, 75, 103, 71, 70, 
	             86, 99, 67, 106, 74, 113, 81, 1408, 83, 
	             116, 84, 100, 68, 110, 78, 122, 90, 119, 87, 
	             112, 80, 98, 66, 109, 77, 121, 114, 108, 118, 
	             120, 88, 115, 104, 76, 102, 72, 1304, 89, 82,
	             92, 124, 96, 126, 64, 94, 60, 62, 91, 123,
	             93, 125, 1320, 95, 1322, 1323, 1324, 1321, 65, 69 ];
	var keyCount = 0;
	
	for( var i = 0; i < alphabet.length; i++ ) {
		
    	var td = $("<td></td>");
	    var key = alphabet[i];
	    var symbol = charMap[key];
	    
	    if(symbol) {
		    td = $("<td width=10%>" + symbol.HTMLCODE + "</td>").addClass("sinhalaButton").attr( { title: symbol.NAME, onclick: "appendChar(" + key + ")"  } );
	    }
	    
	    trMainTable.append(td);
	    keyCount++;
	    
	    if( keyCount % 10 == 0 ) {
	    	mainKMTable.append(trMainTable);
	    	trMainTable = $("<tr></tr>");
	    	keyCount = 0;
	    }
	    
	}
	
	mainKMTable.append(trMainTable);
	$('#keyMapDiv').append(mainKMTable);
	
}




function help() {
	window.location.href = "help_tab.html";
}




function back() {
	window.location.href = "main_editor_tab.html";
}




