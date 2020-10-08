<template>
  <div class="container">
    <h1 class="h1 pb-1 border-bottom border-dark">Login</h1>
    <p>ログイン状態: {{ $auth.loggedIn }}</p>
    <div class="row justify-content-md-center">
      <div class="col-6">
        <form name="login" @submit.prevent="login()">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password" v-model="form.password" required />
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
      };
    },
    methods: {
      async login() {
        try {
          const response = await this.$auth.loginWith('local', { data: this.form });
          console.log(response);

        } catch(error) {
          console.log(error);
        }
      },
    },
  };
</script>