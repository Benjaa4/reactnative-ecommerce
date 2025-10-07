import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import Navigator from "./src/navigation/Navigator";
import { Provider } from "react-redux";
import { store } from "./src/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <Navigator />
    </Provider>
  );
}
