import { Component, ChangeDetectionStrategy, ElementRef, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import Dashboard from '@uppy/dashboard';
import type { DashboardOptions } from '@uppy/dashboard';
import { Uppy } from '@uppy/core';
import { UppyAngularWrapper } from '../../utils/wrapper';

@Component({
  selector: 'uppy-dashboard',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent extends UppyAngularWrapper implements OnDestroy, OnChanges {
  @Input() uppy: Uppy = new Uppy;
  @Input() props: DashboardOptions = {};

  constructor(public el: ElementRef) {
    super();
  }

  ngOnInit() {
    this.onMount({ id: 'angular:Dashboard', inline: true, target: this.el.nativeElement }, Dashboard)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.handleChanges(changes, Dashboard);
  }

  ngOnDestroy(): void {
    this.uninstall();
  }

}
