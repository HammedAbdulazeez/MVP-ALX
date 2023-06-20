window.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  const resourceUrl = 'https://org12f20a88.crm4.dynamics.com/api/data/v9.2/contacts';
  
  const clientId = '529781cd-e4f1-4e37-806b-731f3c17d4d7';
  const redirectUri = 'http://localhost:5500';
  

  getToken()
    .then(accessToken => {
      fetch(resourceUrl, {
        headers: {
          'Authorization': 'Bearer ' + accessToken,
          'OData-MaxVersion': '4.0',
          'OData-Version': '4.0',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(data => {
          const dataListElement = document.getElementById('data-list');
          data.value.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.name; // Update with the desired data field
            dataListElement.appendChild(listItem);
          });
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));

  function getToken() {
    return new Promise((resolve, reject) => {
      const authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=https://your-crm-instance/.default`;

      const authWindow = window.open(authUrl, '_blank', 'width=600,height=600');

      window.addEventListener('message', event => {
        if (event.origin === window.location.origin) {
          const accessToken = extractAccessToken(event.data);
          authWindow.close();
          resolve(accessToken);
        } else {
          reject(new Error('Failed to retrieve access token.'));
        }
      });

      function extractAccessToken(url) {
        const regex = /access_token=([^&]+)/;
        const matches = url.match(regex);
        return matches ? matches[1] : null;
      }
    });
  }
}
