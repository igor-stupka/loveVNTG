<template>
  <main id="app">
    <contacts />
    <offices />
    <contact-form />
  </main>
</template>

<script>
import Contacts from './components/Contacts';
import Offices from './components/Offices';
import ContactForm from './components/ContactForm';

export default {
  name: 'App',
  components: {
    Contacts,
    Offices,
    ContactForm
  }
};
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  margin-top: 60px
.active
  background-color: green

</style>
