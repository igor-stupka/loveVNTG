<template>
  <section
    id="form-section"
    class="form-section"
  >
    <div class="container">
      <h2 class="section-title">
        Contact Us
      </h2>
      <div class="form-section__grid">
        <form @submit.prevent="onSubmit">
          <field
            v-for="(item, index) in fieldsOptions"
            :key="index"
            v-model="item.value"
            :input-type="item.type"
            :validation="item.vRule"
            :input-name="item.name"
            :label-text="item.label"
          />
          <div class="checkbox">
            <input
              id="checkbox"
              v-validate="'required'"
              type="checkbox"
              class="checkbox__input"
              name="policy"
              checked
            >
            <label
              for="checkbox"
              class="checkbox__label"
            >
              I agree the processing of personal data
            </label>
            <transition name="fade">
              <p
                v-if="errors.first('policy')"
                class="checkbox__sub-text"
              >
                {{ errors.first('policy') }}
              </p>
            </transition>
          </div>
          <button
            class="button"
            type="submit"
            :disabled="errors.any()"
          >
            Get in touch
          </button>
        </form>
        <div class="form-section__message">
          {{ sent ? 'Your data sent. Thank you' : 'Please tell us more about your request and give us info about your company and country' }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Field from './Field';

export default {
  components: {
    Field
  },
  data: () => ({
    fieldsOptions: [
      {
        type: 'text',
        value: '',
        vRule: 'required|alpha_spaces|min:2',
        name: 'name',
        label: 'Name'
      },
      {
        type: 'tel',
        value: '',
        vRule: { required: true, regex: /^((8|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ },
        name: 'phone',
        label: 'Phone'
      },
      {
        type: 'email',
        value: '',
        vRule: 'required|email',
        name: 'email',
        label: 'E-mail'
      }
    ],
    sent: false
  }),
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          this.submitForm();
        }
      });
    },
    submitForm() {
      const data = {};

      for (const key of this.fieldsOptions) {
        data[key.name] = key.value.trim();
      }

      axios.post('http://httpbin.org/post', data)
        .then((response) => {
          console.log(response);
          this.sent = true;
          this.fieldsOptions.forEach((item) => {
            item.value = '';
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="sass">
@import '../../css/components/form-section.sass'
</style>
