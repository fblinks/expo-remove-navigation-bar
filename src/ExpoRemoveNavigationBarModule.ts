import { NativeModule, requireNativeModule } from "expo";

declare class ExpoRemoveNavigationBarModule extends NativeModule {
  remove();
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoRemoveNavigationBarModule>(
  "ExpoRemoveNavigationBar",
);
