import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// @todo: how to not include in prod bundle?
import { auguryBootstrap } from '@augury/core';
import { OverlayHealthIndicator } from '../../../augury-labs/packages/plugins/overlay-health-indicator/src';

auguryBootstrap({
  platform: platformBrowserDynamic,
  ngModule: AppModule,
  NgZone,
  plugins: [
    // new PerformanceProfilerPlugin(),
    // new PopoutZoneMonitor(),
    // new c.CDHeatMap(),
    new OverlayHealthIndicator(),
  ]
});
