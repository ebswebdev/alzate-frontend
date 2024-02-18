import { Component, OnInit } from '@angular/core';
export {}; declare global { interface Window { Calendly: any; } } 

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit{
  
  ngOnInit(): void {
  }
}

