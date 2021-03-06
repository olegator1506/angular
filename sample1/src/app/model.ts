

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
        public kind :number,
        public type:string,
        public title : string,
        public description:string,
        public created:string,
        public modified:string,
        public trackCount:number,
        public duration:number,
        public cover:Cover,
        public trackUids:number[]
    ){}; 
};
// Набор плейлистов (рекомендации, мои плейлисты и т.п.)
export class Collection {
    constructor(
        public title :string,
        public playlists : PlayList[]
    ){}
    addPlaylist(pl : PlayList) {
        this.playlists.push(pl);
    }
}

export class YmData {
    public collections : Array<Collection> = []; 
    constructor(){}
    addCollection(title:string,playlists: PlayList[]) : void{
        this.collections.push(new Collection(title,playlists));
    }
    getCollection(num : number) : Collection {
        return this.collections[num];
    }
}

