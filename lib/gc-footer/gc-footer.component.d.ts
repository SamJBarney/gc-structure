import { OnInit, EventEmitter } from '@angular/core';
export declare class GCFooterComponent implements OnInit {
    teamId: string;
    branch: string;
    selectedItem: number;
    location: string;
    onRoute: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onMenuItemClicked(target_location: string, path?: string): void;
    private buildBBLRoute;
    private buildTeamSiteRoute;
    private isProdBranch;
}
