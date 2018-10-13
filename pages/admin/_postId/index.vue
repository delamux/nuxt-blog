<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
        </section>
    </div>
</template>
<script>
    import AdminPostForm from '@/components/Admin/AdminPostForm'
    export default {
        layout: 'admin',
        components: {
            AdminPostForm,
        },
        data() {
            return {
                loadedPost: {
                    author: 'Luis',
                    title: 'My post',
                    content: 'My primer post',
                    thumbnailLink: 'https://siliconangle.com/wp-content/blogs.dir/1/files/2015/09/code1.png'
                }
            }
        }
    }
</script>
<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
