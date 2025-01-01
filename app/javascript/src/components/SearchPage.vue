<template>
  <div class="l-search">
    <div class="c-search">
      <div class="c-search__logo">
        <router-link to="/" class="c-search__home-link">Platform</router-link>
      </div>
      <div class="c-search__container">
        <div class="c-search__box">
          <i class="fas fa-search c-search__icon"></i>
          <input 
            type="text" 
            class="c-search__input" 
            v-model="searchQuery"
            @keyup.enter="handleSearch"
            placeholder="검색어를 입력하세요..."
          >
          <i 
            v-if="searchQuery" 
            class="fas fa-times c-search__clear"
            @click="clearSearch"
          ></i>
        </div>
        <button 
          class="btn btn--primary"
          @click="handleSearch"
        >
          검색
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    async handleSearch() {
      if (this.searchQuery.trim()) {
        try {
          const response = await fetch(`/excel/search/searches?q=${encodeURIComponent(this.searchQuery)}`)
          // 검색 결과 처리
          const data = await response.json()
        } catch (error) {
          console.error('검색 중 오류 발생:', error)
        }
      }
    },
    clearSearch() {
      this.searchQuery = ''
    }
  }
}
</script>