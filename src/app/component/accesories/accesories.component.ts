import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent implements AfterViewInit {

  alumnos: any = [
    { id: 1, valoracion: 'alta', nombre: 'Maria', apellido: 'Sanchez', nota: 5.8, repetidor: false },
    { id: 2, valoracion: 'media', nombre: 'Juan', apellido: 'Lopez', nota: 7.5, repetidor: false },
    { id: 3, valoracion: 'baja', nombre: 'Elena', apellido: 'Arias', nota: 3.2, repetidor: true },
    { id: 4, valoracion: 'media', nombre: 'Roberto', apellido: 'Rodriguez', nota: 6.4, repetidor: true },
    { id: 5, valoracion: 'baja', nombre: 'Javier', apellido: 'Martin', nota: 4.8, repetidor: false },
    { id: 6, valoracion: 'alta', nombre: 'Marta', apellido: 'Gonzalez', nota: 9.3, repetidor: false }
  ];

  products: any = [
    { id: 1, title: "CORSAIR HARPOON RBG", photoUrl: "../../../assets/images/corsair-harpoon.webp", description: "Gaming Mouse", price: 29.99 },
    { id: 2, title: "CORSAIR K55 RGB Gaming", photoUrl: "../../../assets/images/corsair-k55.webp", description: "Keyboard", price: 49.99 },
    { id: 3, title: "CORSAIR MM350 Premium Anti-Fray Cloth Gaming", photoUrl: "../../../assets/images/corsair-mm350.webp", description: "Mouse Pad", price: 39.99 },
    { id: 4, title: "CORSAIR HARPOON RBG", photoUrl: "../../../assets//images/elgato-4k.webp", description: "Pro MK.2", price: 249.99 },
    { id: 4, title: "CORSAIR HARPOON RBG", photoUrl: "../../../assets//images/corsair-headset-stand.webp", description: "Headset Stand", price: 69.99 },
    { id: 4, title: "CORSAIR HARPOON RBG", photoUrl: "../../../assets//images/corsair-void-headset.webp", description: "wireless Headset", price: 99.99 },
    { id: 4, title: "CORSAIR HARPOON RBG", photoUrl: "../../../assets//images/t-shirt.webp", description: "Clothes", price: 15.00 },
    { id: 4, title: "ORIGIN USB 3.0 32GB Flash", photoUrl: "../../../assets//images/usb-flash.webp", description: "Drive", price: 20.00 }
  ];

  constructor(private translateService: TranslateService) {
    this.translateService.use(localStorage.getItem('language'));
  }

  nombreColumnas = ['id', 'title', 'description', 'price'];

  dataSource = new MatTableDataSource(this.products);

  @ViewChild(MatSort, { static: false })
  sort: MatSort;

  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  filtrar(dato: string) {
    this.dataSource.filter = dato;
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }




}

