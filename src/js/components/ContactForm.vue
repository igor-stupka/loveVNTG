<template>
  <section
    id="form-section"
    class="form-section"
  >
    <h2 class="section-title">
      Contact Us
    </h2>
    <form @submit.prevent="">
      <field
        v-for="(item, index) in fieldsOptions"
        :key="index"
        v-model="item.value"
        :input-type="item.type"
        :validation="item.vRule"
        :input-name="item.name"
        :label-text="item.label"
        @input="changeValue(index, 'currency', $event)"
      />
      <div class="checkbox">
        <input
          id="checkbox"
          v-validate="'required'"
          type="checkbox"
          class="checkbox__input"
          name="chb"
        >
        <label
          for="checkbox"
          class="checkbox__vabel"
        >check me</label>
      </div>


      <p
        v-if="errors.first('chb')"
      >
        {{ errors.first('chb') }}
      </p>

      <button
        type="submit"
        :disabled="errors.any()"
      >
        SEND
      </button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Field from './Field';

export default {
  components: {
    Field
  },
  data: () => ({}),
  computed: {
    ...mapGetters('fields', {
      fieldsOptions: 'options'
    })
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="sass">
</style>
