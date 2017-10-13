import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-cover',
    styleUrls: [
        './loader-cover.component.less',
    ],
    templateUrl: './loader-cover.component.html',
})
export class LoaderCoverComponent {

}
