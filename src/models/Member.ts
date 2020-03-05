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
    salary: number;
    gen_salary: string;
    working_hours: string;
    social_security: null;
    trial: null;
    
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
            salary: null,
            gen_salary: null,
            working_hours: null,
            social_security: null,
            trial: null,
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
            salary: null,
            gen_salary: null,
            working_hours: null,
            social_security: null,
            trial: null,
        },
    ]