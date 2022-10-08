import * as S from './styles';
import CounterComponent from '@/features/counter/components/Counter';

const Counter = () => (
  <S.Wrapper>
    <S.Header>Counter</S.Header>
    <CounterComponent />
  </S.Wrapper>
);

export default Counter;
