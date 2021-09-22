<template lang="html">
  <div class="field">
    <input v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
    <label class="secondelement">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'FormInput',

  props: [
    'label',
    'modelValue'
  ],

  emits: [
    'update:modelValue'
  ],

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

.field {
  display: flex;
  flex-flow: column-reverse;
  /* margin-bottom: 10px; */
  position: relative;
  background-color: #fdfdfe;
  height: 48px;
  border-radius: 5px;
  width: 100%;
  border-bottom: none !important;
}

label, input {
  transition: all 0.2s;
  touch-action: manipulation;
}

label {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

input {
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: 20px;
}

input {
  font-size: 1rem;
  border: 0;
  border-bottom: 1.5px solid #aab4bd;
  font-family: inherit;
  -webkit-appearance: none;
  cursor: text;
  width: 98%;
  margin-left: 1%;
  margin-bottom: 5px;
}

input:focus {
  outline: 0;
  border-bottom: 1.5px solid #167afb;
}

input:focus + label {
  color: #004aaf;
}

input:placeholder-shown + label {
  cursor: text;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left;
  transform: translate(.2rem, 1.2rem) scale(1.2);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

input:focus::-webkit-input-placeholder {
  opacity: 1;
}

input:not(:placeholder-shown) + label,
input:focus + label {
  transform-origin: left;
  transform: translate(.2rem, -.2rem) scale(.9);
  cursor: pointer;
}


</style>
