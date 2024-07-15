"use strict";

/*Website: Mediterranean Recipe Books
Author: P.Karras 7/14/24
Colors: Blues, Whites, Ocean, Islands

This is the MED_clock JavaScript file name: MED_clock.js - applied to preview.books page

   JAVA Script page
   Countdown Clock
   Display the time left until Book Release on January 1, 2025


HTML pages
  1. Home Page: website.MEDITERRANEAN.html
  2. About Page: about.html
  3. Books/Cart Page: preview.books.html
  4. Contact Us Page: contact.html
  5. Reviews Page: review.html
 CSS & Javascript pages
  6. Med_style.css - applied to all website pages
  7. MED_reviews_form.css - applied to the reviews page
  8. MED_Preview_with CART.css - applied to preview.books page
  9. MED_payment_form.css - applied to payments page
  10. MED_layout2.css - applied to all website pages
  11. MED_clock_styles.css - applied to preview.books page
  12. MED_clock.js (Javascript file for countdown clock) - applied to preview.books page
  */



/*T9 Send an alert using JavaScript*/
   window.alert("Mediterranean Recipe Books Members receive 2025 New Book Release & Specials");

/*T9Function to create and run the countdown clock */
  runClock();
/*T9 Delay one command or run a command at a specified interval*/
  setInterval("runClock()", 1000);
  function runClock(){

	/*Store the current date and time */
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

/*T9 Create and call a JavaScript function that keeps track of the current day and time*/
	/* Display the current date and time */
	document.getElementById("dateNow").innerHTML =
	dateStr + "<br />" + timeStr;

/*T9 Use a Math method*/
	/*Calculate the days unti January 1st */
	var newYear = new Date("January 1, 2021");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay) / (1000*60*60*24);

	/* Calculate the hours left in the current day */
	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;

	/* Calculate the minutes and seconds left in the current hour */
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;


	/*Display the time left until New Year's Eve = Book Release on January 1, 2025 */
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}

/*T9 Convert between a number and a text
  The texbook did not give examples for conversions with examples 
  so not sure if this would apply using the date string listed in code above from a string to a number:
	 testString = "January 1, 2021"; //text string
	 testNumber = January 1, 2021*1; //numeric value
	 
 number to string
	 testNumber = 555; //numeric value
	 testString = 555 + ""; //text string 
 
 string to number
	 testString = "555"; //text string
	 testNumber = 555*1; //numeric value
 
 parseInt(555 Text) //return 555 numeric integer
 
 */