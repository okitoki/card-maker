import { onValue, ref, remove, set } from 'firebase/database';
import { database } from './firebaseconfig';

const db = database;
export function writeUserData(userId, card){
    console.log(card.id);
    set(ref(db, userId  +'/card/'+ card.id ),card)
}

export function deleteUserData(userId, card){
    console.log(card.id);
    remove(ref(db, userId + '/card/'+ card.id ))
}
