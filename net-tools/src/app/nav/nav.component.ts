import { Component } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
	getWidth() : any {
		if (document.body.offsetWidth < 800) {
			return '90%';
		}
		return 800;
	}
}
