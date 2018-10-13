<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the lastest news</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>
<script>
  import PostList from '@/components/Posts/PostList'
  export default {
    components: {
      PostList
    },
    asyncData(context, callback) {
      console.log(context)
      setTimeout(() => {
        callback(null, {
          loadedPosts: [
            {
              id: '1',
              title: 'Mi first post',
              thumbnail: 'https://siliconangle.com/wp-content/blogs.dir/1/files/2015/09/code1.png',
              previewText: 'This is my first post'
            },
            {
              id: '2',
              title: 'Mi second post',
              thumbnail: 'https://siliconangle.com/wp-content/blogs.dir/1/files/2015/09/code1.png',
              previewText: 'This is my second post'
            },
          ]
        }, 1500)
      }) 
    }
  }
</script>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

</style>
