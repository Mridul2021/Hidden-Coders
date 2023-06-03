document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault(); // Prevent the default form submission

    // Extract form input values
    var name = document.getElementById("complaint").value;
  
    // Create an object with the form data
    var formData = {
      name: name    };
  
    // Send the form data to the backend server
//     fetch("/submit-form", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formData)
//     })
//     .then(function(response) {
//       if (response.ok) {
//         return response.text();
//       }
//       throw new Error("Error: " + response.status);
//     })
//     .then(function(data) {
//       console.log(data); // Server response
//     })
//     .catch(function(error) {
//       console.log(error);
//     });
//   });
console.log(formData.name);
var nes=formData.name;
console.log(nes);
});