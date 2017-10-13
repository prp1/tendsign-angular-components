import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'tac-loader-cover',
    styles: [`
        .tac-loader-cover--overlay {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: #fff;
            opacity: .7;
            z-index: 10;
        }

        :host /deep/ .tac-loader-spinner {
            z-index: 10;
        }
    `],
    template: `
        <div class="tac-loader-cover">
            <div class="tac-loader-cover--overlay"></div>
            <tac-loader-spinner></tac-loader-spinner>
        </div>
    `,
})
export class LoaderCoverComponent {

}
