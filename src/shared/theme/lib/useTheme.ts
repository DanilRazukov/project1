import {onMounted, Ref, ref} from "vue";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

interface IUseTheme {
  theme: Ref<Theme>;
  setTheme: (theme: Theme) => void;
}

export const useTheme = (): IUseTheme => {
  const theme = ref<Theme>(Theme.LIGHT);

  function setTheme(selectedTheme: Theme): void {
    const app = document.getElementById("app")

    if (!app) return;

    app.classList.remove(theme.value)

    theme.value = selectedTheme

    app.classList.add(selectedTheme)

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, selectedTheme)
  }

  function isTheme(value: unknown): value is Theme {
    return typeof value === 'string' && Object.values(Theme).includes(value as Theme);
  }

  onMounted(() => {
    const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (isTheme(storageTheme)) {
      setTheme(storageTheme)
    }
  })

  return {
    theme,
    setTheme
  }
}
