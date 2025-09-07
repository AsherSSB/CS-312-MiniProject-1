const blogContainer = document.getElementById('blog-main-container');
const newBlogForm = document.getElementById("new-blog-container");

newBlogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formData = new FormData(newBlogForm);

    blogData = {
        title: formData.get('title'),
        content: formData.get('content'),
        time: new Date().toLocaleString(),
        author: formData.get('author')
    }
    
    addBlog(blogData);
})

function addBlog(blog) {
    blogContainer.insertAdjacentHTML('beforeend', `<div class="blog-container"> 
                        <div class="blog-title">${blog.title}</div>
                        <div class="blog-content">${blog.content}</div>
                        <div class="blog-time">Posted at: ${blog.time} By: ${blog.author}</div>
                    </div>`);
}
