import { Injectable, signal } from '@angular/core';
import { Language } from '../types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_KEY = 'tech-data-codes-language';
  
  languages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];
  
  currentLanguage = signal<Language>(this.languages[0]);

  constructor() {
    const savedLanguage = localStorage.getItem(this.LANGUAGE_KEY) as 'es' | 'en';
    if (savedLanguage) {
      const language = this.languages.find(lang => lang.code === savedLanguage);
      if (language) {
        this.currentLanguage.set(language);
      }
    }
  }

  setLanguage(languageCode: 'es' | 'en'): void {
    const language = this.languages.find(lang => lang.code === languageCode);
    if (language) {
      this.currentLanguage.set(language);
      localStorage.setItem(this.LANGUAGE_KEY, languageCode);
    }
  }

  getCurrentLanguageCode(): 'es' | 'en' {
    return this.currentLanguage().code;
  }
}