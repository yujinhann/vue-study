<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm() {
      // event.preventDefault();
      // eslint-disable-next-line no-console
      console.log(this.username, this.password);
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        username: this.username,
        password: this.password,
      };
      axios.post(url, data)
      // eslint-disable-next-line no-console
       .then(response => console.log(response))
       // eslint-disable-next-line no-console
       .catch(error => console.log(error));
    }
  }
}
</script>

<style>
</style>
