<template>
  <div class="store-home">
    <search-bar></search-bar>
    <flap-card :data="random"></flap-card>
    <scroll
      :top="scrollTop"
      @onScroll="onScroll"
      ref="scroll"
    >
      <div class="banner-wrapper">
        <div
          class="banner-img"
          :style="{backgroundImage:`url('${banner}')`}"
        >
        </div>
      </div>
      <guess-you-like :data="guessYouLike"></guess-you-like>
      <recommend :data="recommend"></recommend>
    </scroll>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import Scroll from '../../components/common/Scroll'
import GuessYouLike from '../../components/home/GuessYouLike'
import FlapCard from '../../components/home/FlapCard'
import Recommend from '../../components/home/Recommend'
import { storeHomeMixin } from '../../utils/mixin'
import { home } from '../../api/store'
export default {
  mixins: [storeHomeMixin],
  components: {
    SearchBar,
    Scroll,
    FlapCard,
    GuessYouLike,
    Recommend
  },
  data() {
    return {
      scrollTop: 94,
      random: null,
      banner: null,
      guessYouLike: null,
      recommend: null
    }
  },
  methods: {
    onScroll(offsetY) {
      this.setOffsetY(offsetY)
      if (offsetY > 0) {
        this.scrollTop = 52
      } else {
        this.scrollTop = 94
      }
      this.$refs.scroll.refresh()
    }
  },
  mounted() {
    home().then(response => {
      if (response && response.status === 200) {
        const data = response.data
        const randomIndex = Math.floor(Math.random()) * data.random.length
        this.random = data.random[randomIndex]
        this.banner = data.banner
        this.guessYouLike = data.guessYouLike
        this.recommend = data.recommend
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global';
.store-home {
  width: 100%;
  height: 100%;
  .banner-wrapper {
    width: 100%;
    padding: px2rem(10);
    box-sizing: border-box;
    .banner-img {
      width: 100%;
      height: px2rem(140);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
