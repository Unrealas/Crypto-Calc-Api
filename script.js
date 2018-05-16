const DOMelements = {
    crypto: document.querySelector('.crypto'),
    currency: document.querySelector('.currency'),
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result'),
    amount: document.querySelector('.amount'),
    fiat: document.querySelector('.fiat'),
};
DOMelements.amount.focus();
DOMelements.result.textContent = "Please enter amount";
DOMelements.amount.value='';
DOMelements.fiat.value='';

DOMelements.submit.addEventListener('click', function () {
    var url = `https://api.coinmarketcap.com/v1/ticker/${DOMelements.crypto.value}/?convert=${DOMelements.currency.value}`;
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        var eur = data[0].price_eur;
        var usd = data[0].price_usd;
        var symbol = data[0].symbol;
        var amount = DOMelements.amount.value;
        var fiat = DOMelements.fiat.value;
        amount == 0 ? DOMelements.result.textContent = "Please enter amount" :null;
        DOMelements.currency.value === 'EUR' && DOMelements.amount.value >0? DOMelements.result.textContent = `${amount} ${symbol} = ${amount*eur} EUR` : null;
        DOMelements.currency.value === 'USD' && DOMelements.amount.value >0 ? DOMelements.result.textContent = `${amount} ${symbol} = ${amount*usd} USD` : null;
        DOMelements.fiat.value > 0 && DOMelements.currency.value === 'EUR' ? DOMelements.result.textContent = `${fiat} EUR = ${fiat/eur} ${symbol   }` : null;

    });


});
