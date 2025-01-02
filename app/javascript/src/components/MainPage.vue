<template lang="pug">
.l-main
  h1.c-title そんじぇの遊び場
  .c-grid
    .c-card(
      v-for="(item, index) in menuItems"
      :key="index"
      @click="handleClick(item)"
    )
      .c-card__icon
        i(:class="item.icon")
      h2.c-card__title {{ item.title }}
      p.c-card__description {{ item.description }}
</template>

<script>
import router from '../router'

export default {
  name: 'MainPage',
  data() {
    return {
      menuItems: [
        {
          title: 'SUNGLE',
          description: 'あなたが探したい情報のファイルが検索できます',
          path: '/search',
          icon: 'fas fa-search',
          isReady: true
        },
        {
          title: 'ポケカAIデュアル',
          description: 'AIとポケモンカードゲームを楽しんでみましょう',
          path: '/content1',
          icon: 'fas fa-play-circle',
          isReady: false
        },
        {
          title: '単語QUIZ',
          description: '単語QUIZで日本語と韓国語を勉強してみましょう',
          path: '/content2',
          icon: 'fas fa-book',
          isReady: false
        }
      ]
    }
  },
  methods: {
    handleClick(item) {
      if (!item.isReady) {
        alert('準備中です。もうしばらくお待ちください。')
        return
      }
      router.push(item.path)
    }
  }
}
</script>