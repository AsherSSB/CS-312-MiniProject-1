class BlogPost {
    constructor(author, title, content) {
        this.author = author;
        this.title = title;
        this.content = content;
        this.time = new Date();
    }
}

module.exports = BlogPost;
