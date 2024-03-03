"use client";
import { useEffect } from "react";

export const SwitchTheme = () => {
  useEffect(() => {
    // メディアクエリの変更を監視するイベントハンドラー
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    };
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    // イベントリスナーを追加
    mediaQuery.addEventListener('change', handleChange);
    
    // コンポーネントマウント時に現在のシステムテーマに基づいてテーマを設定
    const currentTheme = localStorage.getItem('theme') || (mediaQuery.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    // コンポーネントのクリーンアップ時にイベントリスナーを削除
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return null;
};
