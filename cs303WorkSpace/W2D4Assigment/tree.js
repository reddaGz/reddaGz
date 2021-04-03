
function contains(root,target){
    if(root.value===target){
        return true;
    }
    else{
        for(let value of root.descendents ){
          return  contains(value,target)
        }
        return false
    }
}

function findSubtree(root,target){
    if(root.value===target){
        return root;
    }
    else{
        for(let value of root.descendents ){
          return  findSubtree(value,target)
        }
        return 
    }
}
function  treeModifier(root, modiferFunc){
     if(root.value)
         root.value= modiferFunc(root)
        for(let node of root.descendents ){
             treeModifier(node,modiferFunc)
        }
    }

function allCaps(node){
   return node.value.toUpperCase()
}
function addStar(node){
    return "***"+node.value+"***"
}
function reverseValue(node){
    let reverse=""
    for(let i=node.value.length-1;i>=0;i--){
        reverse+=node.value[i]
    }
    return reverse;
}
function treeCollector(root,collector=[]){
    if(root.value)
         collector.push(root.value)
        for(let node of root.descendents ){
            treeCollector(node,collector)
        }
        return collector
}
function TreeNode(value) { 
    this.value = value;
    this.descendents = []; 
}

    // create nodes with values
    const abe = new TreeNode('Abe');
    const homer = new TreeNode('Homer'); 
    const bart = new TreeNode('Bart');
    const lisa = new TreeNode('Lisa');
    const maggie = new TreeNode('Maggie');
     abe.descendents.push(homer); 
    homer.descendents.push(bart, lisa, maggie);
    //console.log(Object.entries(abe)) 
    //console.log(abe.value)
    //console.log("abe values"+abe)
    // console.log(homer.descendents)
    //console.log(abe.descendents[])
    console.log("==================Tree collector================================")
    console.log(treeCollector(abe))
    console.log("====================contains==============================")
     console.log(contains(abe,"Bart"))//true
     console.log(contains(abe,"Redda"))//false
     console.log("====================findSubtree==============================")
     console.log(findSubtree(abe,"Homer"))
    console.log("==================treeModifier allCaps ================================")
     treeModifier(abe,allCaps)
     console.log(homer)//all must be capital after calling the tree modifier
     console.log("==================treeModifier  addStar================================")
     treeModifier(abe,addStar)
     console.log(abe)//all must include ***value***
     console.log("==================treeModifier reverseValue================================")
     treeModifier(abe,reverseValue)
     console.log(homer)
    

