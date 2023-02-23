<template>
  <form
    ref="formBuilderRef"
    class="form-container"
    @submit.prevent="submitForm"
  >
    <h4 v-if="isSubmitted" class="green">Form successfully submitted!</h4>
    <div v-for="(field, index) in blocks" :key="index">
      <label :for="field.token">{{ field.props.title }}</label>

      <span v-if="field.type === 'text'">
        <input
          :type="field.type"
          :name="field.token"
          :placeholder="field.props.placeholder"
          v-model="field.props.value"
        />
      </span>
      <span v-if="field.type === 'checkbox'">
        <input
          :type="field.type"
          :name="field.token"
          v-model="field.props.value"
        />
      </span>
      <span v-if="field.type === 'date'">
        <input
          :type="field.type"
          :name="field.token"
          :placeholder="field.props.placeholder"
          v-model="field.props.value"
        />
      </span>
      <div v-if="field.type === 'textarea'">
        <textarea
          :name="field.token"
          :placeholder="field.props.placeholder"
          v-model="field.props.value"
        ></textarea>
      </div>
      <span v-if="field.type === 'select'">
        <select :name="field.token" v-model="field.props.value">
          <option
            v-for="(option, index) in field.options"
            :key="index"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </span>

      <div v-if="field.type === 'radio'">
        <input
          :type="field.type"
          :name="field.name"
          :value="field.value"
          v-model="selected"
        />
      </div>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        {
          token: "PERSON_NAME",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "e.g. John Doe",
          },
        },
        {
          token: "IS_PERSON_MINNOR",
          type: "checkbox",
          props: {
            title: "Is the current person minor?",
            default: false,
          },
        },
        {
          token: "PERSON_DOB",
          type: "date",
          props: {
            title: "Enter your DOB",
            required: "IS_PERSON_MINOR",
            placeholder: "e.g. 01/01/2000",
          },
        },
        {
          token: "PERSON_REVIEW",
          type: "textarea",
          props: {
            title: "Enter your review",
            placeholder: "this is a demo review text",
          },
        },
        {
          token: "PERSON_OPTIONS",
          type: "select",
          options: [
            { label: "Doctor", value: "Doctor" },
            { label: "Engineer", value: "Engineer" },
          ],
          props: {
            title: "Occuption",
          },
        },
      ],
      selected: "",
      isSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      if (this.blocks.some((field) => !field.props.value)) {
        alert("Please fill out all fields!");
        return;
      }

      // submit form
      console.log(this.blocks);
      this.isSubmitted = true;
    },
  },
};
</script>
<style scoped>
input {
  margin: 4px;
}
.green {
  color: green;
}
</style>
