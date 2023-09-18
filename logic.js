function addbook() {
    bookname = bname.value
    author = bauthor.value
    detail = book.value
    cover = image.value

    if (bookname in localStorage) {
        alert("alredy their")
    }
    else {
        b = { bookname, author, detail, cover }

        localStorage.setItem(bookname, JSON.stringify(b))
        alert('done')
    }
}


function home() {
    window.location = 'main.html'
}


function search() {
    BOOKNAME = bName.value

    if (BOOKNAME in localStorage) {
        BookDetails = JSON.parse(localStorage.getItem(BOOKNAME))
        r.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src=${BookDetails.cover} class="card-img-top w-50 ms-5 mt-4" alt="...">
  <div class="card-body">
    <p class="card-text">Book Name ${BookDetails.bookname}</p>
  </div>
  <div class="card-body">
    <p class="card-text">Book Author ${BookDetails.author}</p>
  </div>
</div>
      `
    }
    else {
        r.innerHTML = `<h1 class="text-danger">BOOK NOT FOUND
        </h1>`
    }
}




function login() {
  uname=uname.value
    email=email.value
    passwd=passwd.value
      
    if(email in localStorage){
       

         


      userObj=JSON.parse(localStorage.getItem(email))
      if(userObj.passwd==passwd){
       
        window.location="main.html"
           alert("login success")
      }
      else{
        alert("wrong passwd")
      }
    }
    else{
        alert("wrong email")
    }


}



function sigin() {
    email = email.value
    uname = uname.value
    passwd = passwd.value
    cpasswd = cpasswd.value


    if(passwd==cpasswd){
       alt.innerHTML=""
       
       
       user={email,uname,passwd} 
// console.log(user);
        if(email in localStorage){
        alert("email already used")
        window.location='main.html'
        }
        else{
            localStorage.setItem(email,JSON.stringify(user))

alert("registered successfully")
window.location='main.html'

        }

    }
    else{
        // alert("passwd not match")
        alt.innerHTML=`<p class="text-danger">passwd not matched</p>`
    }

       


}


