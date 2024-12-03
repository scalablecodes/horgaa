import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { MyTabRoutes } from "./types";
import BottomTab, { TabType } from "@/shared/components/BottomTab";
import { ChatScreen, HomeScreen, MoreScreen, MyJobScreen } from "../screens";

const Tab = createBottomTabNavigator<MyTabRoutes>();

const tabList: TabType<MyTabRoutes>[] = [
  {
    tabText: "Home",
    name: "HomeScreen",
    svgIconName: "home",
    svgIconActive: "homeActive",
    component: HomeScreen,
  },
  {
    tabText: "My Jobs",
    name: "MyJobScreen",
    svgIconName: "jobs",
    svgIconActive: "jobsActive",
    component: MyJobScreen,
  },

  {
    tabText: "Chat",
    name: "ChatScreen",
    svgIconName: "chat",
    svgIconActive: "chat",
    component: ChatScreen,
  },
  {
    tabText: "Market",
    name: "StoreFront",
    svgIconName: "storefront",
    svgIconActive: "storefrontActive",
    component: ChatScreen,
  },

  {
    tabText: "More",
    name: "MoreScreen",
    svgIconName: "more",
    svgIconActive: "moreActive",
    component: MoreScreen,
  },
];

export default function BottomTabs() {
  return (
    <BottomTab<MyTabRoutes> activeColor="primary" Tab={Tab} tabList={tabList} />
  );
}
