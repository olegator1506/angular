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

export class PlayList {
    constructor(
        public uid :number,
        public type:string,
        public title : string,
        public description:string,
        public created:string,
        public modified:string,
        public trackCount:number,
        public duration:number,
        public cover:Cover
    ){};     
};

export class Collection {
    constructor(
        public feeds : PlayList[],
        public landings : PlayList[],
        public playlists :PlayList[] 
    ){}
}

