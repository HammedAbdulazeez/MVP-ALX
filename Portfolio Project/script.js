// Function to make an HTTP GET request to the Dynamics 365 Web API
function fetchContactInformation() {
  const dynamics365Url = 'https://org12f20a88.api.crm4.dynamics.com/api/data/v9.2';
  const entitySetName = 'contacts';
  const clientId = '529781cd-e4f1-4e37-806b-731f3c17d4d7';
  const clientSecret = 'ndz8Q~l3gHbq68AJvaRJIqXXAnuTcZzKYhoY8axC';
  const tenantid = '2925e666-f610-4204-8180-cc44899faf54';
  // const redirectUrl = "http://localhost:5500/index.html";

  // Generate the authorization token
  const tokenEndpoint = `https://127.0.0.1:55633'/https://login.microsoftonline.com/2925e666-f610-4204-8180-cc44899faf54/oauth2/token`;
  const tokenRequestParams = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}&resource=${dynamics365Url}`;
  const tokenRequestHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
 
  // Make the token request
  fetch(tokenEndpoint, {
    method: 'POST',
    headers: tokenRequestHeaders,
    body: tokenRequestParams
  })
    .then(response => response.json())
    .then(tokenResponse => {
      const accessToken = tokenResponse.access_token;

      // Define the request headers
      const requestHeaders = {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      };

      // Define the request URL
      const requestUrl = `${dynamics365Url}/${entitySetName}(contactId)?$select=fullname,emailaddress1,telephone1`;

      // Make the request to fetch contact information
      fetch(requestUrl, {
        method: 'GET',
        headers: requestHeaders
      })
        .then(response => response.json())
        .then(contact => {
          // Update the HTML elements with the contact information
          document.getElementById('name').textContent = contact.fullname;
          document.getElementById('email').textContent = contact.emailaddress1;
          document.getElementById('phone').textContent = contact.telephone1;
        })
        .catch(error => {
          console.error('Error fetching contact information:', error);
        });
    })
    .catch(error => {
      console.error('Error fetching access token:', error);
    });
}

// Call the function to fetch and display contact information
fetchContactInformation();
