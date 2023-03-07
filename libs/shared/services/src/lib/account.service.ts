import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Account } from '@bfi/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  getAccounts(): Observable<Account[]> {
    const accounts: Account[] = [
      { id: "1234", balance: 7500, currency: "cad" },
      { id: "1235", balance: 4500, currency: "cad" },
      { id: "1236", balance: 2102, currency: "usd" },
    ];
    return of(accounts);
  }
  private accounts$ = new BehaviorSubject<any>({});
  selectedaccount$ = this.accounts$.asObservable();

  setAccount(account: any) {
    this.accounts$.next(account);
  }
}
