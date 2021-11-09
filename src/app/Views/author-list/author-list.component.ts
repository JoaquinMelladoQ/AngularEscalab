import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthorService} from 'src/app/Service/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  imageId: any;
  imageData: any;

  constructor(
    private _authorService: AuthorService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.imageId = this._activatedRoute.snapshot.paramMap.get("id")
    this.getImage(this.imageId)
    console.log(this.imageId)
  };

  getImage(imageId: any) {
    this._authorService.getOneImage(imageId).subscribe((data) => {
      this.imageData = data;
      console.log(this.imageData)
    });
  };
};
