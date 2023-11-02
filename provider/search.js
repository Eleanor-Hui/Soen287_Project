document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const licenseNumberInput = document.getElementById("licenseNumberInput");
    const clientForm = document.getElementById("clientForm");
    const clientNameInput = document.getElementById("clientName");
    const clientEmailInput = document.getElementById("clientEmail");
  
    // In a real application, you'd replace this with a server call to fetch client data.
    const clientData = {
      "12345": { name: "John Doe", email: "john@example.com" },
      "67890": { name: "Jane Smith", email: "jane@example.com" },
    };
  
    searchButton.addEventListener("click", function () {
      const licenseNumber = licenseNumberInput.value;
      const client = clientData[licenseNumber];
      if (client) {
        clientNameInput.value = client.name;
        clientEmailInput.value = client.email;
        clientForm.style.display = "block";
      } else {
        clientForm.style.display = "none";
        alert("Client not found.");
      }
    });
  });
  