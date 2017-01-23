

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




function createKeyMapTable() {
	
	var mainKMTable = $("<table></table>").addClass("keyMapTable");
	var captionMainTable = $("<caption></caption>").text("Key Map");
	
	var keys = [97, 65, 98, 66, 99, 67, 100, 68, 101, 69, 102, 70, 103, 71, 104, 72, 105, 73, 106, 74, 107, 75,
	            108, 76, 109, 77, 110, 78, 111, 79, 112, 80, 113, 81, 114, 82, 115, 83, 116, 84, 117, 85, 118, 
	            86, 119, 87, 120, 88, 121, 89, 122, 90, 92, 124, 96, 126, 64, 94, 95, 91, 123, 93, 125, 60, 62 ];
	
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
	    key = keys[i+44];
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


