import {
    Component,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-btn',
    styles: [`
        .tac-loader-btn-wrap {
            position: relative;
        }

        :host /deep/ .btn {
            margin-bottom: 0;
        }
    `],
    template: `
        <div class="tac-loader-btn-wrap">
            <ng-content></ng-content>
            <tac-loader-spinner [inline]="true" *ngIf="showLoader"></tac-loader-spinner>
        </div>
    `,
})
export class LoaderBtnComponent {

    @Input()
    public showLoader: boolean;

}
