function bookPageLoad(){
    let addBtn=document.getElementById("addBook")
    let showTitleBtn=document.getElementById("showTitle")
    let showAuthorBtn=document.getElementById("showAuthor")
    let showIdBtn=document.getElementById("showId")
    let informationBtn=document.getElementById("information")
    let moreOptionBtn=document.getElementById("moreOption");
    let lessOptionBtn=document.getElementById("lessOption");
    let selSearch=document.getElementById("search");
    let selSort=document.getElementById("sort")
    selSort.onchange=sortBooks;
    selSearch.onchange= searchBook;
    addBtn.onclick=addBookToLibrary;
    showTitleBtn.onclick=showTitle;
    showAuthorBtn.onclick=showAuthor;
    showIdBtn.onclick=showId;
    informationBtn.onclick=showAllInformation;
    moreOptionBtn.onclick=showMoreOption;
    lessOptionBtn.onclick=lessOption;
}
/**
 * This sort method using id,title,author
 */
function sortBooks(){
    let sortResult=[];
    if(this.options[this.selectedIndex].text==="ById"){
        sortResult=booksList.sort((a,b)=>Number(a.id)-Number(b.id))
    }
    else if(this.options[this.selectedIndex].text==="ByTitle"){
        sortResult=booksList.sort((a,b)=>{
            let title1 = a.title.toLowerCase(),
             title2 = b.title.toLowerCase();
             if (title1 > title2) {
                return 1;
            }
           if (title1 < title2) {
            return -1;
          }
        return 0;  
        })
    }
    else if(this.options[this.selectedIndex].text==="ByAuthor"){
        sortResult=booksList.sort((a,b)=>{
            let author1 = a.author.toLowerCase(),
             author2 = b.author.toLowerCase();
             if (author1 > author2) {
                return 1;
            }
           if (author1 < author2) {
            return -1;
          }
        return 0;  
        })
    }
    let sortedBook=""
    for(let i=0;i<sortResult.length;i++){
        sortedBook+=i+1+" ."+ "Title: "+sortResult[i].title+" ,  Author: "+sortResult[i].author+
        "  , Id:"+sortResult[i].id+" \n";
    }
    document.getElementById("displayArea").value=sortedBook;   
}
/**
 * This search method using id,title,author
 */
function searchBook(){
    let searchResult="not available try again"
    if(this.options[this.selectedIndex].text==="ById"){
        let searchId=Number(document.getElementById("searchInput").value)
        for(let book of booksList){
            if(book.id===searchId){
                searchResult=1+" ."+ "Title: "+book.title+" ,  Author: "+book.author+
                "  , Id:"+book.id;
               break;
            }
        }
    }
    else if(this.options[this.selectedIndex].text==="ByTitle"){
        let searchTitle=document.getElementById("searchInput").value
        for(let book of booksList){
            if(book.title===searchTitle){
                searchResult=1+" ."+ "Title: "+book.title+" ,  Author: "+book.author+
                "  , Id:"+book.id;
               break;
            }
        }
    }
    else if(this.options[this.selectedIndex].text==="ByAuthor"){
        let searchAuthor=document.getElementById("searchInput").value
        for(let book of booksList){
            if(book.author===searchAuthor){
                searchResult=1+" ."+ "Title: "+book.title+" ,  Author: "+book.author+
                "  , Id:"+book.id;
               break;
            }
        }
    }
    document.getElementById("displayArea").value=searchResult;   
}
/**
 * This is simple method that displays for more option
 */
function showMoreOption(){
    let moreOptionList=document.getElementById("moreOptionList")
    
    moreOptionList.className= "moreOptionDisplay"; 
}
/**
 * This is simple method that displays for less option
 */
function lessOption(){
    let lessOptionList=document.getElementById("moreOptionList")
    lessOptionList.className="lessOptionDisplay";

}
/**
 * This is method that helps us to add books to the library
 */
function addBookToLibrary(){

    let newBook={};
    let bookTitle=document.getElementById("bookTitle").value;
    let bookAuthor=document.getElementById("bookAuthor").value;
    let libId=document.getElementById("libraryId").value;
    if(bookTitle===""||bookAuthor==="" ||libId===""){
        alert("insert value before you add")
    }
    else{
        newBook.title=bookTitle;
        newBook.author=bookAuthor
        newBook.id=Number(libId);
        booksList.push(newBook);
        document.getElementById("bookTitle").value="";
        document.getElementById("bookAuthor").value="";
        document.getElementById("libraryId").value="";
        alert("add successfully")
    }
}
/**
 * This is a method that help us to display all book information in the library
 */
function showAllInformation(){
    let bookInfo=""
    for(let i=0;i<booksList.length;i++){
        bookInfo+=i+1+" ."+ "Title: "+booksList[i].title+" ,  Author: "+booksList[i].author+
        "  , Id:"+booksList[i].id+" \n";
    }
    document.getElementById("displayArea").value=bookInfo;
}
/**
 * This is a method that help us to display all title of the book in the library
 */
function showTitle(){
    let title=""
    let i=0;
let sortedByTitle=booksList.sort((a,b)=>{
    if(a.title>b.title) return 1
    else if(a.title<b.title) return -1
    else return 0;

})
    for(let i=0;i<sortedByTitle.length;i++){
        title+=i+1 +"."+(sortedByTitle[i].title+"\n" )
    }
    document.getElementById("displayArea").innerHTML=title;
}
/**
 * This is a method that help us to display all author of the book in the library
 */
function showAuthor(){
    let author=""
    let sortedByAuthor=booksList.sort((a,b)=>{
        if(a.author>b.author) return 1;
        else if(a.author<b.author) return -1
        else return 0
    })
    for(let i=0;i<sortedByAuthor.length;i++){
        author+=i+1 +"."+(sortedByAuthor[i].author+"\n" )
    }
    document.getElementById("displayArea").innerHTML=author;
}
/**
 * This is a method that help us to display all id of the book in the library
 */
function showId(){
    let id=""
    let sortedById=booksList.sort((a,b)=>a.id-b.id)
    for(let i=0;i<booksList.length;i++){
        id+=i+1 +"."+(booksList[i].id+"\n" )
    }
    document.getElementById("displayArea").value=id;
}

function init(){
    window.onload = bookPageLoad; 
}
//this Array of book list
let booksList=[
    { title: "The Road Ahead", author: "Bill Gates", id: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", id: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins",id: 3245 }
];
init();