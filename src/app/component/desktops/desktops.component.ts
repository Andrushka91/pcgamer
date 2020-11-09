import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { DesktopService } from 'src/app/services/desktop-service.service';
import { Desktop } from '../../models/Desktop';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-desktops',
  templateUrl: './desktops.component.html',
  styleUrls: ['./desktops.component.css']
})
export class DesktopsComponent implements OnInit {

  desktops: Desktop[] = [];

  //Inyectamos el servicio en el constructor para poder llamar al servicio
  constructor(private desktopService: DesktopService, private translateService: TranslateService) {
    // this.desktops = this.desktopService.getDesktops();
    this.translateService.use(localStorage.getItem('language'));
  }

  ngOnInit(): void {
    this.desktopService.getDesktops().subscribe((datos) => {

      this.desktops = [];

      datos.forEach(element => {
        let data = element.payload.doc.data();
        let identificador = element.payload.doc.id;
        this.desktops.push({
          documentId: identificador,
          nombre: data.nombre,
          caja: data.caja,
          descripcion: data.descripcion,
          precio: data.precio,
          imagen: data.imagen,
          imagenConfig: data.imagenConfig,
          specs: data.specs,
          design: data.design
        })
      });
    })
  }
}
