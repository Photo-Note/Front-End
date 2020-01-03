// This is a dummy action for boiler plate redux store set-up. This will be updated
// with actual actions during Hackathon.
export const DUMMY_ACTION = "DUMMY_ACTION";
export const GET_PHOTONOTE = "GET_PHOTONOTE";

export const getPhotoNote = photoNote => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const querySnapShot = await firestore
      .collection("pictures")
      .where("is_glued", "==", false)
      .get();
    querySnapShot.forEach(doc => {
      console.log(doc.data());
      photoNote = { imageURL: doc.data().imageURL };
    });
    dispatch({ type: GET_PHOTONOTE, payload: photoNote });
  };
};
