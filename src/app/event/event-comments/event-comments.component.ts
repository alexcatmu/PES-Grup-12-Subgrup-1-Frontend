import { Component, OnInit } from '@angular/core';
import {Ratings} from '../../models/Ratings';
import {RatingsService} from '../../services/ratings.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-comments',
  templateUrl: './event-comments.component.html',
  styleUrls: ['./event-comments.component.css']
})
export class EventCommentsComponent implements OnInit {

  eventId: string;
  comments: Ratings = new Ratings();
  eventName: string;

  constructor(private ratingService: RatingsService,
              protected activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      this.eventName = params.id.split('_')[0];
      this.ratingService.get(this.eventId).subscribe((comments) => {
        this.comments = comments;
      });
    });
  }
}