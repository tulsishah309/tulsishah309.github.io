showNotes();
let addnote = document.getElementById("addnote");
addnote.addEventListener('click',function(e){
    
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem('notes');
    console.log(notes)
    if (notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value=""
    showNotes();
   
});
function showNotes(){
    
    let notes = localStorage.getItem('notes');
    if (notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = " "
    notesObj.forEach(function(element,index) {
       
        html += `
        <div class="my-2 mx-2 noteCard" style="width: 18rem;">
          <div class="noteCard-body">
            <h5 class="noteCard-title">Note ${index+1}</h5>
            <p class="noteCard-text">${element}</p>
            <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)" >Delete Note</button>
          </div>
          </div>`;
         
    });
    let notesEle = document.getElementById('notes');
    if(notes.length!=0)
    {
        notesEle.innerHTML = html ;
    }
    else{
        notesEle.innerHTML = 'nothing to show!!'
    }

}
function deleteNote(index){
    
    let notes = localStorage.getItem('notes');
    if (notes == null)
    {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes()


}
let searchtxt = document.getElementById("searchtxt");
searchtxt.addEventListener("input",function(){
    let inputVal = searchtxt.value.toLowerCase();
    
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
       
        let txt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if (txt.includes(inputVal)){
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }

    })
    
})