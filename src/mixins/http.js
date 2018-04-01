import db from '../firebaseconfigs/firestoreInit';
import storage from '../firebaseconfigs/storageInit';

export default {
    get : function (collection) {
        return new Promise((resolve, reject) => {
            let onSuccess = (data) => {
                resolve(data);
            };

            let onError = (error) => {
                reject(error);
            };

            db.collection(collection).get().then(onSuccess, onError);

        })

    },

    add : function (collection, data) {
        return new Promise((resolve, reject) => {
            let onSuccess = (data) => {
                resolve(data);
            };

            let onError = (error) => {
                reject(error);
            };

            db.collection(collection).add(data).then(onSuccess, onError);
        })
    },

    uploadImage: function (imageData) {
        return new Promise((resolve, reject) => {
            let onSuccess = (data) => {
                resolve(data);
            };

            let onError = (error) => {
                reject(error);
            };

            const storageRef = storage.ref();
            const imageRef = storageRef.child('images/' + imageData.imageName);


            imageRef.putString(imageData.imageData, 'data_url', {contentType: imageData.contentType}).then(onSuccess, onError);

        });
    },
    
    downloadImageURL: function (imageName) {

        return new Promise((resolve, reject) => {

            let onSuccess = (url) => {
                resolve(url);
            };

            let onError = (error) => {
                reject(error);
            };

            const storageRef = storage.ref();
            const imageRef = storageRef.child('images/' + imageName);

            imageRef.getDownloadURL().then(onSuccess, onError);
        });
    },

    deleteImage: function (imageName) {

        return new Promise ((resolve, reject) => {
            let onSuccess = (url) => {
                resolve(url);
            };

            let onError = (error) => {
                reject(error);
            };

            const storageRef = storage.ref();
            const imageRef = storageRef.child('images/' + imageName);


            imageRef.delete().then(onSuccess, onError);
        })
    },

    deleteDocument: function (collection, id) {

        return Promise((resolve, reject) => {
            var jobskill_query = db.collection(collection).where('id','==',id);
            jobskill_query.get(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete();
                });
            });
        })

    }
}