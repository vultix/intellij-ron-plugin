import { BehaviorSubject } from 'rxjs';

export class PageService {
  title = new BehaviorSubject<String>("")
}
