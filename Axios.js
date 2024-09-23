function getPosts(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response =>{
        const posts = response.data;
        const postList = document.getElementById('post-list');    

        postList.innerHTML = '';

        posts.forEach(post =>{
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            
            `;
            postList.appendChild(postElement);
        })
    })
    .catch(error => {
        console.error('Erro ao buscar os posts:', error)
    });
    
}

window.onload = getPosts;
