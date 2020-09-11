import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  public songs: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
    this.songs = [
    '11300977',
    '8715297',
    '12938550'
    ];
  }

  urls(){
    return this.songs.map(s => `https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F${s}&amp;color=00ccff`);
  }

}
