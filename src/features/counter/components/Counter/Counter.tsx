import { useAppDispatch, useAppSelector } from '@/store';
import Link from 'next/link';
import { decrement, increment } from '../../store';
import * as S from './styles';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <S.Wrapper>
      <S.Counter>{count}</S.Counter>
      <S.CounterButtonGroup>
        <S.CounterButton onClick={() => dispatch(decrement())}>
          -
        </S.CounterButton>
        <S.CounterButton onClick={() => dispatch(increment())}>
          +
        </S.CounterButton>
      </S.CounterButtonGroup>
      <Link href="/">Go Home</Link>
    </S.Wrapper>
  );
};

export default Counter;
