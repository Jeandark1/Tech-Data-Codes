import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { LanguageService } from '../../services/language.service';
import { Service } from '../../types/interfaces';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgStyle, NgFor, NgIf],
  templateUrl: 'services.component.html',
  styleUrl: 'services.component.css'
})
export class ServicesComponent {
  private dataService = inject(DataService);
  private languageService = inject(LanguageService);

  contentText: Service[] = [];

  processPhases = [
    { key: 'discovery' },
    { key: 'strategy' },
    { key: 'implementation' }
  ];

  ngOnInit(): void {
    this.contentText = this.dataService.getOurServices();
  }

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  getTranslatedSectionTitle(id: string): string {
    const item = this.contentText.find(c => c.id == id);
    if (!item) return id;
    return this.isSpanish() ? item.titleES : item.titleEN;
  }

  getTranslatedSectionDescription(id: string): string {
    const item = this.contentText.find(c => c.id == id);
    if (!item) return id;
    return this.isSpanish() ? item.descriptionES : item.descriptionEN;
  }



  getTranslatedCardField(id: string, field: 'title' | 'description' | 'icon'): string {
    const item = this.contentText.find(c => c.id == id);
    if (!item) return id;
    if (field === 'icon') return item.icon || '';
    const lang = this.isSpanish() ? 'ES' : 'EN';
    const key = `${field}${lang}`;
    return (item as any)[key] ?? id;
  }


  getTranslatedDescription(description: string): string {
    const translations: Record<string, string> = {
      'We create custom digital solutions: from fast websites to systems that automate your processes. Scalable technology to grow your business.':
        this.isSpanish() ? 'Desarrollo de sistemas, páginas web y aplicaciones personalizadas con tecnología avanzada.' : description,
      'Train with practical courses: master AI, social media and digital tools to save time and make smart decisions.':
        this.isSpanish() ? 'Cursos prácticos de IA aplicada a negocios y manejo de tecnologías digitales.' : description,
      'Boost your brand with 360° strategies: from targeted advertising to viral content. We use AI to maximize your ROI.':
        this.isSpanish() ? 'Publicidad digital, administración de redes sociales y estrategias de embudos de venta.' : description
    };
    return translations[description] || description;
  }

  getTranslatedFeature(id: string, feature: string): string {
    const item = this.contentText.find(c => c.id == id);
    if (!item) return feature;
    const index = item.featuresEN.indexOf(feature);
    if (index === -1) return feature;
    return this.isSpanish() ? item.featuresES[index] : item.featuresEN[index];
  }

  // Process phase translations
  getPhaseTitle(key: string): string {
    const titles: Record<string, string> = {
      'discovery': this.isSpanish() ? 'Descubrimiento' : 'Discovery',
      'strategy': this.isSpanish() ? 'Estrategia' : 'Strategy',
      'implementation': this.isSpanish() ? 'Implementación' : 'Implementation'
    };
    return titles[key] || key;
  }

  getPhaseDescription(key: string): string {
    const descriptions: Record<string, string> = {
      'discovery': this.isSpanish()
        ? 'Analizamos tus necesidades y objetivos comerciales'
        : 'We analyze your needs and business goals',
      'strategy': this.isSpanish()
        ? 'Diseñamos un plan personalizado para tu negocio'
        : 'We design a customized plan for your business',
      'implementation': this.isSpanish()
        ? 'Ejecutamos la solución con tecnología de punta'
        : 'We implement the solution with cutting-edge technology'
    };
    return descriptions[key] || key;
  }

  getPhasePoints(key: string): string[] {
    const points: Record<string, string[]> = {
      'discovery': this.isSpanish()
        ? [
          'Análisis de mercado',
          'Evaluación tecnológica',
          'Identificación de oportunidades'
        ]
        : [
          'Market analysis',
          'Technology assessment',
          'Opportunity identification'
        ],
      'strategy': this.isSpanish()
        ? [
          'Plan de transformación digital',
          'Hoja de ruta tecnológica',
          'Estrategia de implementación'
        ]
        : [
          'Digital transformation plan',
          'Technology roadmap',
          'Implementation strategy'
        ],
      'implementation': this.isSpanish()
        ? [
          'Desarrollo de soluciones',
          'Capacitación del equipo',
          'Soporte continuo'
        ]
        : [
          'Solution development',
          'Team training',
          'Ongoing support'
        ]
    };
    return points[key] || [];
  }
}