

// Cambio de moneda

var myHeaders = new Headers();
myHeaders.append("apikey", "0PuihhbGtiFTGnW3RCjqKRqKzClqoyv3");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/convert?to=mxn&from=usd&amount=1", requestOptions)
  .then(response => response.json())
  .then(result => {
    const div = document.getElementById("principal")
            div.innerHTML = `
            <h4>Dólar: ${pesoMexicano} peso mexicano</h4>
            `
    console.log(result.result.toFixed(2))
  })
  .catch(error => console.log('error', error));