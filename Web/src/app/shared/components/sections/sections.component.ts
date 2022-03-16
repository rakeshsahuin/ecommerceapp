import { Component, Input, OnInit } from '@angular/core';
import { ProductType } from 'src/types';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
  providers: [SectionService]
})
export class SectionsComponent implements OnInit {

  products: ProductType[] = [];
  @Input() category!:string;

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sectionService.getProductByCategory(this.category).subscribe(
      (data) => (this.products = data),
      (err) => console.log(err)
    );
  }

}
