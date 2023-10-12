<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Song } from './types/song'
import { getSongs } from '@/firebase/songs'
import SongsList from './components/SongsList.vue'
import SongsPlayer from './components/SongsPlayer.vue'

const songs = ref<Song[]>([])

onMounted(async () => {
  getSongs(songs)
})
</script>

<template>
  <main>
    <h1>MUSIC 24</h1>
    <SongsPlayer/>
    <SongsList :songs="songs"/>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  width: 100%;
  height: 100vh;
}
h1 {
  text-align: center;
}
</style>
