class BlogPost {
    constructor(id, author, title, content) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.content = content;
        this.time = new Date();
    }
}

module.exports = BlogPost;
