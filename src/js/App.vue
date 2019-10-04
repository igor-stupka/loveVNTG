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
@import "../css/main"
/*.active*/
  /*background-color: green*/

</style>
