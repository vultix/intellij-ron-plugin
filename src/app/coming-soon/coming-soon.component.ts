import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testEmail() {
    (window as any).Email.send({
      SecureToken: '8a892398-3004-4f13-aedc-4ae933e12e57',
      To: 'intellij-ron@gmail.com',
      From: 'intellij-ron-bot@gmail.com',
      Subject: 'YOLO!',
      Body: 'FROM THE BOT!'
    });
  }
}
