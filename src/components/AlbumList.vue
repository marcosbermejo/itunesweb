<template>
  <div>
    <v-text-field label="Filter by album name" v-model="filter"></v-text-field>
    <div v-if="error">{{error}}</div>
    <div v-if="isValidating">loading...</div>
    <div v-else>
      <v-row>
        <v-col v-for="(album, i) in albums" :key="i" cols="12" sm="4" md="3">
          <AlbumItem :album="album" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed } from '@vue/composition-api'

import { Component, Vue, Prop } from 'vue-property-decorator'
import AlbumItem from './Album.vue'
import { Album } from '../interfaces/Album'
import useSWRV from 'swrv'

@Component({
  components: {
    AlbumItem
  },
  setup ({ artist }) {
    const filter = ref('')
    const url = `http://localhost:3000/music/${artist}`
    const { data, error, isValidating } = useSWRV<Album[]>(url, undefined, { revalidateOnFocus: false })

    const albums = computed(() => {
      const term = filter.value.toLowerCase()
      return data.value ? data.value.filter(d => d.name.toLowerCase().startsWith(term)) : []
    })

    return { filter, albums, error, isValidating }
  }
})
export default class AlbumList extends Vue {
  @Prop() private artist!: string
}
</script>
