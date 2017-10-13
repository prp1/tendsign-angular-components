import {
    Component,
    ChangeDetectionStrategy,
    HostBinding,
    Input,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-launcher',
    styleUrls: [
        './loader-launcher.component.less',
    ],
    templateUrl: './loader-launcher.component.html',
})
export class LoaderLauncherComponent {

    @Input()
    public title: string;

    @HostBinding('class.tac-loader-launcher--wrap')
    public className: boolean = true;

}
