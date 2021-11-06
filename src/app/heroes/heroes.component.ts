import { HEROES } from '../mock-heroes';

export class HeroesComponent implements OnInit {

  heroes = HEROES;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

selectedHero?: Hero;
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
