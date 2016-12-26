import {Component, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import {Observable} from 'rxjs/Rx';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'input-debounce',
  templateUrl: 'inputDebounce.html'
})
export class InputDebounceComponent {
  @Input() placeholder: string;
  @Input() delay: number = 300;
  @Input() visible: false;
  @Output() value = new EventEmitter();

  searchForm: FormGroup;

  public inputValue: string;

  constructor(private formBuilder: FormBuilder, private elementRef: ElementRef) {

    this.searchForm = formBuilder.group({
      'searchStr': ['']
    })

    const eventStream = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map((str) =>
          this.searchForm.controls['searchStr'].value
      )
      .filter(str => str.length >= 3)
      .debounceTime(this.delay)
      .distinctUntilChanged();

    eventStream.subscribe(input => this.value.emit(input));
  }
}
