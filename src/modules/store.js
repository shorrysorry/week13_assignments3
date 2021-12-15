const ADD_BUCKET = "store/ADD_BUCKET";
const TOGGLE_BUCKET = "store/TOGGLE_BUCKET";
const CHANGE_DURATION = "store/ADD_DURATION";
const REMOVE_BUCKET = "store/REMOVE_BUCKET";

let nextId = 4;
export const addBucket = (text) => ({
  type: ADD_BUCKET,
  bucket: {
    id: nextId++,
    text,
    checked: false,
    period: "무기한"
  }
});
export const toggleBucket = (id) => ({
  type: TOGGLE_BUCKET,
  id
});

export const changeDuration = (id) => ({
  type: CHANGE_DURATION,
  id
});

export const removeBucket = (id) => ({
  type: REMOVE_BUCKET,
  id
});

const initialState = {
  buckets: [
    {
      id: 1,
      text: "html",
      checked: false,
      period: "무기한"
    },
    {
      id: 2,
      text: "css",
      checked: true,
      period: "10년"
    },
    {
      id: 3,
      text: "javascript",
      checked: false,
      period: "1년"
    }
  ]
};

export default function bucket(state = initialState, action) {
  switch (action.type) {
    case ADD_BUCKET:
      return state.concat(action.bucket);
    case TOGGLE_BUCKET:
      return state.map((bucket) =>
        bucket.id === action.id
          ? { ...bucket, checked: !bucket.checked }
          : bucket
      );
    case CHANGE_DURATION:
      return;
    case REMOVE_BUCKET:
      state.filter((bucket) => bucket.id !== action.id);
    default:
      return state;
  }
}
