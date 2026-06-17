import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  dirty = false;

  typing() {
    this.dirty = true;
  }

  save() {

    this.dirty = false;

    alert('Profile Saved Successfully');

  }

}