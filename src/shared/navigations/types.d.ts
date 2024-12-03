import type { RootStackParameterList } from "@/shared/navigation/types";

export type RootStacksParameterList = RootStackParameterList & {
  ArtisanStack: undefined;
  ClientStack: undefined;
  ContinueScreen: undefined;
  Intro: undefined;
};

export type RootNavigationProps<Screen extends keyof RootStacksParameterList> =
  CompositeScreenProps<NativeStackScreenProps<RootStacksParameterList, Screen>>;
