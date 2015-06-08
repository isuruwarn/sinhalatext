

$("#mainTextArea").focus( function() {
	$("#header").html("");
	$("#header").removeClass("headerDiv");
	$("#mainDiv").css({ top: '0px' });
});




$("#mainTextArea").bind("keypress", function(event) {
	
	var keyInput = event.which;
	//console.log("handleKeyInput - keyInput=" + keyInput );
	
	var metaKey = event.metaKey; // for mac command key
	var controlKey = event.ctrlKey;
	
	if( keyInput == 32 || keyInput == 13 ) {
		updateTextInLocalStorage( this.value );
		
	} else if( keyInput < 60 || keyInput == 61 || keyInput == 63 || controlKey || metaKey ) {
		return;
		
	} else {
		// prevent english characters from being typed
		event.preventDefault();
		updateText( this, keyInput );
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
		updateTextInLocalStorage( elTextArea.value );
	}
	
}




function createSinhalaButtons() {
	
	var mainKMTable = $("<table></table>").addClass("keyMapTable");
	var trMainTable = $("<tr></tr>");
	var keys = [ 89, 82, 1304, 1305, 1306, 79,
	             92, 124, 96, 126, 64, 94, 
	             60, 62, 91, 123, 93, 125, 
	             1320, 95, 1322, 1323, 1324, 1321
	             ];
	
	var keyCount = 0;
	
	for( var i=0; i<keys.length; i++ ) {
		
    	var td = $("<td></td>");
	    var key = keys[i];
	    var symbol = charMap[key];
	    
	    if(symbol) {
		    td = $("<td>" + symbol.HTMLCODE + "</td>").addClass("sinhalaButton").attr( { title: symbol.NAME, onclick: "appendChar(" + key + ")"  } );
	    }
	    
	    trMainTable.append(td);
	    keyCount++;
	    
	    if( keyCount % 6 == 0 ) {
	    	mainKMTable.append(trMainTable);
	    	trMainTable = $("<tr></tr>");
	    	keyCount = 0;
	    }
	    
	}
	
	mainKMTable.append(trMainTable);
	$('#keyMapDiv').append(mainKMTable);
	
}




function help() {
	window.location.href = "help_mob.html";
}




function back() {
	window.location.href = "main_editor_mob.html";
}


