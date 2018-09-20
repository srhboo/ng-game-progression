import { NgModule } from '@angular/core';
import { GamesComponent } from './components/games/games.component';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  imports: [GamesRoutingModule],
  declarations: [GamesComponent]
})
export class GamesModule {}
