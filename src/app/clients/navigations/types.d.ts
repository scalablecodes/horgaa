import type { RootStackParameterList } from "@/shared/navigation/types";

export type ClientsRootStackParameterList = RootStackParameterList & {
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
  SearchScreen: undefined;
};

export type ClientsNavigationProps<
  Screen extends keyof ClientsRootStackParameterList,
> = CompositeScreenProps<
  NativeStackScreenProps<ClientsRootStackParameterList, Screen>,
  BottomTabScreenProps<MyTabRoutes>
>;
