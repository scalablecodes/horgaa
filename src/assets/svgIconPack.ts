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
import chevronLeft from "@/assets/svg/chevron-left.svg";
import bell from "@/assets/svg/bell.svg";
import chevronDown from "@/assets/svg/chevronDown.svg";
import exportIcon from "@/assets/svg/export.svg";
import locations from "@/assets/svg/locations.svg";
import active from "@/assets/svg/active.svg";
import phone from "@/assets/svg/phone.svg";
import message from "@/assets/svg/message.svg";
import medal from "@/assets/svg/medal.svg";
import star from "@/assets/svg/star.svg";
import clock from "@/assets/svg/clock.svg";
import userOutline from "@/assets/svg/user-outline.svg";
import eyeClose from "@/assets/svg/eyeClose.svg";
import eye from "@/assets/svg/eye.svg";

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
  chevronLeft,
  bell,
  chevronDown,
  exportIcon,
  locations,
  active,
  message,
  phone,
  star,
  clock,
  medal,
  userOutline,
  eye,
  eyeClose,
};

export { svgIconPack };

export type SvgIconPackType = keyof typeof svgIconPack;
