import { AppDispatch } from '@/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0
};

type HydrateCounterState = {
  counter: CounterState;
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state: CounterState) {
      state.value += 1;
    },

    decrement(state: CounterState) {
      state.value -= 1;
    },

    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action: PayloadAction<HydrateCounterState>) => {
      console.log('HYDRATE PAYLOAD', action.payload.counter);
      console.log('HYDRATE STATE', state.value);
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function asyncIncrement(): (dispatch: AppDispatch) => Promise<void> {
  return async function (dispatch: AppDispatch) {
    await sleep(3000);
    dispatch(increment());
  };
}
