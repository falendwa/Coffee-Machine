const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false
};

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Coffee machine is ready.");
            } else {
                reject("Sorry, the machine is busy");
            }
        }, 2000);
    });
};
    

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stock available. Start making coffee.");
            } else {
                reject("Stock not available");
            }
        }, 3000);
    });
};

const brewCoffee = () => {
    console.log("Making your coffee...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Coffee is ready!");
        }, 10000);
    });
};



function makeEspresso(){
    checkAvailability()
        .then((value) => {
            console.log(value);
            return checkStock();
        })
        .then((value) => {
            console.log(value);
            return brewCoffee();
        })
        .then((value) => {
            console.log(value);
            state.isCoffeeMachineBusy = false;
        })
        .catch((rejectReason) => {
            console.log(rejectReason);
            state.isCoffeeMachineBusy = false;
        })
}

makeEspresso();
