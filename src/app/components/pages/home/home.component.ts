import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CalendarComponent } from '../../partial/calendar/calendar.component';
import { FormsModule, NgModel } from '@angular/forms';
import { FilterPipe } from '../../filtros/filter.pipe';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../partial/header/header.component';
import { FooterComponent } from '../../partial/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterLink, UserComponent, CalendarComponent, FormsModule, FilterPipe, HeaderComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  filterUser = '';

  public title = 'Home Page';
  
  ngOnInit(): void {
  }
}
