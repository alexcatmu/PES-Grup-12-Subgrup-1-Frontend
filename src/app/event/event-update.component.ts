import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../services/event.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Event} from '../models/event';
import {DatePipe} from '@angular/common';
import {PriceRangeValid} from '../shared/price-range-valid.directive';
import {CrossFieldErrorMatcher} from '../shared/cross-field-error-matcher.directive';
import {StorageService} from '../services/storage.service';
import {Measure} from '../models/measures';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})

export class EventUpdateComponent implements OnInit {

  eventId: string;
  event: Event;
  titleForm = 'Create a new event';
  formEvent: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();
  public measures: Array<Measure> = [
    {name: 'Distància de seguretat', indications: 'Els assistents de diferents bombolles familiars, estaràn en tot moment separats per la distància de seguretat indicada per l\'esdeveniment (com a mínim 1,5m) durant la duració d\'aquest, també inclosos els moments d\'accés/sortida del recinte.'},
    {name: 'Ús de mascareta', indications: 'És obligatori l\'ús de mascareta durant tot el trascurs de l\'esdeveniment, tant dins com fora del recinte.'},
    {name: 'Desinfecció de mans', indications: 'Els assistents s\'hauran de desinfectar les mans en moment d\'entrar al recinte de l\'esdeveniment.'}
  ];

  constructor(
    protected activatedRoute: ActivatedRoute,
    private eventService: EventService,
    private datePipe: DatePipe,
    private route: Router,
    private fb: FormBuilder,
    private storageService: StorageService) {

    this.formEvent = this.fb.group({
      name: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(60)])),
      date: new FormControl(new Date(), [Validators.required]),
      hourIni: new FormControl('', [Validators.required]),
      hourEnd: new FormControl('', [Validators.required]),
      minPrice: new FormControl(null, [Validators.required]),
      maxPrice: new FormControl(null, [Validators.required]),
      measures: new FormArray([]),
      link: new FormControl('')
    }, {validators: PriceRangeValid});
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.eventId = params.id;
      if (this.eventId) {
        this.eventService.get(this.eventId).subscribe((event) => {
          event = event[0];
          this.updateForm(event);
          this.titleForm = 'Update event ' + this.formEvent.value.name;
        });
      }
    });
  }

  private updateForm(event: Event): void {
    this.formEvent.patchValue(event);
  }

  public onSubmit(event: Event): void {
    this.event = {
      _id: this.eventId ? this.eventId : event.name + '_' + this.datePipe.transform(event.date, 'yyyy-MM-dd') + '_' + event.hourIni,
      name: event.name,
      date: this.datePipe.transform(event.date, 'yyyy-MM-dd'),
      hourEnd: event.hourEnd,
      hourIni: event.hourIni,
      minPrice: event.minPrice,
      maxPrice: event.maxPrice,
      measures: event.measures,
      link: event.link,
      id_manager: this.storageService.getCurrentUser().id,
      id_room: 'Camp Nou'
    };

    this.eventService.create(this.event).subscribe(() => {
      this.route.navigate(['/event']).then(() => console.log('Go to event'));
    }, error => {
      console.error('Ha habido un error al hacer create de evento', error);
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.formEvent.controls[controlName].hasError(errorName);
  }

  onCheckChange(event) {
    const formArray: FormArray = this.formEvent.get('measures') as FormArray;

    /* Selected */
    if (event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
