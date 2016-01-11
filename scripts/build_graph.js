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
	  FB.api(('/me/' + response.data[0].id), function(response) {
  	    if (response && !response.error) {
          console.log('Successfully fetched friendlist test');
  	      console.log(response.name);
  	    }
  	  });
	  var friendlists = [];
	  var listsExpected = response.data.length;
	  response.data.forEach(function(friendlistItem) {
	  	console.log(friendlistItem.id);
        getFriendListName(friendlistItem.id, friendlists, listsExpected);
	  });
  	}
  });
}

function getFriendListName(id, friendlists, listsExpected) {
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
}




