const blogContainer = document.getElementById('blog-main-container');
const newBlogForm = document.getElementById('new-blog-container');
const timeDisplays = document.querySelectorAll('.blog-time');
const deleteButtons = document.querySelectorAll('.blog-delete');
const editButtons = document.querySelectorAll('.blog.edit');

const serverURL = window.location.origin;
const windowBlogData = window.blogs;

const blogsDivArray = Array.from(blogContainer.children);

deleteButtons.forEach(element => {
    element.addEventListener('click', () => deleteBlog(element.closest('.blog-container')));
});

editButtons.forEach(element => {
	element.addEventListener('click', () => editBlog(element.closest('.blog-container')));
});

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
});

function addBlog(blog) {
    fetch(serverURL+'/api/blog', {
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
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        window.location.reload();
    })
    .catch(error => console.log('Error: ', error));

}

function deleteBlog(blog) {
    const blogIndex = blogsDivArray.indexOf(blog);
    const blogId = windowBlogData[blogIndex]['id']; 

    fetch(serverURL+'/api/blog/'+blogId, {method: 'DELETE'})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        window.location.reload();
    })
    .catch(error => console.log('Error: ', error));
}

function editBlog(blog) {
    const blogIndex = blogsDivArray.indexOf(blog);
    const blogId = windowBlogData[blogIndex]['id']; 

}

