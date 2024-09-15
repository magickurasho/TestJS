import { Component, ChangeDetectionStrategy, Input, ElementRef, SimpleChange, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Uppy } from '@uppy/core';
import StatusBar from '@uppy/status-bar';
import type { StatusBarOptions } from '@uppy/status-bar';
import { UppyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'uppy-status-bar',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBarComponent extends UppyAngularWrapper implements OnDestroy, OnChanges  {
  @Input() uppy: Uppy = new Uppy;
  @Input() props: StatusBarOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount({ id: 'angular:StatusBar', target: this.el.nativeElement }, StatusBar)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, StatusBar);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }

}
