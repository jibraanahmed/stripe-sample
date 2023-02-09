const Stripe = require('stripe');
const config = require('./config.json');
const stripe = Stripe(config.sk_key);

async function RetreiveData() {
    var charge = await stripe.charges.retrieve(
        config.charges_key,
        {
            apiKey: config.sk_key
        }
    );
    console.log(charge);
}
async function GetBalance() {
    const stripe = Stripe(config.sk_key);
    stripe.balance.retrieve(function (err, balance) {
        console.log(balance)
    });
}

async function GetProductList() {
    const stripe = Stripe(config.sk_key);

    const products = await stripe.products.list({
        limit: 3,
    });
    console.log(products)
}

async function GetPriceList() {
    const stripe = Stripe(config.sk_key);
    const prices = await stripe.prices.list({
        limit: 3,
    });
    console.log(prices)
}

GetPriceList()
GetProductList()
RetreiveData()
GetBalance()