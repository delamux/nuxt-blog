<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList
        :posts="loadedPosts"
      isAdmin/>
    </section>
  </div>
</template>
<script>
  import PostList from "@/components/Posts/PostList";
  import AppButton from "@/components/UI/AppButton";
 
  export default {
    layout: 'admin',
    components: {
      AppButton,
      PostList
    },
    asyncData(context, callback) {
      setTimeout(() => {
        callback(null, {
            loadedPosts: [
              {
                id: '1',
                author: 'Nikolai',
                title: 'My awesome Post',
                thumbnail: 'https://cdn.techinasia.com/wp-content/uploads/2017/06/47724337_l.jpg',
                previewText: "Top Post",
                content: 'Super amazing! \n thanks for that!'
              },
              {
                id: '2',
                author: 'Nikolai',
                title: 'My awesome Post',
                thumbnail: 'https://cdn.techinasia.com/wp-content/uploads/2017/06/47724337_l.jpg',
                previewText: "Top Post",
                content: 'Super amazing! \n thanks for that!'
              }
            ]
          }
        )
      }, 1500)
    }
 
  }
</script>
<style scoped>
  .admin-page {
    padding: 20px;
  }
 
  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }
 
  .existing-posts h1 {
    text-align: center;
  }
</style>