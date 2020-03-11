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
    salary: string;
    gen_salary: string;
    working_hours: string;
    social_security: null;
    trial: null;
    CL: string;
    salary2: string;
    
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
            salary: "2,000",
            gen_salary: null,
            working_hours: null,
            social_security: null,
            trial: null,
            CL : "500",
            salary2: "1,500",
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
            salary: "6,000",
            gen_salary: null,
            working_hours: null,
            social_security: null,
            trial: null,
            CL: "200",
            salary2: "5,800",
        },
    ]