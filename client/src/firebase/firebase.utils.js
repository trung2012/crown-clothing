import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
const config = {
  apiKey: "AIzaSyC3OUChMZ_9rfu3ebVPC9L0P8nylY90NNc",
  authDomain: "crown-db-ed113.firebaseapp.com",
  databaseURL: "https://crown-db-ed113.firebaseio.com",
  projectId: "crown-db-ed113",
  storageBucket: "",
  messagingSenderId: "342327869809",
  appId: "1:342327869809:web:d69f60ec9a4159c0"
};
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
 
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		}
	})

	return transformedCollection.reduce((accumulator, collection) => {
				accumulator[collection.title.toLowerCase()] = collection;
				return accumulator;
			}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth);
		}, reject)
	})
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	})

	return await batch.commit()
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} 

		catch(error) {
				console.log('error creating user', error.message);
		}			
	}
	
	return userRef;	
}


 
export default firebase;