class BlogPost {
    constructor(author, title, content) {
        this.author = author;
        this.time = new Date();
        this.title = title;
        this.content = content;
    }
}

module.exports = BlogPost;
