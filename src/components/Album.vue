<template>
  <v-card class="mx-auto my-12">
    <v-img v-bind:src="album.image"></v-img>
    <v-card-title>{{album.name}}</v-card-title>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Album } from '../interfaces/Album'

@Component
export default class AlbumItem extends Vue {
  @Prop() private album!: Album
}
</script>
