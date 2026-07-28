import { ref } from 'vue'

export function useLoading(fn: Function) {
  const isLoading = ref(false)
  const isError = ref(false)
  const error = ref<null | Error>(null)

  const loadingData = async () => {
    try {
      isLoading.value = true
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(fn())
        }, 2000)
      })

      if (result) {
        return result
      }
      throw new Error('Ошибка загрузки ресурса')
    } catch (err) {
      isError.value = true
      error.value = err as Error
    } finally {
      isLoading.value = false
    }
  }

  return {
    loadingData,
    isLoading,
    isError,
    error,
  }
}
