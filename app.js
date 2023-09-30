let input=prompt("what whould you like to do");
const todos=["buy chickens","do homework"];
while(input!== "quit"&&input!="q"){
    if(input==="list"){
        console.log("*****************");
        for(let i=0; i<todos.length; i++){
            console.log( `${i}: ${todos[i]}`);
        }
        console.log("*****************");
    }
    else if(input==="new"){
        const newTodo=prompt("Ok What new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input==="delete"){
        const indexstr=prompt("Ok, Enter Index to delete:");
        const index=parseInt(indexstr);
        if(!Number.isNaN(index)){
            todos.splice(index,1);
            console.log(index);
        }
        else{
            console.log("Unknown Index");
        }
        
    }
    input=prompt("what whould you like to do");
}
console.log("Ok you quit the app");