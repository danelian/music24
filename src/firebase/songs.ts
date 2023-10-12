import { onMounted, ref, Ref } from 'vue';
import { collection, query, where, getDocs, onSnapshot, addDoc } from "firebase/firestore";
import { db } from '@/firebase/config';
import type { Song } from '.././types/song';

const DB_NAME = 'songs'

export const getSongs = (songs: Ref<Song[]>) => {
  const q = query(collection(db, DB_NAME));
  onSnapshot(q, (querySnapshot) => {
    const tempSongs: Song[] = []
    querySnapshot.forEach((doc) => {
      tempSongs.push({ id: doc.id, ...doc.data() } as Song)
    })
    songs.value = tempSongs
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