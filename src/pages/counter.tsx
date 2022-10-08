import Home from '@/features/counter/pages/Home';
import { increment } from '@/features/counter/store';
import { wrapper } from '@/store';

export default function Counter() {
  return <Home />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    console.log('store state on the server before dispatch', store.getState());
    store.dispatch(increment());
    console.log('store state on the server after dispatch', store.getState());

    return {
      props: {
        counter: 1
      }
    };
  }
);
