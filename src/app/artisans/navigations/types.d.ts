import type { RootStackParameterList } from "@/shared/navigation/types";

export type ArtisanRootStackParameterList = RootStackParameterList & {
  BottomTabs: undefined;
  // TrustFeatures: undefined;
};

// Tab routes
type MyTabRoutes = {
  HomeScreen: undefined;
  MyJobScreen: undefined;
  ChatScreen: undefined;
  WalletScreen: undefined;
  MoreScreen: undefined;
  StoreFront: undefined;
};

export type ArtisanNavigationProps<
  Screen extends keyof ArtisanRootStackParameterList,
> = CompositeScreenProps<
  NativeStackScreenProps<ArtisanRootStackParameterList, Screen>,
  BottomTabScreenProps<MyTabRoutes>
>;
