<template>
  <div
    class="field"
    :class="{ 'invalid':errors.first(inputName)}"
  >
    <label
      v-if="labelText"
      class="field__label"
      :for="inputName"
    >{{ labelText }}</label>
    <input
      :id="inputName"
      v-validate="validation"
      :type="inputType"
      class="field__input"
      :name="inputName"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <p
      v-if="errors.first(inputName)"
      class="field__sub-text"
    >
      {{ errors.first(inputName) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Field',
  model: {
    prop: 'value',
    event: 'input'
  },
  inject: ['$validator'],
  props: {
    value: { type: String, required: true },
    labelText: { type: String, required: true },
    validation: { type: [String, Object], required: true },
    inputName: { type: String, required: true },
    inputType: { type: String, default: 'text' }
  }
};
</script>

<style lang="sass">
</style>
