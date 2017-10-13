import {
    Component,
    Input,
    ChangeDetectionStrategy,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-btn',
    styleUrls: [
        './loader-btn.component.less',
    ],
    templateUrl: './loader-btn.component.html',
})
export class LoaderBtnComponent {

    @Input()
    public showLoader: boolean;

}
