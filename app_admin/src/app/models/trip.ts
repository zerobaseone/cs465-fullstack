export interface Trip {
    _id: string;
    code: string;
    start: string | Date;
    name: string;
    resort: string;
    length: string;
    perPerson: string;
    image: string;
    description: string;
}