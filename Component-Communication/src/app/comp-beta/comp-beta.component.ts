//comp-beta.component.ts

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-comp-beta',
    templateUrl: './comp-beta.component.html',
    styleUrls: ['./comp-beta.component.css'],
})
export class CompBetaComponent implements OnInit {
    constructor() { }

    betaText = 'Hello beta!';

    ngOnInit(): void { }

    @Output() childButtonClicked = new EventEmitter<string>();

    passToParent() {
        this.childButtonClicked.emit('Button clicked in beta component');
    }
}