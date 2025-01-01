<template lang="pug">
.l-search
  .c-search
    .c-search__logo
      router-link.c-search__home-link(to="/") Platform
    
    .c-search__container
      .c-search__box
        i.fas.fa-search.c-search__icon
        input.c-search__input(
          type="text"
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          placeholder="검색어를 입력하세요..."
        )
        i.fas.fa-times.c-search__clear(
          v-if="searchQuery"
          @click="clearSearch"
        )
      
      button.btn.btn--primary(
        @click="handleSearch"
      ) 검색
    
    .c-search__results(v-if="searchResults")
      .c-search__query(v-if="searchResults.query")
        | 검색어: {{ searchResults.query }}
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