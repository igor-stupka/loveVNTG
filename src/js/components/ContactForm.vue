<template>
  <section
    id="form-section"
    class="form-section"
  >
    <h2 class="section-title">
      Contact Us
    </h2>
    <from @submit.prevent="">
      <field
        v-model="nameVal"
        :input-type="'text'"
        :validation="'required|alpha_dash'"
        :input-name="'name'"
        :label-text="'Name'"
      />

      <field
        v-model="phoneVal"
        :input-type="'phone'"
        :validation="{ required: true, regex: /^((8|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ }"
        :input-name="'phone'"
        :label-text="'Phone'"
      />

      <field
        v-model="emailVal"
        :input-type="'email'"
        :validation="'required|email'"
        :input-name="'email'"
        :label-text="'E-mail'"
      />
    </from>
  </section>
</template>

<script>
import Field from './Field';

export default {
  components: {
    Field
  },
  data: () => ({
    nameVal: '',
    phoneVal: '',
    emailVal: ''
  }),
  computed: {},
  methods: {}
};
</script>

<style lang="sass">
</style>
