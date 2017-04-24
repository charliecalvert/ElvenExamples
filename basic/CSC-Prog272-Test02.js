/**
 * @author Charlie Calvert
 * 
 * Updated to show how to load multiple images
 * Load one image from constructor
 * Load second image on button click
 * Updated to show how to use for loop to fill list
 */

var MyObject = (function() {
    'use strict';
	
	var images = ["CSC-Image01.png", "CSC-Image02.png"];
	var imgs = [];
	
	// Constructor 
    function MyObject() {
    	// Initializes images        
        for (var i = 0; i < images.length; i++) {
        	imgs[i] = new Image();
        	imgs[i].src = images[i];   
        };
        // Call private methods without using this.
        run();                	     	
    };	
	
	// Private method for loading images
	var setImage = function (imageIndex) {				
	   	$("#myImage").attr({
	   		src: imgs[imageIndex].src        	
	    }); 
	}; 
	
	// Private method to initialize application
    var run = function () {
       	$("#changeMe").html("This is my new text.")
       setImage(0);
    };      

	// Public method called from HTML files
    MyObject.prototype.runButton01 = function () {
    	$("#myHeading").html("This is my heading");
       	$("#changeMe").html("This is my other button text.")
       	$(".blue").css( { "backgroundColor": "lightblue", color: "blue" } );
       	$("#myList").empty();
       	for (var i = 0; i < 3; i++) {
       		$("#myList").append("<li>List Item " + i.toString() + "</li>");
       	}
       	setImage(1);       	
    };    
    
    MyObject.prototype.runButton02 = function () {
    	$('#myDiv').css("backgroundImage", "url(CSC-Image02.png)");
    }
    
    return MyObject;
})();

// This will be called when page is ready
$(document).ready(function() {	
	var myObject = new MyObject();	
	$("#myButton01").click(myObject.runButton01);	
	$("#myButton02").click(myObject.runButton02);
});

