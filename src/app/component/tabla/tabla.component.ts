import { Component, OnInit, Signal, signal } from '@angular/core';
import { DataimgService } from '../../service/dataimg.service';
import { HttpClientModule } from '@angular/common/http';
import { Item } from '../../interface/item';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  providers: [DataimgService],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  items: any[] = [];
  selectedImages: string[] = [];
  constructor(private dataimgService: DataimgService) {
    console.log('TablaComponent constructor');
    this.postItems();
  }

  postItems() {
    this.dataimgService.getData().subscribe((data) => {
      console.log('Respuesta');
      console.log(data);
      this.items = data;
    });
  }

  showImages(links: any[]) {
    console.log(links);
    this.selectedImages = links.map(link => link.href);
    console.log(this.selectedImages);
  }
}
