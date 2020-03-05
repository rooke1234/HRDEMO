export class Checkout {
    roomNumber: string;
    name: string;
    phone: string | number;
    arrivalDateTime: Date | number;
    departureDateTime: Date | number;
}

export const lstCheckout: Checkout[] =
    [
        {
            roomNumber: "425",
            name: "Woraput Sangchart",
            phone: "0857579229",
            arrivalDateTime: Date.now(),
            departureDateTime: Number(Date.now() + 86400000),
        },
        {
            roomNumber: "405",
            name: "John Doe",
            phone: "0895579559",
            arrivalDateTime: Number(Date.now() + (86400000 * 3)),
            departureDateTime: Number(Date.now() + (86400000 * 5)),
        },
    ]