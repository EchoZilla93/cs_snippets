class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    insert(val){
        const newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left
                    }
                }else if(val > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }
    find(val){
        if(this.root === null) return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left
            }else if(val > current.val){
                current = current.right
            }else{
                found = true;
            }
            if(!found) return undefined;
            return current;
        }

    }
    //TRAVERSING
    breadthFirstSearch(){
        const data = [];
        const queue = [];
        let node = this.root;
        queue.push(node);
        while(queue.length){
          node = queue.shift();
          data.push(node.value); 
          if(node.left) queue.push(node.left);
          if(node.right) queue.push(node.right);
        }
        return data;
    }
}