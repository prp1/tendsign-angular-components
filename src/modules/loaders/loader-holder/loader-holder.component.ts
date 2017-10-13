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
    styleUrls: [
        './loader-holder.component.less',
    ],
    templateUrl: './loader-holder.component.html',
})
export class LoaderHolderComponent {

    @Input()
    public showLoader: boolean;

}
