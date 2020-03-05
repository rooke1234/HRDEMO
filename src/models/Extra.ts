export class Extra {
    type: string;
    amount: number;
    time: Date | number | string;
}

export class roomsExtra {
    roomNumber: string;
    lstExtra: Extra[];
}

export const lstRoomsExtra: roomsExtra[] =
    [
        {
            roomNumber: "519",
            lstExtra: [
                {
                    type: "minibar",
                    amount: 40,
                    time: Date.now(),
                },
                {
                    type: "ซักผ้า",
                    amount: 50,
                    time: Date.now(),
                },
            ],
        },
        {
            roomNumber: "619",
            lstExtra: [
                {
                    type: "ซักผ้า",
                    amount: 100,
                    time: Date.now(),
                },
                {
                    type: "ซักผ้า",
                    amount: 50,
                    time: Date.now(),
                },
            ],
        },
        {
            roomNumber: "719",
            lstExtra: [
                {
                    type: "minibar",
                    amount: 100,
                    time: Date.now(),
                },
                {
                    type: "minibar",
                    amount: 10,
                    time: Date.now(),
                },
            ],
        },
    ]