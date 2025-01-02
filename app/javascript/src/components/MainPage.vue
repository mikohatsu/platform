<template lang="pug">
.l-main
  h1.c-title そんじぇの遊び場
  .c-grid
    router-link.c-card(
      v-for="(item, index) in menuItems"
      :key="index"
      :to="item.path"
    )
      .c-card__icon
        i(:class="item.icon")
      h2.c-card__title {{ item.title }}
      p.c-card__description {{ item.description }}
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      menuItems: [
        {
          title: 'SUNGLE',
          description: 'あなたが探したい情報のファイルが検索できます',
          path: '/search',
          icon: 'fas fa-search'
        },
        {
          title: 'ポケカAIデュアル',
          description: 'AIとポケモンカードゲームを楽しんでみましょう',
          path: '/content1',
          icon: 'fas fa-play-circle'
        },
        {
          title: '単語QUIZ',
          description: '単語QUIZで日本語と韓国語を勉強してみましょう',
          path: '/content2',
          icon: 'fas fa-book'
        },
        // 필요한 만큼 메뉴 아이템 추가
      ]
    }
  }
}
</script>