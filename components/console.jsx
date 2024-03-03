"use client";

import { LocalStorage } from "../lib/localStorage";

const theme = new LocalStorage('theme', 'light');
// ブラウザのテーマを取得してlocalStorageにセット
if (theme.get() === null && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	theme.set('dark');
}

export const ConsoleLog = () => {
  console.log(theme);
  return <div></div>;
};