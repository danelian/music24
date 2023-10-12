<script setup lang="ts">
import { defineProps, defineEmits, watch, toRef } from 'vue';
import type { Song } from '@/types/song'

const props = defineProps<{ songs: Song[] }>()
const songsRef = toRef(props, 'songs')

const emits = defineEmits<{
  (event: 'add-to-favorite', id: string): void
}>()

let currentSong = songsRef.value[Math.floor(Math.random() * songsRef.value.length)]
// функция для обновления значения currentSong
const updateCurrentSong = () => {
  currentSong = songsRef.value[Math.floor(Math.random() * songsRef.value.length)]
}

// отслеживание изменений в props.songs и вызов функции updateCurrentSong
watch(songsRef, updateCurrentSong)
</script>

<template>
  <v-card title="Player" class="player mx-auto mb-5" width="300">
    <v-card-text>
      <v-icon icon="mdi-play"></v-icon>
      {{ currentSong.artist }}. {{ currentSong.title }} ({{ currentSong.year }})
    </v-card-text>
    <v-card-actions>
      <v-btn @click="emits('add-to-favorite', currentSong.id)">
        Add to favorites
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>