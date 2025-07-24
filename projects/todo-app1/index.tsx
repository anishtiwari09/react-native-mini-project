import CustomReactSafeAreaView from './utility/custom-react-safe-area-view';
import Todo from './components/todo';

export default function StartProject() {
  return (
    <CustomReactSafeAreaView>
      <Todo />
    </CustomReactSafeAreaView>
  );
}
