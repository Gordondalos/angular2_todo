export interface ITodo{
    id: number;
    title: string;
    done: boolean;
}

export class Todo implements  ITodo{

    id: number;
    title: string;
    done: boolean;

    constructor(title: string){
        this.title = title;
        this.done = false;
    }

    // donefunc(done: boolean){
    //     this.done = done;
    // }
}