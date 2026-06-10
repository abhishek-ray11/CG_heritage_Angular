import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  templateUrl: './badge.html',
  styleUrl: './badge.css'
})
export class Badge {

  @Input() label='';
  @Input() color='green';

}