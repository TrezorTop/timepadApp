import { Component } from '@angular/core';
import {EventsService} from "./shared/events.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private eventService: EventsService) {
    eventService.getOrganizationEvents().subscribe()
  }
}
