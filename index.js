class Stack {
    constructor()
    {
        this.items = [];
        this.size = 0
    }
    
push(element)
{
    
    this.items.push(element);
    this.size += 1
}

pop()
{
    this.size -= 1
    if (this.items.length > 0)
    
    return this.items.pop();
}




}

let mstack = new Stack()


mstack.push(1);
mstack.push(2);
mstack.push(3);
mstack.pop();


module.exports = Stack