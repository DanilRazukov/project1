import 'vue-i18n';

declare module 'vue-i18n' {
  export interface VueI18n {
    // Добавь здесь, если хочешь расширить
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $t: (key: string, ...args: any[]) => string;
  }
}
