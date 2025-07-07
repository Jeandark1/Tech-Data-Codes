import { Component, signal, inject, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Video Background con atributos mejorados -->
      <video #bgVideo class="absolute inset-0 w-full h-full object-cover" loop muted playsinline preload="auto">
        <source src="assets/videos/ver2.mp4" type="video/mp4">
        Your browser does not support the video tag
      </video>

      <!-- Particle Canvas -->
      <canvas #particleCanvas 
              class="absolute inset-0 w-full h-full opacity-30"
              [width]="canvasWidth()"
              [height]="canvasHeight()">
      </canvas>

      <!-- Botón de pausa -->
      <button (click)="toggleVideo()" 
              class="absolute bottom-6 right-6 z-50 p-3 rounded-full bg-[rgba(15,15,30,0.6)] border border-[rgba(204,51,255,0.4)] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,153,0.7)]">
        <span *ngIf="isPaused()" class="text-xl flex items-center justify-center w-6 h-6">▶</span>
        <span *ngIf="!isPaused()" class="text-xl flex items-center justify-center w-6 h-6">⏸</span>
      </button> 

      <!-- Content Container -->
      <div class="relative z-10 container mx-auto px-6 text-center">
        <div class="max-w-5xl mx-auto">
          <!-- Main Headline (with futuristic effects) -->
          <div [class]="showContent() ? 'animate-futuristic-reveal' : 'opacity-0'">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 text-shadow-holographic">
              {{ isSpanish() ? 'Construimos Ecosistemas' : 'We Build Digital' }}
              <br>
              <span class=" text-blue-500">
                {{ isSpanish() ? 'Digitales que Crean' : 'Ecosystems That Create' }}
                <br>
              </span>
              <span class="block text-white drop-shadow-glow">
                {{ isSpanish() ? 'Legados' : 'Legacies' }}
              </span>
            </h1>

            <!-- Subheadline -->
            <p class="text-xl md:text-2xl text-[#ffffff] mb-8 max-w-3xl mx-auto font-light bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-[rgba(121,72,199,0.3)] neon-glow">
              {{ isSpanish() 
                ? 'Donde el conocimiento, el software y el marketing convergen para transformar empresas y crear líderes tecnológicos.' 
                : 'Where knowledge, software, and marketing converge to transform businesses and create tech leaders.' 
              }}
            </p>

            <!-- Stats Preview -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div *ngFor="let stat of heroStats" class="glass-effect-futuristic rounded-xl p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(63, 119, 191, 1)]">
                <div class="text-2xl md:text-3xl font-bold text-[#ffd500] mb-1 drop-shadow-glow">{{ stat.value }}</div>
                <div class="text-xl text-[#F5F5F5]">  <b>  {{ stat.label }} </b>  </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button class="btn-futuristic-primary text-lg px-8 py-4 hover:animate-pulse">
                {{ isSpanish() ? 'Explorar Soluciones' : 'Explore Our Solutions' }}
              </button>
              <button class="btn-futuristic-secondary text-lg px-8 py-4">
                {{ isSpanish() ? 'Auditoría de Innovación' : 'Innovation Audit' }}
              </button>  
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 pointer-events-none"></div>
    </section>
  `,
  styles: [`
    .text-shadow-holographic {
      text-shadow: 
        0 0 8px rgba(0, 255, 153, 0.8), /* Verde brillante */
        0 0 16px rgba(63, 119, 191, 1), /* celes1 */
        0 0 24px rgba(255, 255, 255, 0.4); /* Blanco para contraste */
    }

    .drop-shadow-glow {
      filter: drop-shadow(0 0 6px rgba(63, 119, 191, 1)); /* Brillo celeste */
    }

    .glass-effect-futuristic {
      /* background: rgba(15, 15, 30, 0.3);  Fondo oscuro con tinte morado */
      background: rgba(47, 50, 63, 0.3); /* Fondo oscuro con tinte seminegro */

      backdrop-filter: blur(12px);
      border: 1px solid rgba(63, 119, 191, 1); /* Borde morado */
      box-shadow: 
        0 4px 20px rgba(0, 255, 153, 0.15), /* Sombra verde */
        inset 0 0 8px rgba(47, 50, 63, 0.7); /* Brillo interno morado */
    }

    .btn-futuristic-primary {
      background: linear-gradient(45deg, #00FF99, #CC33FF); /* Gradiente verde a morado */
      border: 1px solid rgba(255, 255, 255, 0.4); /* Borde blanco */
      border-radius: 12px;
      color: #FFFFFF; /* Texto blanco */
      font-weight: bold;
      box-shadow: 
        0 0 12px rgba(204, 51, 255, 0.5), /* Brillo morado */
        inset 0 0 8px rgba(0, 255, 153, 0.3); /* Brillo interno verde */
      transition: all 0.3s ease;
    }

    .btn-futuristic-primary:hover {
      box-shadow: 
        0 0 20px rgba(204, 51, 255, 0.7),
        inset 0 0 12px rgba(0, 255, 153, 0.5);
      transform: scale(1.05);
    }

    .btn-futuristic-secondary {
      background: rgba(15, 15, 30, 0.5); /* Fondo morado oscuro */
      border: 1px solid rgba(0, 255, 153, 0.4); /* Borde verde */
      border-radius: 12px;
      color: #F5F5F5; /* Texto blanco apagado */
      font-weight: bold;
      box-shadow: 0 0 12px rgba(0, 255, 153, 0.4); /* Brillo verde */
      transition: all 0.3s ease;
    }

    .btn-futuristic-secondary:hover {
      box-shadow: 0 0 20px rgba(0, 255, 153, 0.6);
      transform: scale(1.05);
    }

    .neon-glow {
      box-shadow: 
        0 0 12px rgba(0, 255, 153, 0.5), /* Brillo verde */
        inset 0 0 8px rgba(204, 51, 255, 0.3); /* Brillo interno morado */
    }

    .animate-hologram {
      animation: hologram 2.5s infinite alternate;
    }

    .animate-futuristic-reveal {
      animation: futuristicReveal 1.2s ease-out forwards;
    }

    @keyframes hologram {
      0% { 
        opacity: 0.95; 
        text-shadow: 0 0 8px rgba(0, 255, 153, 0.7); /* Verde */
      }
      50% { 
        opacity: 1; 
        text-shadow: 
          0 0 16px rgba(204, 51, 255, 0.8), /* Morado */
          0 0 24px rgba(255, 255, 255, 0.5); /* Blanco */
      }
      100% { 
        opacity: 0.98; 
        text-shadow: 
          0 0 12px rgba(0, 255, 153, 0.8), /* Verde */
          0 0 20px rgba(204, 51, 255, 0.6); /* Morado */
      }
    }

    @keyframes futuristicReveal {
      0% { 
        opacity: 0; 
        transform: translateY(20px) scale(0.98);
        filter: blur(4px);
      }
      100% { 
        opacity: 1; 
        transform: translateY(0) scale(1);
        filter: blur(0);
      }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy, AfterViewInit {
  private languageService = inject(LanguageService);
  
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  
  canvasWidth = signal(0);
  canvasHeight = signal(0);
  isPaused = signal(false);
  showContent = signal(false);
  
  currentLanguage = this.languageService.currentLanguage;
  
  heroStats = [
    { value: '10K+', label: 'Professionals' },
    { value: '20+', label: 'SaaS Solutions' },
    { value: '120+', label: 'Brands' },
    { value: '50+', label: 'Startups' }
];
  
  ngOnInit(): void {
    this.updateCanvasSize();
    window.addEventListener('resize', this.updateCanvasSize.bind(this));

    // Ocultar contenido inicialmente
    this.showContent.set(false);
    
    // Mostrar contenido después de 12.5 segundos
    setTimeout(() => {
      this.showContent.set(true);
    }, 12500);
  }

  ngAfterViewInit(): void {
    this.initializeVideo();
  }

  private initializeVideo(): void {
    const video = this.bgVideo.nativeElement;

    // Asegurar que el video esté muteado y tenga playsinline
    video.muted = true;
    video.playsInline = true;

    // Intentar reproducir el video
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Video iniciado automáticamente');
          this.isPaused.set(false);
        })
        .catch((error) => {
          console.error('Error al reproducir automáticamente:', error);
          this.isPaused.set(true);

          // Reintentar reproducción tras interacción del usuario
          const playAfterInteraction = () => {
            video.play()
              .then(() => {
                console.log('Video iniciado tras interacción del usuario');
                this.isPaused.set(false);
                document.removeEventListener('click', playAfterInteraction);
                document.removeEventListener('touchstart', playAfterInteraction);
              })
              .catch((err) => {
                console.error('Error al reproducir tras interacción:', err);
              });
          };

          // Escuchar interacción del usuario
          document.addEventListener('click', playAfterInteraction, { once: true });
          document.addEventListener('touchstart', playAfterInteraction, { once: true });
        });
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateCanvasSize.bind(this));
  }

  isSpanish(): boolean {
    return this.languageService.getCurrentLanguageCode() === 'es';
  }

  trackByIndex(index: number): number {
    return index;
  }

  toggleVideo(): void {
    if (this.bgVideo.nativeElement.paused) {
      this.bgVideo.nativeElement.play();
      this.isPaused.set(false);
    } else {
      this.bgVideo.nativeElement.pause();
      this.isPaused.set(true);
    }
  }

  private updateCanvasSize(): void {
    this.canvasWidth.set(window.innerWidth);
    this.canvasHeight.set(window.innerHeight);
  }
}