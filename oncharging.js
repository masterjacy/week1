var invoices = [];
function newInvoice() {
    var date = document.getElementById("invoice-date").value;
    var sender = document.getElementById("invoice-sender")
        .value;
    var recipient = (document.getElementById("invoice-recipient")).value;
    var element = document.getElementById("ordered");
    var ordered = element.checked;
    var amount = parseFloat(document.getElementById("amount").value);
    var currency = document.getElementById("currency").value;
    var category = document.getElementById("category").value;
    var newInvoice = {
        date: date,
        sender: sender,
        recipient: recipient,
        ordered: ordered,
        amount: amount,
        currency: currency,
        category: category,
    };
    invoices.push(newInvoice);
    var output = JSON.stringify(invoices, null, 4);
    document.getElementById("invoices").innerHTML = output;
}
function newMonth() {
    //array of arrays
    //put current array in the year array
    //and create a fresh array for that month
}
function getOnchargingPerMonth(month) {
    //loop through array
    //if date === current month
    //if recipient === Brokkr 
    //-> payment info
    //else if ordered
    // -> service contract
    //else
    // sum up with people -> oncharge amount
    //calculate payment info fee
    //calculate service info fee
    //oncharge amount - payment info fee - service info fee = mgmt/dev costs
}
