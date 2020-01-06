// This is a dummy action for boiler plate redux store set-up. This will be updated
// with actual actions during Hackathon.
export const DUMMY_ACTION = "DUMMY_ACTION";
export const GET_PHOTONOTE = "GET_PHOTONOTE";

export const getPhotoNote = photoNotes => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const querySnapShot = await firestore.get({ collection: "pictures" });
    querySnapShot.forEach(doc => {
      photoNotes.photoNotes.push(doc.data());
    });
    dispatch({ type: GET_PHOTONOTE, payload: photoNotes });
  };
};
