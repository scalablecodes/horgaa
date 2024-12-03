import home from "@/assets/svg/home.svg";
import chat from "@/assets/svg/chat.svg";
import storefront from "@/assets/svg/Storefront.svg";
import jobs from "@/assets/svg/payment.svg";
import more from "@/assets/svg/menu.svg";
import homeActive from "@/assets/svg/home-active.svg";
import storefrontActive from "@/assets/svg/Storefront-active.svg";
import jobsActive from "@/assets/svg/payment- active.svg";
import moreActive from "@/assets/svg/menu-active.svg";
import search from "@/assets/svg/search.svg";
import briefcase from "@/assets/svg/briefcase.svg";
import deactivate from "@/assets/svg/deactivate.svg";
import editUser from "@/assets/svg/edit-user.svg";
import paymentDetails from "@/assets/svg/paymentDetails.svg";
import user from "@/assets/svg/user.svg";
import notification from "@/assets/svg/notifications.svg";
import logout from "@/assets/svg/logout.svg";
import chevronright from "@/assets/svg/chevron-right.svg";

const svgIconPack = {
  home,
  chat,
  storefront,
  jobs,
  more,
  homeActive,
  storefrontActive,
  jobsActive,
  moreActive,
  search,
  briefcase,
  notification,
  logout,
  deactivate,
  editUser,
  paymentDetails,
  user,
  chevronright,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
