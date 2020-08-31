import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  constructor() { }

  public images: Array<any> = [
    {
      src: "https://farm66.staticflickr.com/65535/49489692872_a202029a13_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49489489251_21a1775a60_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49489694752_f8d8745a85_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49489694752_f8d8745a85_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    },
    {
      src: "https://farm66.staticflickr.com/65535/49488995108_5283113839_b.jpg",
    }
  ];


  ngOnInit(): void {
  }

}
