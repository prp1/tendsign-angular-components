import { LoaderBtnComponent } from './loader-btn/loader-btn.component';
import { LoaderSpinnerComponent } from './loader-spinner/loader-spinner.component';
import { LoaderCoverComponent } from './loader-cover/loader-cover.component';
import { LoaderHolderComponent } from './loader-holder/loader-holder.component';
import { LoaderLauncherComponent } from './loader-launcher/loader-launcher.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoaderHolderComponent,
        LoaderCoverComponent,
        LoaderSpinnerComponent,
        LoaderBtnComponent,
        LoaderLauncherComponent,
    ],
    // entryComponents: [
    //     LoaderSpinnerComponent,
    // ],
    exports: [
        LoaderHolderComponent,
        LoaderCoverComponent,
        LoaderSpinnerComponent,
        LoaderBtnComponent,
        LoaderLauncherComponent,
    ],
    imports: [
        CommonModule,
    ],
})
export class LoadersModule {

}
