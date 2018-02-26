import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public Tabs=[
    {
      "name":"Member Accums Inquiry",
      "url":"member-accums-inquiry",
      "active": false
    },
    {
      "name":"Manual Load",
      "url":"Manual Load",
      "active": false
    },
    {
      "name":"Audit Trail",
      "url":"Audit Trail",
      "active": false
    },
    {
      "name":"Vendor Accums",
      "url":"Vendor Accums",
      "active": false
    },
    {
      "name":"Manual Speed Load",
      "url":"manual-speed-load",
      "active": true
    }]
}
