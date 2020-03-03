
<template>
  <header :class="$style.header">
    <div :class="[$style.content, 'content-wrapper']">
      <div :class="$style.group">
        <router-link :to="{ path: '/' }" :class="$style.item">
          <img src="images/Logo.svg" />
        </router-link>
        <router-link :to="{ path: '/' }" :class="$style.item">
          <img src="images/trello-mark-blue.svg" />
          <span>Boards</span>
        </router-link>
        <search :class="$style.search" />
      </div>
      <div :class="$style.group">
          <div :class="$style.icons">
            <router-link :to="{ path: '/' }">
              <img src="images/plus-circle-outline.svg" />
            </router-link>
            <router-link :to="{ path: '/' }">
              <img src="images/alert-circle-outline.svg" />
            </router-link>
            <router-link :to="{ path: '/' }">
              <img src="images/bell-outline.svg" />
            </router-link>
          </div>
          <router-link :to="{ path: '/' }">
            <img src="" :class="$style.avatar" />
          </router-link>
        </div>
    </div>
  </header>
</template>

<style lang="scss" module>
  .header {
    border-bottom: 1px solid $primary-border-color;

    .content {
      padding: 15px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .group {
      display: flex;
    }

    .item {
      padding: 0 15px;
      border-right: 1px solid $primary-border-color;

      display: flex;
      align-items: center;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }

      span {
        margin-left: 5px;
      }
    }
    
    .search {
      margin-left: 15px;
    }

    a { 
      text-decoration: none;
      color: $primary-color;
    }
  }
  
  .icons {
    display: flex;
    align-items: center;

    a:not(:last-child) {
      margin-right: 30px;
    }
  }

  .avatar {
    height: 40px;
    width: 40px;

    border-radius: 100%;
    object-fit: cover;

    [src=""] {
      background-color: $secondary-background-color;
    }
  }
</style>

<script>
  import { Search } from '@/ui-kits/inputs';

  export default {
    components: {
      search: Search,
    },
  }
</script>