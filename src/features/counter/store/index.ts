import store, {
  CounterState,
  asyncIncrement,
  decrement,
  increment
} from './store';

export default store;
export { asyncIncrement, decrement, increment };
export type { CounterState };
