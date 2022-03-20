import { Injectable } from '@angular/core';
import { AppMode } from 'src/app/interfaces/app-config.interface';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private appMode: AppMode = 'OFFLINE';

  constructor() {}

  /**
   *
   * @param mode mode in which application operates
   */
  setAppMode(mode: AppMode): void {
    this.appMode = mode;
  }

  /**
   *
   * @returns appMode
   */
  getAppMode(): AppMode {
    return this.appMode;
  }
}
