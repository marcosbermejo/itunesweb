<template>
  <div class="serach-form">
    <h1 class="blue-grey--text text--darken-3">iTunes Search API</h1>
    <v-form v-model="valid" @submit.prevent="$emit('search', term)">
      <v-text-field
        v-model="term"
        label="Serach by artist name"
        clearable
        solo
        prepend-inner-icon="mdi-magnify"
        :rules="termRules"
        required
      ></v-text-field>
      <div class="d-flex justify-center">
        <v-btn
          :disabled="!valid"
          x-large
          color="success"
          class="mt-4"
          type="submit"
        >
          Search
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { InputValidationRules } from 'vuetify/types'

@Component
export default class SearchForm extends Vue {
  term = ''
  valid = false
  termRules: InputValidationRules = [
    (v:string): string | boolean => !!v || 'Artist name is required',
    (v:string): string | boolean => (v && v.length >= 3) || 'Artist name must be at least 3 characters'
  ]
}
</script>

<style scoped>
.serach-form {
  width: 500px;
  margin: 100px auto 0;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}
</style>
