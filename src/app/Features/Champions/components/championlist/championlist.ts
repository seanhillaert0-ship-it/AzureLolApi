import { Component, computed, input, signal } from '@angular/core';
import { champions } from '../../Models/champion.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-championlist',
  styleUrl: './championlist.scss',
  templateUrl: './championlist.html',
})
export class Championlist {
 Mychampions = signal<champions[]>([
 {
  id: 1,
    name: "Jinx",
    title: "Gâchette folle",
    role: "ADC",
    imageurl: "Images/Champions/Jinx-image.webp",
    story: "Une criminelle impulsive et maniaque de Zaun qui vit pour semer le chaos sans se soucier des conséquences."
  },
  {
    id: 2,
    name: "Yasuo",
    title: "Disgracié",
    role: "Mid / Top",
    imageurl: "Images/Champions/yasuo-image.jpg",
    story: "Un bretteur agile et déterminé, maître du vent, contraint de fuir après avoir été injustement accusé du meurtre de son maître."
  },
  {
    id: 3,
    name: "Xayah",
    title: "Rebelles des xayahs",
    role: "ADC",
    imageurl: "Images/Champions/xayah-image.jpg",
    story: "Une révolutionnaire vasthaya qui mène une guérilla impitoyable pour sauver sa race et restaurer sa gloire passée."
  },
  {
    id: 4,
    name: "Ezreal",
    title: "Explorateur prodige",
    role: "ADC",
    imageurl: "Images/Champions/Ezreal-image.jpg",
    story: "Un aventurier intrépide doté d'un artefact mystique shurimien, toujours à la recherche de ruines oubliées et de dangers."
  },
  {
    id: 5,
    name: "Tristana",
    title: "Canule de la bande",
    role: "ADC",
    imageurl: "Images/Champions/tristana-image.jpg",
    story: "Une yordle courageuse maniant son énorme canonnade « Boum » avec une discipline militaire sans faille."
  },
  {
    id: 6,
    name: "Aatrox",
    title: "Épée des Darkin",
    role: "Top",
    imageurl: "Images/Champions/aatrox-image.jpg",
    story: "Jadis défenseur loyal de Shurima, il a été corrompu par le Vide et emprisonné dans sa propre lame, cherchant désormais la destruction totale."
  },
  {
    id: 7,
    name: "Caitlyn",
    title: "Shérif de Piltover",
    role: "ADC",
    imageurl: "Images/Champions/cailtllyn-image.jpg",
    story: "La meilleure protectrice de la paix à Piltover, résolue à débarrasser la cité de ses criminels grâce à son fusil de précision."
  },
  {
    id: 8,
    name: "Ahri",
    title: "Renarde à neuf queues",
    role: "Mid",
    imageurl: "Images/Champions/ahri-image.jpg",
    story: "Une Vastaya connectée à la magie brute de Runeterra, capable de manipuler les émotions et de consumer l'essence de ses proies."
  },
  {
    id: 9,
    name: "Thresh",
    title: "Garde aux chaînes",
    role: "Support",
    imageurl: "Images/Champions/thresh-image.jpg",
    story: "Un esprit sadique et rusé des Îles Obscures qui prend un malin plaisir à tourmenter les âmes des vivants et des morts."
  },
  {
    id: 10,
    name: "Lee Sin",
    title: "Moine aveugle",
    role: "Jungle",
    imageurl: "Images/Champions/lee-sin-image.jpg",
    story: "Un maître des arts martiaux d'Ionia qui canalise l'esprit du dragon pour terrasser ses ennemis malgré sa cécité."
  }
 ]);
searchTerm = signal<string>('');

  // Signal dérivé (computed) qui calcule la liste filtrée en temps réel
  filteredChampions = computed(() => {
    const search = this.searchTerm().toLowerCase().trim();
    if (!search) {
      return this.Mychampions();
    }
    return this.Mychampions().filter(champ => 
      champ.name.toLowerCase().includes(search)
    );
  });

}
