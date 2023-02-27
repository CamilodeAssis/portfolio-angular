import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'personal-portfolio';

  isLightTheme = false;

  @HostBinding('class')
  get themeClass() {
    return this.isLightTheme ? 'light-theme' : '';
  }

  toggleTheme() {
    this.isLightTheme = !this.isLightTheme;
  }
}
