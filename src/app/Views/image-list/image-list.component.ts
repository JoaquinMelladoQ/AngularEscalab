import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthorService} from 'src/app/Service/author.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  listImages: Array<any> = [];
  constructor(
    private _authorService: AuthorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getImages()
  }

  getImages() {
    this._authorService.getAllImages().subscribe((images) => {
      this.listImages = images;
      console.log(this.listImages)
    })
  }

}
