import { Subject } from "rxjs";
import { v4 as uuidv4 } from "uuid";
const subject = new Subject();

const initialState = {
  items: [],
};

export let state = initialState;

const subscribeItems = (handler) => {
  subject.subscribe(() => {
    handler();
  });
};
const itemStore = {
  addItem: (item) => {
    state = { ...state, items: [...state.items, { item, id: uuidv4() }] };
    subject.next();
  },
  removeItem: (id) => {
    console.log(id);
    state = { ...state, items: state.items.filter((item) => item.id !== id) };
    subject.next();
  },
  initialize: () => {
    state = initialState;
    subject.next();
  },
  subscribe: subscribeItems,
  initialState,
};

export default itemStore;
