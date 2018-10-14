import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
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
            ])
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
