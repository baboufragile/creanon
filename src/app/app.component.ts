import {Component} from '@angular/core';

import { FormControl } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import * as path from 'path';
import * as fs from "fs";


//const fs = require('file-system')


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CREANON';
  name = new FormControl('');
  jobs = [
    { name: 'test', children: [{ name: 'rr' }] },
    { name: 'test1', children: [{ name: 'rr1' }] },
  ];
}






