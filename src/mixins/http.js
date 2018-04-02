import db from '../firebaseconfigs/firestoreInit';
import storage from '../firebaseconfigs/storageInit';
import toastr from '../mixins/toastr';

export default {
    get : function (collection) {
        return new Promise((resolve, reject) => {
            let onSuccess = (data) => {
                resolve(data);
            };

            let onError = (error) => {
                toastr.displayToast('error', error);
                reject(error);
            };

            db.collection(collection).orderBy("time", "desc").get().then(onSuccess, onError);

        })
    },

    updateDocument: function (collection, updatedData, id) {
        return new Promise((resolve, reject) => {
            let onSuccess = (data) => {
                resolve(data);
            };

            let onError = (error) => {
                toastr.displayToast('error', error);
                reject(error);
            };

            let docRef = db.collection(collection).doc(id);

            docRef.set(updatedData)
                .then(onSuccess, onError);

        })
    },

    getDocument: function (collection, id) {

        return new Promise ((resolve, reject) => {
            let onSuccess = (data) => {
                resolve(data);
            };

            let onError = (error) => {
                toastr.displayToast('error', error);
                reject(error);
            };

            let docRef = db.collection(collection).doc(id);

            docRef.get().then(onSuccess, onError);
        });

    },

    add : function (collection, data) {
        return new Promise((resolve, reject) => {
            let onSuccess = (data) => {
                resolve(data);
            };

            let onError = (error) => {
                toastr.displayToast('error', "Was unable to add the document at the moment");
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
                toastr.displayToast('error', "Failed to upload the image at the moment");
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
                toastr.displayToast('error', "Failed to fetch image at the moment");
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
                toastr.displayToast('error', "Failed to delete the image at the moment");
                reject(error);
            };

            const storageRef = storage.ref();
            const imageRef = storageRef.child('images/' + imageName);


            imageRef.delete().then(onSuccess, onError);
        })
    },

    deleteDocument: function (collection, id) {

        return Promise((resolve, reject) => {
            let docRef = db.collection(collection).doc(id);
            docRef.get(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    doc.ref.delete();
                });
            });
        })

    }
}