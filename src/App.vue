<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Song } from './types/song'
import { getSongs } from '@/firebase/songs'
import SongsList from './components/SongsList.vue'
import SongsPlayer from './components/SongsPlayer.vue'

const songs = ref<Song[]>([])

const playingSongs: Song[] = [
  {
    id: '1',
    title: 'So What',
    artist: 'Miles Davis',
    year: 1959,
  },
  {
    id: '2',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    year: 1991,
  },
  {
    id: '3',
    title: 'What a Wonderful World',
    artist: 'Louis  Armstrong',
    year: 1967,
  },
  {
    id: '4',
    title: 'The Look',
    artist: 'Roxette',
    year: 1988,
  },
]

onMounted(async () => {
  getSongs(songs)
})

const addToFavorite = (songId: string) => {
  console.log('addToFavorite', songId)
}
</script>

<template>
  <main>
    <h1 class="mb-5 text-center">MUSIC 24</h1>
    <SongsPlayer :songs="playingSongs" @add-to-favorite="addToFavorite"/>
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
</style>
