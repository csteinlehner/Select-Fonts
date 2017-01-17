onRun = function(context){
	var sketch = context;
	var document = context.document;
	var selection = context.selection;
	var page = document.currentPage;
	var app = NSApplication.sharedApplication()

var selectedFontName = getFontName();
log(selectedFontName);


		var layers = document.currentPage().children();
		for (var i=0; i<layers.count(); i++) {
			var layer = layers[i];
			if(layer.class()==MSTextLayer){
				if(layer.font().displayName()==selectedFontName){
					layer.select_byExpandingSelection(true, true);
				}
			}
		}


function getFontName(){
	if(selection.count()==1){
		if(selection[0].class()==MSTextLayer){
			return selection[0].font().displayName();
		}else{
				app.displayDialog_withTitle("says Font Select","Please select a text layer");
		}
	}else{
		//sketch.alert("Please select just one layer.");
		app.displayDialog_withTitle("says Font Select","Please select just one layer");
	}
	}

}
