import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'src/config/particlesjs-config';
//@ts-ignore
import Typewriter from 't-writer.js';

declare let particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    this.invokeParticles();
    const target = document.querySelector('.tw');

    const writer = new Typewriter(target, {
      loop: true,
      typeColor: 'rgba(199, 210, 254, 1)',
    });

    writer
      .strings(
        400,
        'Frontend Developer',
        'React Developer',
        'Angular Developer'
      )
      .start();
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
