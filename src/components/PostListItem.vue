<script lang="ts" setup>
import type { NewPost } from '@/types/variables'

defineProps<{
  post: NewPost
}>()
</script>

<template>
  <div class="list-item">
    <div>{{ post.id }}</div>
    <div><span>Название: </span>{{ post.title }}</div>
    <div><span>Имя:</span>{{ post.userName }}</div>
    <div><span>Комментов: </span>{{ post.commentsCount }}</div>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  gap: 15px;
}
.list-item:hover {
  background-color: rgba(128, 128, 128, 0.5);
  cursor: pointer;
}

span {
  color: green;
  margin-right: 10px;
}
</style>
