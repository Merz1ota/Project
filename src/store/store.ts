import { defineStore } from 'pinia'
import { api } from '@/api/placeholderApi'

import type { Comment, MapComments, MapUsers, Post, User } from '@/types/variables'

const { postsApi, usersApi, commentsApi } = api

export const useCounterStore = defineStore('counter', {
  state: () => ({
    posts: [] as Post[],
    users: [] as User[],
    comments: [] as Comment[],
  }),

  getters: {
    mutatedPosts: (state) => {
      const mapUsers = state.users.reduce((acc: MapUsers, user: User) => {
        acc[user.id] = user.name
        return acc
      }, {})

      const mapComments = state.comments.reduce((acc: MapComments, comment: Comment) => {
        if (!acc[comment.postId]) {
          acc[comment.postId] = 0
        }
        acc[comment.postId] += 1
        return acc
      }, {})

      const mapPosts = state.posts.map((post: Post) => {
        const userName = mapUsers[post.userId]
        const count = mapComments[post.id]
        return {
          id: post.id,
          title: post.title,
          userName: userName,
          commentsCount: count,
        }
      })
      return mapPosts
    },

    getPostById: (state) => (id: number) => {
      return state.posts.find((post) => post.id === id)
    },
  },

  actions: {
    fetchData() {
      const result = Promise.all([
        postsApi.getPosts(),
        usersApi.getUsers(),
        commentsApi.getComments(),
      ])
      return result
        .then(([posts, users, comments]) => {
          this.posts = posts
          this.users = users
          this.comments = comments
        })
        .catch((err) => {
          console.error('Ошибка получения всех промисов в Promise.all: ' + err)
        })
    },
  },
})
