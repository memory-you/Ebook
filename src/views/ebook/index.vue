<template>
  <div
    class="ebook"
    ref="ebook"
  >
    <ebook-header></ebook-header>
    <ebook-title></ebook-title>
    <ebook-reader></ebook-reader>
    <ebook-menu></ebook-menu>
    <ebook-footer></ebook-footer>
    <ebook-bookmark>
    </ebook-bookmark>
  </div>
</template>

<script>
import EbookTitle from '../../components/ebook/EbookTitle.vue'
import EbookBookmark from '../../components/ebook/EbookBookmark.vue'
import EbookHeader from '../../components/ebook/EbookHeader.vue'
import EbookReader from '../../components/ebook/EbookReader.vue'
import EbookFooter from '../../components/ebook/EbookFooter.vue'
import EbookMenu from '../../components/ebook/EbookMenu.vue'
import { getReadTime, saveReadTime } from '../../utils/localStorage'
import { setInterval, clearInterval } from 'timers'
import { ebookMixin } from '../../utils/mixin'
export default {
  mixins: [ebookMixin],
  components: {
    EbookHeader,
    EbookReader,
    EbookTitle,
    EbookMenu,
    EbookFooter,
    EbookBookmark
  },
  watch: {
    offsetY(v) {
      if (v > 0) {
        this.move(v)
      } else if (v === 0) {
        this.restore()
      }
    }
  },
  methods: {
    restore() {
      this.$refs.ebook.style.top = 0
      this.$refs.ebook.style.transition = 'all .2s linear'
      setTimeout(() => {
        this.$refs.ebook.style.transition = ''
      }, 200)
    },
    move(v) {
      this.$refs.ebook.style.top = v + 'px'
    },
    startLoopReadTime() {
      let readTime = getReadTime(this.fileName)
      if (!readTime) {
        readTime = 0
      }
      this.task = setInterval(() => {
        readTime++
        if (readTime % 30 === 0) {
          saveReadTime(this.fileName, readTime)
        }
      }, 1000)
    }
  },
  mounted() {
    this.startLoopReadTime()
  },
  beforeDestroy() {
    if (this.task) {
      clearInterval()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global';
.ebook {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
