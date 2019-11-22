import {Injectable} from '@angular/core';

@Injectable()
export class Logger {
  infos: string[] = [];
  errors: string[] = [];

  info(message: string) {
    this.infos.push(message);
    console.info(message);
  }

  error(message: string) {
    this.errors.push(message);
    console.error(message);
  }
}
