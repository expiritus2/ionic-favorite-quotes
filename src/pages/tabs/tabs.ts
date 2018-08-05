import {Component} from "@angular/core";
import {FavoritesPage} from "../favorites/favorites";
import {LibraryPage} from "../library/library";
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  favoritesPage = FavoritesPage;
  libraryPage = LibraryPage;
}
