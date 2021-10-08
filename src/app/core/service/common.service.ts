import {Injectable, Output, EventEmitter} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {timeout} from 'rxjs/operators';
import {OptionCallAPI} from "../../shared/shared.constant";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() progressEvent = new EventEmitter();

  constants = Constants;

  constructor(
    private http: HttpClient
  ) { }

  callApi(options: OptionCallAPI) {
    const method = options.method;
    let url = 'http://localhost:8443/api/' + options.url;
    if (location.hostname !== 'localhost') {
      url = 'https://' + location.hostname + ':8443/api/' + options.url;
    }
    const data = options.data;
    const contentType = options.contentType ? options.contentType : 'application/json';
    let progress = options.progress;
    if (progress === undefined) {
      progress = true;
    }
    if (progress) {
      // @ts-ignore
      this.progressEvent.emit(true);
    }

    let obs: Observable<any>;

    const httpOptions = {
      headers: this.buildHttpHeaders(contentType)
    };

    if (method === 'GET') {
      obs = this.http.get(url, httpOptions);
    } else if (method === 'POST') {
      obs = this.http.post(url, JSON.stringify(data), httpOptions);
    } else if (method === 'PUT') {
      obs = this.http.put(url, JSON.stringify(data), httpOptions);
    } else {
      obs = this.http.delete(url, httpOptions);
    }

    let timeoutSeconds = 90;
    if (options.timeoutSeconds) {
      timeoutSeconds = options.timeoutSeconds;
    }

    obs.pipe(timeout(1000 * timeoutSeconds)).subscribe(
      (successData) => {
        if (typeof options.success === 'function') {
          if (progress) {
            // @ts-ignore
            this.progressEvent.emit(false);
          }
          options.success(successData);
        }
      },
      (errorData) => {
        if (progress) {
          // @ts-ignore
          this.progressEvent.emit(false);
        }
        if (errorData.status === '504' || errorData.name === 'TimeoutError') {
          errorData.error = {
            errorMessage: {
              errorCode: 'ERROR_CODE',
              messages: {
                vn: 'mat ket noi',
                en: 'connect timeout'
              }
            }
          };
        }
      });
  }

  buildHttpHeaders(contentType: string) {
    if (!contentType || contentType !== 'upload') {
      return new HttpHeaders({
        'Content-Type': contentType,
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Access-Control-Allow-Origin': 'https://giaitrivn247.com',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        'Access-Control-Max-Age': '3600',
        'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'
      })
    }
    return new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
      'Access-Control-Allow-Origin': 'https://giaitrivn247.com',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
      'Access-Control-Max-Age': '3600',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, X-Requested-With, remember-me'
    })
  }

}
