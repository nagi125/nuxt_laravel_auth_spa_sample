<template>
  <div class="container">
    <h1 class="h1 pb-1 border-bottom border-dark">認証が必要なページ</h1>
    <p>ログイン状態: {{ $auth.loggedIn }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>