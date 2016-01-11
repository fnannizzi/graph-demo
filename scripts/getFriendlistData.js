// Constructor for a friendlist object
function friendlist(id, name, members) {
	this.ID = id;
    this.name = name;

    // members can be initialized later
	if (members === undefined) {
      this.members = []
	}
	else {
      this.members = members;
    }
}

// It isn't possible to get a list of a user's friends in the latest version
// of the Facebook API - only friends who have accepted certain permissions
// and have logged in to your app will be listed. To get around this, we look
// at 'friendlists' instead. 
/*function getFriendlists() {
  FB.api('/me/friendlists', function(response) {
  	if (response && !response.error)  {
	  console.log('Successful friendlist grab');
	  console.log(response);
	  var friendlists = [];
	  var listsExpected = response.data.length;
	  response.data.forEach(function(friendlistItem) {
	  	console.log(friendlistItem.id);
        getFriendlistName(friendlistItem.id, friendlists, listsExpected);
	  });
  	}
  });
}*/

function inboxTest() {
  FB.api('/me/inbox', function(response) {
    if (response && !response.error)  {
      console.log('Successful inbox grab');
      console.log(response);
      var friendlists = [];
      var listsExpected = response.data.length;
    }
  });
}


function getFriendlistName(id, friendlists, listsExpected) {
  FB.api(('/' + id + '?fields=name'), function(response) {
  	if (response && !response.error) {
      console.log('Successfully fetched friendlist');
  	  console.log(response.name);
  	  var newFriendlist = new friendlist(id, response.name);
  	  friendlists.push(newFriendlist);
      if (friendlists.length == listsExpected) {
        gotAllFriendlists(friendlists);
      }
  	}
  	else {
  		console.log(response.error);
  	}
  });
}

function gotAllFriendlists(friendlists) {
	console.log('SUCCESS');
	console.log(friendlists);
	// use this info to build a drop down list to select from

}




