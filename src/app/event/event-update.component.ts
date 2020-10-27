import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EventService } from '../services/event.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../models/event';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event.component.css']
})

export class EventUpdateComponent implements OnInit {

  eventId: string;
  event: Event;

  formEvent = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    street: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    date: new FormControl(new Date(), [Validators.required]),
    hourIni: new FormControl('', [Validators.required]),
    hourEnd: new FormControl('', [Validators.required]),
    price_range: new FormControl('', [Validators.required]),
    measures: new FormControl('', [Validators.required]),
    ratings: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required])
  });
  constructor(
    protected activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private datePipe: DatePipe,
    private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      if (this.eventId) {
        console.log('estamos en el update');
      } else {
        console.log('estamos en el new');
      }
      this.formEvent.get('street').valueChanges.subscribe(value => console.log('value changed', value));
    });
  }

  public onSubmit(event): void {
    this.event = {
      _id: Math.floor((Math.random() * 100) + 1),
      name: event.name,
      street: event.street,
      date: this.datePipe.transform(event.date, 'yyyy-MM-dd'),
      hourEnd: event.hourIni,
      hourIni: event.hourEnd,
      price_range: event.price_range,
      measures: event.measures,
      ratings: event.ratings,
      link: event.link
    };

    console.log(this.event);

    this.eventService.create(this.event).subscribe((response) => {
      console.log(this.event);
      this.route.navigate(['/event']);
    }, error => {
      console.error('Ha habido un error al hacer create de evento', error);
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formEvent.controls[controlName].hasError(errorName);
  }

}
