import { ComponentFixture, fakeAsync, flush, TestBed } from '@angular/core/testing';
import { AccountSummaryComponent } from './account-summary.component';
import { Account } from 'libs/shared/models/src/lib/account';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// TODO: 9. Topics in this file: Angular Unit Testing w/ Jest
describe('AccountSummaryComponent', () => {
  let component: AccountSummaryComponent;
  let fixture: ComponentFixture<AccountSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule , RouterModule.forRoot([])],
      declarations: [AccountSummaryComponent],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve accounts', () => {
    expect.assertions(2);
    expect(component.accounts$).toBeTruthy();
    component.accounts$.subscribe(acc => {
      expect(acc.length).toBe(4);
    });
  });

  describe("#filterAccounts", () => {
    it('should return filter accounts with all accounts', () => {
      // TODO: 10. this test isn't doing anything atm, how can we make it more meaningful?
      const accounts: Account[] = [
        { id: "1234", balance: 7500, currency: "cad" },
        { id: "1235", balance: 4500, currency: "cad" },
        { id: "1236", balance: 2102, currency: "usd" },
      ];
      const filtered = component.filterAccounts(accounts);
      expect(filtered).toStrictEqual(accounts);
    });
    it('should return filter accounts with CAD accounts', () => {
      component.accountsFilter = "cad";
      const accounts: Account[] = [
        { id: "1234", balance: 7500, currency: "cad" },
        { id: "1235", balance: 4500, currency: "cad" },
        { id: "1236", balance: 2102, currency: "usd" },
      ];
      const filtered = component.filterAccounts(accounts);
      expect(filtered).toStrictEqual([{ id: "1234", balance: 7500, currency: "cad" },
      { id: "1235", balance: 4500, currency: "cad" }]);
    });
    it('should return filter accounts with USD accounts', () => {
      component.accountsFilter = "usd";
      const accounts: Account[] = [
        { id: "1234", balance: 7500, currency: "cad" },
        { id: "1235", balance: 4500, currency: "cad" },
        { id: "1236", balance: 2102, currency: "usd" },
      ];
      const filtered = component.filterAccounts(accounts);
      expect(filtered).toStrictEqual([{ id: "1236", balance: 2102, currency: "usd" }]);
    });

  });
});
