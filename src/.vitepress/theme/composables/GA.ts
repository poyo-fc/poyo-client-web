import { watch } from 'vue'
import { useRouter } from 'vitepress'

export function useGA(): void {
  const router = useRouter()

  if (typeof window !== 'undefined' && window.gtag) {
    watch(() => router.route.data.relativePath, (path) => {
      window.gtag('set', 'page_path', path)
      window.gtag('event', 'page_view')
    }, { immediate: true })
  }
}
