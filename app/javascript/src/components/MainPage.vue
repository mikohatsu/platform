<template>
  <div class="l-main">
    <h1 class="c-title">Platform Name</h1>
    <div class="c-grid">
      <router-link 
        v-for="(item, index) in menuItems" 
        :key="index"
        :to="item.path"
        class="c-card"
      >
        <div class="c-card__icon">
          <i :class="item.icon"></i>
        </div>
        <h2 class="c-card__title">{{ item.title }}</h2>
        <p class="c-card__description">{{ item.description }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      menuItems: [
        {
          title: '검색',
          description: '원하는 정보를 빠르게 찾아보세요',
          path: '/search',
          icon: 'fas fa-search'
        },
        {
          title: '컨텐츠 1',
          description: '첫 번째 컨텐츠 설명',
          path: '/content1',
          icon: 'fas fa-play-circle'
        },
        {
          title: '컨텐츠 2',
          description: '두 번째 컨텐츠 설명',
          path: '/content2',
          icon: 'fas fa-book'
        },
        // 필요한 만큼 메뉴 아이템 추가
      ]
    }
  }
}
</script> 