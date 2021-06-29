export class Track {
    constructor(
        public id? : number,
        public name? : string,
        public artist? : string,
        public duration? : number,
        public coverUrl? : string,
        public ogImage? : string
    ){}
}

export class Cover {
    constructor(
       public type? : string, 
       public dir? : string, 
       public version? : number, 
       public custom? : boolean, 
       public uri? : string 
       ){}
}

export class Feed {
    private _flag : boolean = false;
    constructor(
        public uid :number,
        public type:string,
        public title : string,
        public description:string,
        public created:string,
        public modified:string,
        public cover:Cover,
//        public tracks? : Array<Track> 
    ){
        this._flag = true;
    };     
};
export class Feeds {
    constructor(public feeds : Feed[]){}
}