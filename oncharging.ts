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
  var recipient = (<HTMLInputElement>(document.getElementById("invoice-recipient"))).value;
  var orderedElement = <HTMLInputElement>document.getElementById("ordered");
  var ordered = orderedElement.checked;
  var amount = parseFloat((<HTMLInputElement>document.getElementById("amount")).value);
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
  
  var output = JSON.stringify(invoices, null, 4);

  const invoicesElement = document.getElementById("invoices");
  if (invoicesElement) {
      invoicesElement.innerHTML = output;
  } else {
      console.error("Element with ID 'invoices' not found.");
  }
  
  
}

function sendToGSheets(newInvoice: invoice) {
  //append a new row with the given invoice to GSheets
}

function getOnchargingPerMonth(month: string) {
    //get data for current month from GSheets into an array
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