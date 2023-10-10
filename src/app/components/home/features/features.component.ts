import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {

    // FEATURE LIST
    features = [
        {
            src: '../../../../assets/images/notes.svg',
            text: 'The most accurate and documented estimates in the industry',
        },
        {
            src: '../../../../assets/images/network.svg',
            text: 'Representation of the full scope of the project',
        },
        {
            src: '../../../../assets/images/time.svg',
            text: 'Time-saving estimates and communication with the carrier',
        },
        {
            src: '../../../../assets/images/project.svg',
            text: 'Proper project valuation',
        },
        {
            src: '../../../../assets/images/process.svg',
            text: 'Automated process management with our free app',
        },
    ];
}
