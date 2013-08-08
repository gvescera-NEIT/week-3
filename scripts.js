// Declares json for ads
var ad_metadata = {
  'ad0' : "This is an ad",
	'ad1' : "This is another ad",
	'ad2' : "This is also an ad",
	'ad3' : "This is a different ad",
	'ad4' : "This ad is better",
	'ad5' : "This is the best ad"
};

// Calls the ad display function
rand_ad_display();

// Function for displaying the ad
function rand_ad_display()
{
	var ad_div = document.getElementById("ad");
	var ad_keys = [];
	var ad_key = "";
	
	// Populates the ad_keys array with the variable names within the json
	for (ad_key in ad_metadata)
	{
		ad_keys.push(ad_key);
	}
	
	// Creates a variable with a value determined by the number of indexes in the ad_keys array
	var ad_keys_len = ad_keys.length;
	
	// Pushes the value of ad_key_len to the getRandAdKey function parameter "len"
	var rand_ad_key = getRandAdKey(ad_keys_len);
	
	// Gets the variable in the ad_keys array at index "rand_ad_key"
	var ad_key_value = ad_keys[rand_ad_key];
	
	// Uses the variable previously found witin the ad_keys array and gets its value from the ad_metadata json
	var ad_metadata_value = ad_metadata[ad_key_value];
	
	// Displays random ad using the value found above ^
	ad_div.innerHTML = ad_metadata_value;
	
	// Changes the webpages title to the ad displayed, up until the 15th character
	document.title = ad_metadata_value.substr(0,15);
}

function getRandAdKey(len)
{
	// gets random number, 0 to len(passed in)
	return Math.floor(Math.random()* len);
}
