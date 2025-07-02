import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'tech-data-codes-theme';
  
  theme = signal<Theme>('system');
  isDark = signal<boolean>(false);

  constructor() {
    // Load saved theme or default to system
    const savedTheme = (localStorage.getItem(this.THEME_KEY) as Theme) || 'system';
    this.theme.set(savedTheme);
    
    // Apply theme on initialization
    this.applyTheme();
    
    // Watch for theme changes
    effect(() => {
      this.applyTheme();
    });
    
    // Listen for system theme changes
    this.setupSystemThemeListener();
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    localStorage.setItem(this.THEME_KEY, theme);
  }

  toggleTheme(): void {
    const currentTheme = this.theme();
    if (currentTheme === 'light') {
      this.setTheme('dark');
    } else if (currentTheme === 'dark') {
      this.setTheme('system');
    } else {
      this.setTheme('light');
    }
  }

  private applyTheme(): void {
    const theme = this.theme();
    const isDarkMode = this.getEffectiveTheme(theme);
    this.isDark.set(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  private getEffectiveTheme(theme: Theme): boolean {
    if (theme === 'dark') return true;
    if (theme === 'light') return false;
    
    // System theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private setupSystemThemeListener(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
      if (this.theme() === 'system') {
        this.applyTheme();
      }
    });
  }
}