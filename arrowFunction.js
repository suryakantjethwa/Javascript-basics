

obj = {
    name :"Surya",
    getName : function(){
        console.log(this.name);
        function fullName(){
            console.log('nested fun',this.name); // prints undefined - reason is "this" lost its context in the nested method 
        } // Convert this function to arrow function this will remember the "this" context from parent scope
        fullName();
    }
}

obj.getName();

obj = {
    name :"Salesforce",
    getName : function(){
        console.log(this.name);
        const fullName = () => {
            console.log('nested fun',this.name); 
        } 
        fullName();
    }
}

obj.getName();