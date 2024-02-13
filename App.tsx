import Navigator from './src/Navigator';
import { Provider } from 'react-redux';
import store from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}


