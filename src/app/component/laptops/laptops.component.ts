import { Component, OnInit } from '@angular/core';
import { Laptop } from '../../models/Laptops';
import { LaptopService } from '../../services/laptop-service.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {


  laptops: Laptop[] = [];

  //Iyectamos el servicio en el constructor para poder llamar al servicio
  constructor(private laptopService: LaptopService, private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));
  }

  ngOnInit(): void {
    this.laptopService.getLaptops().subscribe((datos) => {
      this.laptops = [];

      datos.forEach(element => {
        let data = element.payload.doc.data();
        let id = element.payload.doc.id;

        this.laptops.push({
          documentId: id,
          nombre: data.nombre,
          pantalla: data.pantalla,
          descripcion: data.descripcion,
          precio: data.precio,
          imagen: data.imagen,
          specs: data.specs,
          info_title: data.info_title,
          info_content: data.info_content,
          info_image: data.info_image
        })
      });
    })
  }

}
