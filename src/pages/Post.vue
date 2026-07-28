<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/store/store'
import type { Post } from '@/types/variables'
import router from '@/router'

const { getPostById } = useCounterStore()

const param = useRoute()

const post = ref<Post>()

onMounted(() => {
  const postById = getPostById(Number(param.params.id))
  if (!postById) {
    router.push('/')
  }
  post.value = postById
})
</script>

<template>
  <div class="post-container">
    <div><span>POST:</span> {{ post?.title }}</div>
    <div><span>Описание: </span>{{ post?.body }}</div>
    <div><span>ID пользователя поста: </span>{{ post?.userId }}</div>
  </div>
</template>

<style scoped>
.post-container {
  display: flex;
  flex-direction: column;
}

span {
  color: red;
}
</style>
