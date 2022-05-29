
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
    document.getElementById("dolar").innerHTML = `
    Dólar: ${result.result.toFixed(2)} MXN
    `
  })
  .catch(error => console.log('error', error));