import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})

export class ScrollAnimation implements OnInit  {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Opcional: dejar de observar después de la primera animación
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(this.el.nativeElement);
  }

}
