export interface Patient{
    id:string;
    name:string;
    birthday:Date;
    height:number;
    address:string; 
    gps:any;
}
export interface Patient_visit{
    weight:number;
    temperature:number, 
    pressure:number, 
    saturation_level:number
}

