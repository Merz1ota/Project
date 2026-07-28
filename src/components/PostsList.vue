<script lang="ts" setup>
import { onMounted } from 'vue'
import PostListItem from './PostListItem.vue'

import { useLoading } from '@/composables/useLoading'

import { useCounterStore } from '@/store/store.ts'
import { storeToRefs } from 'pinia'
import router from '@/router/'

const store = useCounterStore()

const { mutatedPosts } = storeToRefs(store)
const { fetchData } = store

const { loadingData, isLoading,
  // isError, error
} = useLoading(fetchData)

function handlePostClick(e: Event) {
  const target = e.target as HTMLElement
  const postElem = target.closest('.list-item')
  if (postElem) {
    const id = Number(postElem.firstChild?.textContent)
    router.push(`/${id}`)
  }
}

onMounted(() => {
  if (!mutatedPosts.value.length) {
    loadingData()
  }
})
</script>

<template>
  <div v-if="isLoading">Загрузка...</div>
  <div class="posts-list" @click="handlePostClick" v-else>
    <PostListItem v-for="post in mutatedPosts" :key="post.id" :post="post" />
  </div>
</template>

<style scoped>
.posts-list {
  display: flex;
  flex-direction: column;
}
</style>
