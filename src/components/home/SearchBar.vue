<template>
  <div class="search-bar">
    <div class="search-bar-title-wrapper">
      <div class="title-icon-back-wrapper">
        <span class="icon-back icon"></span>
      </div>
      <div class="title-text-wrapper">
        <span class="title-text title">
          {{$t('home.title')}}
        </span>
      </div>
      <div class="title-icon-shake-wrapper">
        <span class="icon-shake icon"></span>
      </div>
    </div>
    <div class="search-bar-input-wrapper">
      <div class="search-bar-input">
        <span class="icon-search icon"></span>
        <input
          type="text"
          class="input"
          :placeholder="$t('home.hint')"
          v-model="searchText"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/global';
.search-bar {
  position: relative;
  width: 100%;
  .search-bar-title-wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: px2rem(42);
    .title-icon-back-wrapper {
      position: absolute;
      top: 0;
      left: px2rem(15);
      height: px2rem(42);
      @include center;
    }
    .title-text-wrapper {
      width: 100%;
      height: px2rem(42);
      @include center;
    }
    .title-icon-shake-wrapper {
      position: absolute;
      top: 0;
      right: px2rem(15);
      height: px2rem(42);
      @include center;
    }
  }
  .search-bar-input-wrapper {
    width: 100%;
    height: px2rem(52);
    padding: px2rem(10);
    box-sizing: border-box;
    .search-bar-input {
      width: 100%;
      background: #f4f4f4;
      padding: px2rem(5) px2rem(15);
      box-sizing: border-box;
      border-radius: px2rem(20);
      border: px2rem(1) solid #eee;
      @include left;
      .icon-search {
        color: #999;
      }
      .input {
        width: 100%;
        height: px2rem(22);
        border: none;
        background: transparent;
        font-size: px2rem(12);
        margin-left: px2rem(10);
        color: #666;
        &:focus {
          outline: none;
        }
        &::-webkib-input-placeholder {
          color: #ccc;
        }
      }
    }
  }
}
</style>
