 export class Team {
    constructor(){
        this.members = new Set();
    }

    add(player){
        if (this.members.has(player)){
            throw new Error('Такой игрок уже есть в команде');
        }else{
            this.members.add(player);
        }
        
    }

    addAll(){
        for (let player of arguments){
            this.members.add(player);
        }
        
    }

    toArray(){
        return [...this.members];
    }
}





