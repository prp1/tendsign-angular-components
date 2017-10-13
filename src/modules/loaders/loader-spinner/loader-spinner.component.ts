import {
    Component,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-spinner',
    styleUrls: [
        './loader-spinner.component.less',
    ],
    templateUrl: './loader-spinner.component.html',
})
export class LoaderSpinnerComponent {

    @Input()
    public inline: boolean;

}
