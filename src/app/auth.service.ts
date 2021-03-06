import { Injectable } from '@angular/core';
// RxJS 6
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false; // L'utilisateur est-il connecté ?
	redirectUrl: string; // où rediriger l'utilisateur après l'authentification ?
	// Méthode de connexion
	login(name: string, password: string): Observable<boolean> {
		// Appel à un service d'authentification
		let isLoggedIn = (name === 'pikapika' && password === 'pikapika');
		return of(true).pipe(
			delay(1000),
			tap(val => this.isLoggedIn = isLoggedIn)
		);
	}

	// Méthode de déconnexion
	logout(): void {
		this.isLoggedIn = false;
	}
}
