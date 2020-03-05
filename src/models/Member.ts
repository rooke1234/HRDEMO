export class Member {
    _id: string;
    idNumber: string;
    tHName: string;
    department: string;
    function: string;
    dateOfBirth: Date;
    address: string;
    education: string;
    dateOfExpiry: Date;
    picture: string;
    phoneNumber: string;
    
}

export const MemberLst: Member[] =
    [
        {
            _id: "0001",
            idNumber: "0123456789123",
            tHName: "นายกฤษณะ ตระกูลพรหม",
            department: "Ibar",
            function: "เด็กเสิร์ฟ",
            dateOfBirth: null,
            address: null,
            education: null,
            dateOfExpiry: null,
            picture: "../../assets/imgs/man.png",
            phoneNumber: "0837325693",
            
        },
        {
            _id: "0002",
            idNumber: "0123456789123",
            tHName: "นายวรพุทธิ์ แสงชาติ",
            department: "Standby",
            function: "บาร์น้ำ",
            dateOfBirth: null,
            address: null,
            education: null,
            dateOfExpiry: null,
            picture: "../../assets/imgs/man.png",
            phoneNumber: "0854579229",
            
        },
    ]