import { NgModule } from "@angular/core";
import { ShoppingCartService } from "../restaurant-detail/shopping-cart/shopping-cart-services";
import { RestaurantsService } from "../restaurants/restaurants.service";
import { OrderService } from "../order/order.service";

@NgModule({
  providers: [ShoppingCartService, RestaurantsService, OrderService]
})
export class CoreModule {

}