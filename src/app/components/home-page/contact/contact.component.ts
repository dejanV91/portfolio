import { Component } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faXTwitter = faXTwitter;
}
