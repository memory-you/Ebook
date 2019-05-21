<template>
  <div class="shelf-list">
    <div
      class="shelf-list-item-wrapper"
      v-for="item in shelfList"
      :key="item.id"
    >
      <shelf-item
        :data="item"
        :style="{height: itemHeight}"
      ></shelf-item>
    </div>
  </div>
</template>

<script>
import { storeShelfMixin } from '../../utils/mixin'
import ShelfItem from './ShelfItem'
import realPX from '../../utils/utils'
export default {
  mixins: [storeShelfMixin],
  components: {
    ShelfItem
  },
  computed: {
    itemHeight() {
      return ((window.innerWidth - realPX(120)) / 3 / 250) * 350 + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global';
.shelf-list {
  position: absolute;
  top: 94px;
  left: 0;
  z-index: 100;
  flex-flow: row wrap;
  width: 100%;
  padding: 0 px3rem(15);
  box-sizing: border-box;
  .shelf-list-item-wrapper {
    flex: 0 0 33.33%;
    width: 33.33%;
    padding: px2rem(15);
    box-sizing: border-box;
  }
}
</style>
