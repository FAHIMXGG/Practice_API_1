const BITLY_TOKEN = "0845bc0590be52084fe476318bf7cc9bf102f8bc";
      
      async function shortenUrl() {
        const longUrl = document.getElementById("long-url").value;
        const apiUrl = "https://api-ssl.bitly.com/v4/bitlinks";
        const headers = {
          "Authorization": `Bearer ${BITLY_TOKEN}`,
          "Content-Type": "application/json"
        };
        const data = {
          "long_url": longUrl
        };
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data)
        });
        if (response.ok) {
          const result = await response.json();
          const shortUrl = result.link;
          //document.getElementById("short-url").textContent = shortUrl;
          const makeUrl = document.getElementById("short-url")
          const info = document.createElement('h1')
          info.innerText = shortUrl
        //   makeUrl.innerHTML =`


        //   `
            makeUrl.appendChild(info);

        } else {
          document.getElementById("short-url").textContent = "Error: Failed to shorten URL";
        }
      }