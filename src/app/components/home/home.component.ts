// components
import { Component, OnInit }   from '@angular/core';

// firebase
import { AngularFireDatabase } from 'angularfire2/database';

// rxjs
import { Observable }          from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // define properties
  public courses: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    // set properties
    this.courses = this.getCourses('/courses');
  }

  getCourses(firebaseDatabaseFilePath): Observable<any[]> {
    // use Firebase Database Service to retrieve data from Firebase Database Collection and return observable
    return this.db.list(firebaseDatabaseFilePath).valueChanges();
  }
}