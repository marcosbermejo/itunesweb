<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-container>
        <div v-if="artist">
          <div class="d-flex algn-center justify-space-between">
            <h1>Results for <em>{{artist}}</em></h1>
            <a href @click.prevent="reset">Back</a>
          </div>
          <AlbumList :artist="artist" />
        </div>
        <SearchForm v-else v-on:search="search" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppBar from './components/AppBar.vue'
import AlbumList from './components/AlbumList.vue'
import SearchForm from './components/SearchForm.vue'

@Component({
  components: {
    AppBar,
    AlbumList,
    SearchForm
  }
})
export default class App extends Vue {
  artist = ''

  search (term: string): void {
    this.artist = term
  }

  reset (): void {
    this.artist = ''
  }
}
</script>
