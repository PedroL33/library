let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        if(read) {
            console.log(title + " by " + author + ", " + pages + " pages, read.");
        } else {
            console.log(title + " by " + author + ", " + pages + " pages, not yet read.");
        }
    }
}

function addBookToLibrary() {
    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    if(document.getElementById("read").checked) {
        var read = true
    }else {
        var read = false
    }
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
    render();
}

function render() {
    var container = document.getElementById("books");
    container.innerHTML = "";
    for(var i = 0, len = myLibrary.length; i < len; i++) {

        var bookContainer = document.createElement("div");
        bookContainer.className = "bookContainer"

        var title = document.createElement("div");
        title.innerHTML = myLibrary[i].title

        var author = document.createElement("div");
        author.innerHTML = "By: " + myLibrary[i].author

        var pages = document.createElement("div");
        pages.innerHTML = myLibrary[i].pages + " pages."

        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);


        var deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerHTML = "Delete";
        deleteButton.id = i;
        deleteButton.addEventListener("click", function(e) {
            myLibrary.splice(e.target.id, 1)
            render();
        });

        var readButton = document.createElement("button")
        if(myLibrary[i].read) {
            readButton.innerHTML = "Read"
            readButton.className = "read"
        }else {
            readButton.innerHTML = "Not Read"
            readButton.className = "unread"
        }
        readButton.id = i;
        readButton.addEventListener("click", function(e) {
            if(myLibrary[e.target.id].read) {
                myLibrary[e.target.id].read = false;
            } else {
                myLibrary[e.target.id].read = true;
            }
            render();   
        });

        container.appendChild(bookContainer)
        bookContainer.appendChild(readButton)
        bookContainer.appendChild(deleteButton);

    }
}

function toggleForm() {
    var form = document.getElementById("newBookForm");
    if(form.style.display == "none") {
        form.style.display = "flex";
    }else {
        form.style.display = "none";
    }
}