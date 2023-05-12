import { Injectable } from '@angular/core';
import { ComingSoonMovie } from 'src/app/Model/comingsoon';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }


  commingSoonMovies: ComingSoonMovie[] = [
    {
      tags: "AWARDS,WHATS HOT",
      title: "Halo Infinite",
      description: "Halo Infinite: The Movie takes audiences on an exhilarating sci-fi adventure set in the expansive universe of the Halo franchise. As Master Chief, the iconic super-soldier, takes center stage, the film explores a visually stunning world filled with breathtaking landscapes and futuristic technology. With a string of intense battles against the alien Covenant forces and a new formidable enemy known as the Banished, the action sequences unfold with pulse-pounding excitement. Amidst the chaos, deep character development brings emotional depth to the story, highlighting the resilience and determination of Master Chief and his allies. Spectacular visual effects, epic space battles, and a powerful musical score immerse viewers in the grandeur of the Halo universe. Halo Infinite: The Movie is a thrilling cinematic experience that captures the essence of the beloved game series and leaves audiences eagerly anticipating the next chapter in this epic saga.",
      img: 'assets/images/halo.jpg'
    },
    {
      tags: "COMING SOON,NEW RELEASES",
      title: "Assassin's Creed Brotherhood",
      description: "Assassin\'s Creed Brotherhood,\" the captivating world of Renaissance Italy comes alive on the silver screen. The story follows the skilled assassin Ezio Auditore da Firenze as he navigates the treacherous landscapes of Rome, seeking justice and revenge. With breathtaking action sequences, heart-pounding parkour stunts, and a gripping plot, the film delves deep into the intricate web of conspiracies woven by the Templars. As Ezio forms a brotherhood of like-minded assassins, their bond grows stronger, leading to epic battles and awe-inspiring displays of combat prowess. Amidst the grandeur of Renaissance architecture and the shadows of political intrigue, \"Assassin\'s Creed Brotherhood\" captivates audiences with its blend of historical drama, exhilarating action, and the eternal struggle between assassins and Templars.",
      img: 'assets/images/assassins-creed.jpg'
    },
    {
      tags: "COMING SOON,NEW RELEASES",
      title: "Tomb Raider (2013)",
      description: "In the action-packed film adaptation of Tomb Raider (2013), audiences are transported into the thrilling world of Lara Croft. As a young and determined archaeologist, Lara embarks on a perilous journey to a remote island in search of her missing father. The movie showcases her transformation from an inexperienced explorer to a fierce and resilient adventurer. With breathtaking landscapes, treacherous tombs, and heart-stopping action sequences, the film brings the iconic game to life. Lara's resourcefulness, intelligence, and physical prowess are put to the test as she confronts a secret organization and unravels ancient mysteries. The movie strikes a balance between adrenaline-fueled escapades and poignant moments of self-discovery. With stunning visual effects, intense battles, and a compelling narrative, Tomb Raider (2013) captivates audiences with its high-stakes adventure and showcases Lara Croft as a true hero",
      img: 'assets/images/tomb-raider.jpg'
    }
  ]

  getMovies() {
    return this.commingSoonMovies;
  }
}
