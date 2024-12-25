import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // This assumes you have an AppModule in the src/app directory.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
