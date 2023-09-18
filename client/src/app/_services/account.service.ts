import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

// Cette annotation permet d'injecter notre service 
// providedIn Root nous dit qu'il l'envoie dans le fichier app.modules dans le tableau provider
@Injectable({
  providedIn: 'root'
})

// C'est un singleton qui est créé au démarage de notre application et détruit à la fermeture de celle-ci

export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();                 // le '$' indique que c'est unobservable 

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;

        // Si on a un user valide on save ses datas dans le localstorage
        if(user){
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);                            // on assigne notre user a notre variable
        }
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);                                  // on assigne la valeur null en qu'a de deconnexion
  }
  
}
