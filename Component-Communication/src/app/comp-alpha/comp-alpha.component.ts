//comp-alpha.component.ts

import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-comp-alpha',
    templateUrl: './comp-alpha.component.html',
    styleUrls: ['./comp-alpha.component.css'],
})
export class CompAlphaComponent implements OnInit {
    constructor() { }

    alphaText = 'Hello alpha!';

    ngOnInit(): void { }

    @Input('textFromParent') parentText = '';
}