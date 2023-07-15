function updateLastUserActivityTime () {
    return new Promise((resolve, reject) => {
      const startTime = new Date().getTime();
      setTimeout(function () {
        resolve(new Date().getTime());
      }, 1000);
    });
  };
  
function createPost() {
    return new Promise((resolve, reject) => {
      const startTime = new Date().getTime();
      setTimeout(function () {
        resolve({
          id: 1,
          name: "Rakesh",
          city: "bangalore"
          
         
        });
      }, 1000);
    });
  };
  
function deletePost(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  };
  

    const currentTime = new Date().getTime();
  
    Promise.all([createPost(), updateLastUserActivityTime()])
      .then(([post, lastActivityTime]) => {
        console.log("Time before creating post:", currentTime);
        console.log("Post created:", post);
        console.log("User's last activity time:", lastActivityTime);
        return deletePost(post.id);
      })

      .catch(error => {
        console.error("err", error);
      });

  