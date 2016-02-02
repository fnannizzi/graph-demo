// This script is the entry point to our application. 

// When a user hits 'Generate Graph', collect their input and validate it.
$(document).ready(function() {
    $('#num_nodes_input_button').click(function() {
      validateInput($('#num_nodes_input').val());
    });
});

function validateInput(input) {
  if (isInt(input) && input > 3) {
    console.log('input passed: ' + input);
    document.getElementById('bad_input_error').innerHTML = "";
    runAnimation(input);
  }
  else {
    document.getElementById('bad_input_error').innerHTML = "Please enter an integer larger than three " + 
    "for the number of nodes.";
  }
}