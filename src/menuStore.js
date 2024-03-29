import { atom } from "nanostores";

export const isOpenMenu = atom(false);

export const toggleMenu = () => {
  isOpenMenu.set(!isOpenMenu.get());
};
