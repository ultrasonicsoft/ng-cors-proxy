import { Component } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-proxy-test';

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
