import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'libs/shared/services/src/lib/account.service';

@Component({
  selector: 'bfi-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailsComponent implements OnInit{
  id: any = '';
  selectedAccount: any;
  constructor(private route: ActivatedRoute, private accountService: AccountService) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params?.['id'];
    this.accountService.selectedaccount$.subscribe((value) => {
      this.selectedAccount = value[0];
    });
    
  }
  
}
