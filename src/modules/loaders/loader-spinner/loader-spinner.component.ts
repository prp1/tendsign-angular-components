import {
    Component,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-spinner',
    styles: [`
        .tac-loader-spinner--inline {
            height: 25px;
            position: absolute;
            margin: -12px 0 0 -21px;
            left: 50%;
            top: 50%;
        }
    `],
    template: `
        <div class="tac-loader-spinner" [class.tac-loader-spinner--inline]="inline">
            <div class="tac-loader-spinner--rect tac-loader-spinner--rect1"></div>
            <div class="tac-loader-spinner--rect tac-loader-spinner--rect2"></div>
            <div class="tac-loader-spinner--rect tac-loader-spinner--rect3"></div>
            <div class="tac-loader-spinner--rect tac-loader-spinner--rect4"></div>
            <div class="tac-loader-spinner--rect tac-loader-spinner--rect5"></div>
        </div>
    `,
})
export class LoaderSpinnerComponent {

    @Input()
    public inline: boolean;

}
