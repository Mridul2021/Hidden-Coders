// This function shows the other issue box if the user selects the other issue option
function showOtherIssue() {
    // Get the select element by its id
    var select = document.getElementById("issue");
    // Get the value of the selected option
    var value = select.value;
    // Get the other issue div by its id
    var otherIssue = document.getElementById("other-issue");
    // If the value is equal to "Other issue", show the other issue div
    if (value == "Other issue") {
      otherIssue.style.display = "block";
    }
    // Otherwise, hide the other issue div
    else {
      otherIssue.style.display = "none";
    }
  }
  