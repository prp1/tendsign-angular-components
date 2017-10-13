import {
    Component,
    Input,
    trigger,
    style,
    state,
    transition,
    animate,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    animations: [
        trigger('loaderHolderAnimation', [
            state('void', style({ opacity: 0 })),
            state('*', style({ opacity: 1 })),
            transition(
                'void => *',
                [animate('500ms')],
            ),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-holder',
    styles: [`
        .tac-loader-holder {
            position: relative;

            &.tac-is-loader-shown {

                @media screen and (min-width: (600px)) {
                    min-height: 100px;
                }
            }
        }
    `],
    template: `
        <div class="tac-loader-holder" [class.tac-is-loader-shown]="showLoader">
            <div *ngIf="!showLoader" [@loaderHolderAnimation]>
                <ng-content></ng-content>
            </div>

            <tac-loader-spinner *ngIf="showLoader"></tac-loader-spinner>
        </div>
    `,
})
export class LoaderHolderComponent {

    @Input()
    public showLoader: boolean;

}
