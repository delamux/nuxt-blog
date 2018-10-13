<template>
    <div class="posts-page">
        <PostList :posts="loadedPosts"/>
    </div>
</template>
<script>
import PostList from '@/components/Posts/PostList'
export default {
    components: {
        PostList
    },
    asyncData(context) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
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
                })
            }, 1000)
            // reject(new Error())
        })
        .then(data => {
            return data
        })
        .catch(e => {
            context.error(e)
        })
    }
}
</script>
<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
