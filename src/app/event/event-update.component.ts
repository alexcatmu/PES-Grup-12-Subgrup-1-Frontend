import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  titleForm = 'Create a new event';

  formEvent = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    street: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    date: new FormControl(new Date(), [Validators.required]),
    hourIni: new FormControl('', [Validators.required]),
    hourEnd: new FormControl('', [Validators.required]),
    minPrice: new FormControl('', [Validators.required]),
    maxPrice: new FormControl('', [Validators.required]),
    measures: new FormControl(''),
    link: new FormControl('')
  });

  constructor(
    protected activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private datePipe: DatePipe,
    private route: Router) {
      console.log(activatedRoute);
      console.log(datePipe);
      console.log(route);
      console.log(eventService);
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      if (this.eventId) {
        this.eventService.get(Number(this.eventId)).subscribe((event) => {
          event = event[0];
          this.updateForm(event);
          this.titleForm = 'Update event ' + this.formEvent.value.name;
        });
      }
      this.formEvent.get('street').valueChanges.subscribe(value => console.log('value changed', value));
    });
  }

  private updateForm(event: Event): void {
    this.formEvent.patchValue({
      _id: event._id,
      name: event.name,
      street: event.street,
      date: this.datePipe.transform(event.date, 'yyyy-MM-dd'),
      hourIni: event.hourIni,
      hourEnd: event.hourEnd,
      minPrice: event.minPrice,
      maxPrice: event.maxPrice,
      measures: event.measures,
      link: event.link
    });
  }

  public onSubmit(event): void {
    this.event = {
      _id: this.eventId ? Number(this.eventId) : Math.floor((Math.random() * 100) + 1),
      name: event.name,
      street: event.street,
      date: this.datePipe.transform(event.date, 'yyyy-MM-dd'),
      hourEnd: event.hourIni,
      hourIni: event.hourEnd,
      minPrice: event.minPrice,
      maxPrice: event.maxPrice,
      measures: ["1", "2"],
      link: event.link,
      id_manager: "123",
      id_room: "1234"
    };

    console.log(this.event);

    this.eventService.create(this.event).subscribe(() => {
      console.log(this.event);
      this.route.navigate(['/event']).then(() => console.log('Go to event'));
    }, error => {
      console.error('Ha habido un error al hacer create de evento', error);
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formEvent.controls[controlName].hasError(errorName);
  }

}
