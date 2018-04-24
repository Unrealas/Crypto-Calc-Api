const DOMelements = {
    crypto: document.querySelector('.crypto'),
    currency: document.querySelector('.currency'),
    submit: document.querySelector('.submit'),
    result: document.querySelector('.result'),
    amount: document.querySelector('.amount'),
};
DOMelements.amount.focus();



DOMelements.submit.addEventListener('click', function () {
    var url = `https://api.coinmarketcap.com/v1/ticker/${DOMelements.crypto.value}/?convert=${DOMelements.currency.value}`;
    fetch(url).then(function (res) {
        return res.json()
    }).then(function (data) {
        var eur = data[0].price_eur;
        var usd = data[0].price_usd;
        var symbol = data[0].symbol;
        var amount = DOMelements.amount.value;
        !amount? amount=1:null;
        DOMelements.currency.value === 'EUR' ? DOMelements.result.textContent = `${amount} ${symbol} = ${amount*eur} EUR` : null;
        DOMelements.currency.value === 'USD' ? DOMelements.result.textContent = `${amount} ${symbol} = ${amount*usd} USD` : null;

    });


});
