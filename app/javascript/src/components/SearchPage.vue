<template lang="pug">
.l-search
  .c-search
    .c-search__logo
      router-link.c-search__home-link(to="/search") Search Files
    
    .c-search__container
      .c-search__box
        i.fas.fa-search.c-search__icon
        input.c-search__input(
          type="text"
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          placeholder="検索語を入力してください..."
        )
        i.fas.fa-times.c-search__clear(
          v-if="searchQuery"
          @click="clearSearch"
        )
      
      button.btn.btn--primary(
        @click="handleSearch"
      ) 検索
    
    .c-search__results(
      v-for="(id, data) in searchResults"
      )
      .c-search__query(
        style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;"
      )
        | 検索結果: {{ id.result }}
</template>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      searchQuery: '',
      searchResults: null
    }
  },
  methods: {
    async handleSearch() {
      if (this.searchQuery.trim()) {
        try {
          const response = await fetch(`/excel/search/searches?q=${encodeURIComponent(this.searchQuery)}`)
          // 검색 결과 처리
          const { status, data } = await response.json()
          
          if(status === 200) {
            this.searchResults = data
            console.log(this.searchResults)
          } else {
            throw new Error("Bad Request")
          }
        } catch (error) {
          console.error('검색 중 오류 발생:', error)
        }
      } else {
        alert("検索語を入力してください!!")
      }
    },
    clearSearch() {
      this.searchQuery = ''
    }
  }
}
</script>