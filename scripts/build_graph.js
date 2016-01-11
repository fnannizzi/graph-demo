// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function fetchFriendLists() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me/friendlists', function(response) {
  	console.log(response);
    console.log('Successful friendlist grab';
  });
}