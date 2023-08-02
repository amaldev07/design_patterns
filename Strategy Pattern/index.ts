/* We use this pattern to switch Strategy very quickly */

function Fedex() {
    this.calculatee = package => {
        return 1;
    }
}

function Ups() {
    this.calculatee = package => {
        return 2;
    }
}

function Usps() {
    this.calculatee = package => {
        return 3;
    }
}

const fedex = new Fedex();
const ups = new Ups();
const usps = new Usps();
/* we can call calculate() method of each ByteLengthQueuingStrategy 
fedex.calculate();
ups.calculate();
usps.calculate();

but what we need is we need to call this calculate()
from a single place, for that we use Strategy design pattern 
*/
function Shipping() {
    this.company;
    this.setStrategy = company => {
        this.company = company;
    }
    this.calculate = package => {
        return this.company.calculate(package);
    }
}

let package = { from: 'Blr', to: 'Hyd', cost: 1.23 };

const shipping = new Shipping();

shipping.setStrategy(fedex);
shipping.calculate(package);

shipping.setStrategy(ups);
shipping.calculate(package);

shipping.setStrategy(usps);
shipping.calculate(package);



