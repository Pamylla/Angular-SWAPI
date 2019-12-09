//import { Film } from './film-form';
import { Injectable } from '@angular/core';


@Injectable({providedIn: 'root'})

export class FilmFormsService {

  private filmsForms : any [] = [
    { id: 1, name: 'A New Hope', episode_id: '4', opening_crawl: ' "It is a period of civil war.Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.During the battle, Rebel spies managed to steal secret plans to the Empires ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empires sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...." ', release_date: '1977-05-25' },
    { id: 2, name: 'The Empire Strikes Back', episode_id: '5', opening_crawl: ' "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space...." ', release_date: '1980-05-17'},
    { id: 3, name: 'Return of the Jedi', episode_id: '6', opening_crawl: ' "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the lutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy..." ', release_date: '1983-05-25'},
    { id: 4, name: 'The Phantom Menace', episode_id: '1', opening_crawl: ' "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute. Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict...." ', release_date: '1983-05-25' },
    { id: 5, name: 'Attack of the Clones', episode_id: '2', opening_crawl: ' "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement,under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi...." ', release_date: '2002-05-16' },
    { id: 6, name: 'Revenge of the Sith', episode_id: '3', opening_crawl: ' "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides.Evil is everywhere. In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor...." ', release_date: '2005-05-19' },
    { id: 7, name: 'The Force Awakens', episode_id: '7', opening_crawl: ' "Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. he is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy. Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Lukes whereabouts...." ', release_date: '2015-12-11' }
  ]

  getFilmsForm(){
    return this.filmsForms;
  };

  getFilmForm(id: number){
    for (let i=0; i<this.filmsForms.length; i++){
      let filmForm = this.filmsForms[i];
      if(filmForm.id == id){
        return filmForm;
      }
    }return null;
  }

  constructor() { }
}
