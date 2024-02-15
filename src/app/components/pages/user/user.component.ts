import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user: any ;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log("params",params);
        this.user = +params['user'];
        // Hacer algo con userId
    });
   }


}
