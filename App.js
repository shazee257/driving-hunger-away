import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation/Navigation';
import { store } from './store';
import { Provider } from 'react-redux';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();

  }, []);

  return (
    <Provider store={store}>
    <Navigation />
    </Provider>
  );
};

export default App;
