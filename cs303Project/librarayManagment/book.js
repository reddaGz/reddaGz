/**
   * Books class
   */
 class Book {
    /**
     *
     * @param {Number} bookId is bookId;
     * @param {String} title is title;
     * @param {Object} author is author;
     */
    constructor(bookId, title, author) {
      this. setBookId(bookId)
      this.setTitle(title)
      this.setAuthor(author)
    }
    setBookId(bookId) {
      this.bookId = bookId;
    }
    setTitle(title) {
      this.title = title;
    }
    setAuthor(author) {
      this.author = author;
    }
    getBookId() {
      return this.bookId;
    }
    getTitle() {
      return this.title;
    }
    getAuthor() {
      return this.author;
    }
  }