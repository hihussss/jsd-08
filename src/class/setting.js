export class Setting{
    constructor(){
        
        this.theme = 'dark';
        this.music = 'trance';
        this.difficulty = 'easy';
        this.settings = new Map([['theme',this.theme],['music',this.music],['difficulty',this.difficulty]]);

    }
    
    
    changeSetting(){
        this.settings.clear();
        for (let arg of arguments[0]) {
           
             this.settings.set(arg[0],arg[1]);     
        }
        
        console.log(this.settings);   
    }
}




