const blogContainer = document.getElementById('blog-main-container');
const newBlogForm = document.getElementById('new-blog-container');
const timeDisplays = document.querySelectorAll('.blog-time');
const serverURL = window.location.origin;

timeDisplays.forEach(element => {
    let defaultTime = element.innerHTML;
    const newTime = new Date(defaultTime);    
    let localTime = newTime.toLocaleString();
    element.innerHTML = localTime;
});

newBlogForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(newBlogForm);

    let blogData = {
        title: formData.get('title'),
        content: formData.get('content'),
        time: new Date().toLocaleString(),
        author: formData.get('author')
    }
    
    addBlog(blogData);
})

function addBlog(blog) {
    fetch(serverURL+'/api/post-blog', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: blog.title,
            content: blog.content,
            author: blog.author
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`)
        }
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('Error: ', error));

    newBlogForm.insertAdjacentHTML('beforebegin', `<div class='blog-container'> 
                        <div class='blog-title'>${blog.title}</div>
                        <div class='blog-content'>${blog.content}</div>
                        <div class="blog-footer">
                            <span class="blog-time-container">Posted at: <span class=blog-time>${blog.time}</span></span>
                            <span class="blog-author">By: ${blog.author}</span>
                        </div>
                    </div>`);
}
