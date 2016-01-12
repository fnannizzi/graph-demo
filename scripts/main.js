// This script is the entry point to our application. 

// When a user hits 'Generate Graph', collect their input and validate it.
$(document).ready(function() {
    $('#num_nodes_input_button').click(function() {
      validateInput($('#num_nodes_input').val());
    });
});

function validateInput(input) {
  if (isInt(input)) {
    console.log('input passed: ' + input);
    document.getElementById('bad_input_error').innerHTML = "";
    createAndShowGraph(input);
  }
  else {
    document.getElementById('bad_input_error').innerHTML = "Please enter an integer for the number of nodes.";
  }
}