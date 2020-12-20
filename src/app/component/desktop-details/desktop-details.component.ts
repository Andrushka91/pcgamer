import { Component, OnInit } from '@angular/core';
import { Desktop } from '../../models/Desktop';
import { DesktopsService } from '../../services/desktops.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-details',
  templateUrl: './desktop-details.component.html',
  styleUrls: ['./desktop-details.component.css']
})
export class DesktopDetailsComponent implements OnInit {

  id: string = '';
  desktop: Desktop = null;

  pressed: boolean = true;
  customClass: string = '';

 
  constructor(private ruta: ActivatedRoute, private desktopService: DesktopsService,private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));
    this.id = this.ruta.snapshot.params.codigo;
    this.desktop = null;
    //Ahora pido los datos desde el constructor porque no tiene sentido
    //mostrar la pantalla al usuario si no tiene datos

    this.desktopService.buscarDesktop(this.id).subscribe(item => {
      let data = item.payload.data();
      let identificador = item.payload.id;
      this.desktop = ({
        documentId:identificador,
        nombre:data.nombre,
        caja:data.caja,
        descripcion:data.descripcion,
        precio:data.precio,
        imagen:data.imagen,
        imagenConfig:data.imagenConfig,
        specs:data.specs,
        design:data.design
      })
    })

  }

  changeClass() {
    if (this.pressed) {
      this.customClass = 'btn-group dropup';
      this.pressed = false;
    } else {
      this.customClass = '';
      this.pressed = true;
    }
  }






  ngOnInit(): void {
  }
}
