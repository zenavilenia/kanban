import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCkdoXv3kbMlGUWc7uudukzmz97BWUpU4o',
  authDomain: 'kanban-878bb.firebaseapp.com',
  databaseURL: 'https://kanban-878bb.firebaseio.com',
  projectId: 'kanban-878bb',
  storageBucket: 'kanban-878bb.appspot.com',
  messagingSenderId: '934307208134',
};

firebase.initializeApp(config);
export const db = firebase.database();