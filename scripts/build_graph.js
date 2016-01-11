function friendlist(id, name, members) {
	this.ID = id;
    this.name = name;
	if (members === undefined) {
      this.members = []
	}
	else {
      this.members = members;
    }
}

function fetchFriendLists() {
  FB.api('/me/friendlists', function(response) {
  	if (response && !response.error)  {
	  console.log('Successful friendlist grab');
	  console.log(response);
	  var friendlists = [];
	  var listsRemaining = response.data.length;
	  response.data.forEach(function(friendlistItem) {
        getFriendListName(friendlistItem.id, friendlists, listsRemaining);
	  });

	  for (index = 0; index < response.data.length; index++) {
	  	
	  }
	  console.log(friendlists)
  	}
  });
}

function getFriendListName(id, friendlists, listsRemaining) {
  console.log('Fetching friendlist name');
  FB.api(id, function(response) {
  	if (response && !response.error) {
      console.log('Successfully fetched friendlist');
  	  console.log(response);
  	  var newFriendlist = new friendlist(id, response.name);
  	  friendlists.push(newFriendlist);
  	  listsRemaining -= 1;
      if (listsRemaining === 0) {
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
}




