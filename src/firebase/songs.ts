import { onMounted, ref, Ref } from 'vue';
import { collection, query, where, getDocs, onSnapshot, doc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from '@/firebase/config';
import type { Song } from '.././types/song';

const DB_NAME = 'songs'

export const getSongs = (songs: Ref<Song[]>, isLoading: Ref<boolean>) => {
  isLoading.value = true
  const q = query(collection(db, DB_NAME));
  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = []
    querySnapshot.forEach((doc) => {
      tempSongs.push({ id: doc.id, ...doc.data() } as Song)
    })
    songs.value = tempSongs
    isLoading.value = false
  });
}

export const addSong = async (song: Song) => {
  // Add a new document with a generated id.
  await addDoc(collection(db, DB_NAME), {
    title: song.title,
    artist: song.artist,
    year: song.year,
  });
}

export const deleteSong = async (songId: string) => {
  await deleteDoc(doc(db, DB_NAME, songId));
}