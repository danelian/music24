<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { db } from '@/firebase/config';

interface Song {
  id: string
  title: string
  artist: string
  year: number
}

const songs = ref<Song[]>([])

onMounted(async () => {
  const q = query(collection(db, "songs"));
  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = []
    querySnapshot.forEach((doc) => {
      tempSongs.push({ id: doc.id, ...doc.data() } as Song)
    })
    songs.value = tempSongs
  });
})
</script>

<template>
  <main>
    <h1>MUSIC 24</h1>
    <v-card
    class="mx-auto pa-2"
    max-width="300"
  >
    <v-list>
      <v-list-subheader>FAVORITE SONGS</v-list-subheader>

      <v-list-item
        v-for="(song, i) in songs"
        :key="i"
        :value="song"
        color="primary"
        rounded="shaped"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-headphones"></v-icon>
        </template>

        <v-list-item-title v-text="song.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
  </main>
</template>

<style>

</style>
