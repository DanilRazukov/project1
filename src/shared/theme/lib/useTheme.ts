import {onMounted, Ref, ref} from "vue";

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

interface IUseTheme {
  theme: Ref<THEME>;
  setTheme: (theme: THEME) => void;
  switchTheme: () => void;
}

export const useTheme = (): IUseTheme => {
  const theme = ref<THEME>(THEME.LIGHT);

  function setTheme(selectedTheme: THEME): void {
    const app = document.getElementById("app")

    if (!app) return;

    app.classList.remove(theme.value)

    theme.value = selectedTheme

    app.classList.add(selectedTheme)

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme)
  }

  function switchTheme(): void {
    switch (theme.value) {
      case THEME.LIGHT:
        setTheme(THEME.DARK);
        break;
      case THEME.DARK:
        setTheme(THEME.LIGHT);
    }
  }

  function isTheme(value: unknown): value is THEME {
    return typeof value === 'string' && Object.values(THEME).includes(value as THEME);
  }

  onMounted(() => {
    const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (isTheme(storageTheme)) {
      setTheme(storageTheme)
    }
  })

  return {
    theme,
    setTheme,
    switchTheme
  }
}
