type invoice = {
  date: string;
  sender: string;
  recipient: string;
  ordered: boolean;
  amount: number;
  currency: string;
  category: string;
};

let invoices: invoice[] = [];

function newInvoice() {
  var date = (<HTMLInputElement>document.getElementById("invoice-date")).value;
  var sender = (<HTMLInputElement>document.getElementById("invoice-sender"))
    .value;
  var recipient = (<HTMLInputElement>(
    document.getElementById("invoice-recipient")
  )).value;
  var element = <HTMLInputElement>document.getElementById("ordered");
  var ordered = element.checked;
  var amount = parseFloat(
    (<HTMLInputElement>document.getElementById("amount")).value
  );
  var currency = (<HTMLInputElement>document.getElementById("currency")).value;
  var category = (<HTMLInputElement>document.getElementById("category")).value;

  let newInvoice = {
    date: date,
    sender: sender,
    recipient: recipient,
    ordered: ordered,
    amount: amount,
    currency: currency,
    category: category,
  };
  invoices.push(newInvoice);
  console.log(invoices);
}

function newMonth() {
    //array of arrays
    //put current array in the year array
    //and create a fresh array for that month
}

function getOnchargingPerMonth(month: string) {
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