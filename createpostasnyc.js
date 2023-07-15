const post = async() => {
    const createPost = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("posts")
        },2000)
    })

    const createPost1 = new Promise((resolve,reject) => resolve("POST1"));

    const createPost2 = new Promise((resolve,reject) => resolve("POST2"));

    const deletePost = new Promise((resolve,reject) => resolve("delete"));

    let postss = await createPost;

    console.log("POST creation started")

    let post1 = await createPost1;

    console.log("POST 1 created")

    let post2 = await createPost2;

    console.log("POST 2 created")

    let delete1 = await deletePost;

    console.log("Posts deleted")

    return post
}

post().then((t) => console.log("Everything is done"))


