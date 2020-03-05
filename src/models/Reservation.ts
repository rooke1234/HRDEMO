export class Reservation {
    name: string;
    phoneNumber: string;
    roomLst: string[];
    arrivalDateTime: Date;
    departureDateTime: Date;
    creationDateTime: Date;
    lastUpdate: Date;
}

export const ReservationLst: Reservation[] = [
    {
        name: "นายกฤษณะ ตระกูลพรหม",
        phoneNumber: "0837325693",
        roomLst: ["501", "502", "503", "504"],
        arrivalDateTime: new Date(2020, 1, 20),
        departureDateTime: new Date(2020, 1, 21),
        creationDateTime: new Date(2020, 1, 11),
        lastUpdate: null,
    },
    {
        name: "นายวรพุทธิ์ แสงชาติ",
        phoneNumber: "0854579229",
        roomLst: ["601"],
        arrivalDateTime: new Date(2020, 1, 19),
        departureDateTime: new Date(2020, 1, 22),
        creationDateTime: new Date(2020, 1, 12),
        lastUpdate: null,
    },
]