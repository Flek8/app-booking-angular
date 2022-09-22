import { Component } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-reservation-form',
  template: `

      <div
          class="horiz-grid separator"
          *ngFor="let item of cart.items"

      >

          <div class="font-medium">{{item.hotel?.name}}</div>

          <div>{{item.room?.label}}</div>

          <div>{{item.room?.price}}</div>

          <div>
              <i
                  class="icon ion-ios-trash"
                  (click)="cart.removeFromCart(item)"
              ></i>
          </div>

      </div>

      <button
          *ngIf="cart.items.length"
          type="submit"
          (click)="cart.proceed()"
          class="cstm-btn"
      >Procedi</button>

      <br>
      <br>

      <div class="horiz-grid">

          <div></div>
          <em>{{cart.items.length}} items</em>

      </div>

  `,
  styles: [
  ]
})
export class ReservationFormComponent {

  constructor(public cart: CartService) { }

}
