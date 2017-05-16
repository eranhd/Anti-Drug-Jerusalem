//this models will describe user class.
export class User{

    id:string;
    name:string;
    photoUrl:string;
    role:Role;
    area: string;
    _sons:string[];

    constructor(id?:string){
        if(id)
            this.getUser(id);
        this.name = 'eran';
        this.photoUrl = null;
        this.role = new Role(1, 'admin');
        this._sons = []; 
    }


    public getUser(id:string){
        
    }

    public addSon(son:string){
        this._sons.push(son);
    }

    get son(){
        return this._sons;
    }


};

export class Role{

    private type:number;
    private name:string;
    

    constructor(type:number, name:string){
        this.type = type;
        this.name = name;
    };

    public canDirect(path){
        
    }
};