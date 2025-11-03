const bookTicket = () => {
    console.log("Welcome!");
    setTimeout(() => {
        console.log("Login Successful!");
        setTimeout(() => {
            console.log("seats has been selected successfully.");
            setTimeout(() => {
                console.log("Payment has been done successfully.");
                setTimeout(() => {
                    console.log("Your ticket has been booked.");
                    setTimeout(() => {
                        console.log("Thank you for visiting!");

                    }, 1000)
                }, 1000)
            }, 4000)

        }, 3000)
    }, 2000)
}
const printMessage = (message) => {
    console.log(message);
}
const waitFun = (sec, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            printMessage(message);
            resolve();
        }, sec)
    })
}
const bookTicketAsync = () => {
    printMessage("Welcome!")
    waitFun(2000, "Login Successful!")
        .then(() => waitFun(3000, "seats has been selected successfully."))
        .then(() => waitFun(4000, "Payment has been done successfully."))
        .then(() => waitFun(1000, "Your ticket has been booked."))
        .then(() => waitFun(1000, "Thankyou"))
}

