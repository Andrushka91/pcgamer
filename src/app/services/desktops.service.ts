import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'; 

@Injectable({
  providedIn: 'root'
})
export class DesktopsService {

  // desktops: Desktop[] = [
  //   {
  //     id: 1,
  //     nombre: 'CHRONOS',
  //     caja: 'Small Form Factor',
  //     descripcion: 'Small Footprint, Big Power',
  //     precio: 'Starting at: $1,622',
  //     imagen: "../../assets/images/chronos.webp",
  //     imagenConfig: "../../assets/images/chronos-config.webp",
  //     specs:
  //       ["Exclusive ORIGIN PC small form factor design with tolless side panels",
  //         "Tooless side panels, choice of aluminium mesh or tempered glass",
  //         "Up to an AMD Ryzen 9 3950X or Intel Core i9-10900K CPU",
  //         "All-in-one CPU liquid cooling",
  //         "Up to a single NVIDIA GeForce RTX 3090 GPU",
  //         "Up to 32GB of DDR4 RAM 3200MHz",
  //         "Up to a 750 Watt power supply",
  //         "Multiple storage options available including M.2 PCIe SSD, SSD, and HDD"
  //       ],
  //     design: "ORIGIN PC gaming desktops are in a league of their own, representing the most cutting-edge computer engineering in the industry. Geared towards offering the finest gaming experience, our PCs feature state-of-the-art and reliable gaming PC parts designed to give you an optimal and immersive gaming experience, even while gaming in VR, 144Hz monitors, or with 4K resolutions.ORIGIN PC gaming desktops are a perfect fusion of creativity, technical expertise, and results-driven innovation. They are hand-built, rigorously tested, and serviced by a world-class team of gamers, industry veterans, and top system technicians. From the most powerful overclocked processors on the market, to graphic cards that push the envelope of visual capabilities with ray-tracing technology, we build the most powerful rigs on the market.     Compared to your typical OEM build, our custom desktops excel in all areas. Only ORIGIN PC offers services such as free lifetime U.S.-based technical support available 24/7, free lifetime labor, all name-brand premium components, over 10,000 configuration options, and much more. You get the best technology backed by the best service and support. It's little wonder that our gaming PCs have garnered tremendous praise from across the industry, including awards and recognitions from the likes of CNET, PC Gamer, Computer Shopper, Gizmodo, and other top reviewers making us the Best Gaming PC in 2019. But most importantly, we've received overwhelmingly positive testimonials by our valuable customers, ranging from hardcore gamers to designers and professionals."
  //   },
  //   {
  //     id: 2,
  //     nombre: 'NEURON',
  //     caja: 'Mid Tower',
  //     descripcion: 'Premium Style and Excellent Value',
  //     precio: 'Starting at: $1,544',
  //     imagen: "../../assets/images/neuron.webp",
  //     imagenConfig: "../../assets/images/neuron-config.webp",
  //     specs:
  //       ["Exclusive ORIGIN PC mid tower design with the best value for an ORIGIN PC desktop",
  //         "Up to an AMD Ryzen 9 3950X or Intel Core i9-10900KF CPU",
  //         "All-in-one CPU liquid cooling",
  //         "All-in-one CPU liquid cooling",
  //         "Up to dual NVIDIA GeForce RTX 2080 Ti GPUs",
  //         "Tool-less tempered glass side panel",
  //         "Up to 64GB of DDR4 RAM 3466MHz",
  //         "Up to a 1000 Watt Power Supply",
  //         "Multiple storage options available including M.2 PCIe SSD, SSD, HDD, and more"
  //       ],
  //     design: "ORIGIN PC gaming desktops are in a league of their own, representing the most cutting-edge computer engineering in the industry. Geared towards offering the finest gaming experience, our PCs feature state-of-the-art and reliable gaming PC parts designed to give you an optimal and immersive gaming experience, even while gaming in VR, 144Hz monitors, or with 4K resolutions.ORIGIN PC gaming desktops are a perfect fusion of creativity, technical expertise, and results-driven innovation. They are hand-built, rigorously tested, and serviced by a world-class team of gamers, industry veterans, and top system technicians. From the most powerful overclocked processors on the market, to graphic cards that push the envelope of visual capabilities with ray-tracing technology, we build the most powerful rigs on the market.     Compared to your typical OEM build, our custom desktops excel in all areas. Only ORIGIN PC offers services such as free lifetime U.S.-based technical support available 24/7, free lifetime labor, all name-brand premium components, over 10,000 configuration options, and much more. You get the best technology backed by the best service and support. It's little wonder that our gaming PCs have garnered tremendous praise from across the industry, including awards and recognitions from the likes of CNET, PC Gamer, Computer Shopper, Gizmodo, and other top reviewers making us the Best Gaming PC in 2019. But most importantly, we've received overwhelmingly positive testimonials by our valuable customers, ranging from hardcore gamers to designers and professionals."
  //   },
  //   {
  //     id: 3,
  //     nombre: 'MILLENNIUM',
  //     caja: 'Full Tower',
  //     descripcion: 'The Most Advanced and Customizable Desktop',
  //     precio: 'Starting at: $2,170',
  //     imagen: "../../assets/images/millennium.webp",
  //     imagenConfig: "../../assets/images/millennium-config.webp",
  //     specs:
  //       ["Exclusive ORIGIN PC full tower design with the best value for an ORIGIN PC desktop",
  //         "Exclusive Patented Technology: Variable Mounting for 4 different motherboard orientations",
  //         "Up to an AMD Ryzen 9 3950X, AMD Ryzen Threadripper 3970X, Intel Core i9-10900KF, or Intel Core i9-10980XE CPU",
  //         "Up to CRYOGENIC hardline liquid cooling for CPU",
  //         "All-in-one CPU liquid cooling",
  //         "Up to dual NVIDIA TITAN RTX GPUs",
  //         "Up to 64GB of DDR4 RAM 3466MHz",
  //         "Up to a 1600 Watt Power Supply",
  //         "Multiple storage options available including M.2 PCIe SSD, SSD, HDD, and more"],
  //     design: "ORIGIN PC gaming desktops are in a league of their own, representing the most cutting-edge computer engineering in the industry. Geared towards offering the finest gaming experience, our PCs feature state-of-the-art and reliable gaming PC parts designed to give you an optimal and immersive gaming experience, even while gaming in VR, 144Hz monitors, or with 4K resolutions.ORIGIN PC gaming desktops are a perfect fusion of creativity, technical expertise, and results-driven innovation. They are hand-built, rigorously tested, and serviced by a world-class team of gamers, industry veterans, and top system technicians. From the most powerful overclocked processors on the market, to graphic cards that push the envelope of visual capabilities with ray-tracing technology, we build the most powerful rigs on the market.     Compared to your typical OEM build, our custom desktops excel in all areas. Only ORIGIN PC offers services such as free lifetime U.S.-based technical support available 24/7, free lifetime labor, all name-brand premium components, over 10,000 configuration options, and much more. You get the best technology backed by the best service and support. It's little wonder that our gaming PCs have garnered tremendous praise from across the industry, including awards and recognitions from the likes of CNET, PC Gamer, Computer Shopper, Gizmodo, and other top reviewers making us the Best Gaming PC in 2019. But most importantly, we've received overwhelmingly positive testimonials by our valuable customers, ranging from hardcore gamers to designers and professionals."
  //   },
  //   {
  //     id: 4,
  //     nombre: 'GENESIS',
  //     caja: 'Super Tower',
  //     descripcion: 'A Desktop Without Limitations',
  //     precio: 'Starting at: $2,158',
  //     imagen: "../../assets/images/genesis.webp",
  //     imagenConfig: "../../assets/images/genesis-config.webp",
  //     specs:
  //       ["Exclusive ORIGIN PC super tower design with custom LED+UV lighting and expansion bay",
  //         "Exclusive Patented Technology: Variable Mounting for 4 different motherboard orientations",
  //         "Up to an AMD Ryzen 9 3950X, AMD Ryzen Threadripper 3970X, Intel Core i9-10900KF, or Intel Core i9-10980XE CPU",
  //         "Up to CRYOGENIC hardline liquid cooling for CPU",
  //         "All-in-one CPU liquid cooling",
  //         "Up to dual NVIDIA TITAN RTX GPUs",
  //         "Up to 64GB of DDR4 RAM 3466MHz",
  //         "Up to a 1600 Watt Power Supply",
  //         "Multiple storage options available including M.2 PCIe SSD, SSD, HDD, and more"],
  //     design: "ORIGIN PC gaming desktops are in a league of their own, representing the most cutting-edge computer engineering in the industry. Geared towards offering the finest gaming experience, our PCs feature state-of-the-art and reliable gaming PC parts designed to give you an optimal and immersive gaming experience, even while gaming in VR, 144Hz monitors, or with 4K resolutions.ORIGIN PC gaming desktops are a perfect fusion of creativity, technical expertise, and results-driven innovation. They are hand-built, rigorously tested, and serviced by a world-class team of gamers, industry veterans, and top system technicians. From the most powerful overclocked processors on the market, to graphic cards that push the envelope of visual capabilities with ray-tracing technology, we build the most powerful rigs on the market.     Compared to your typical OEM build, our custom desktops excel in all areas. Only ORIGIN PC offers services such as free lifetime U.S.-based technical support available 24/7, free lifetime labor, all name-brand premium components, over 10,000 configuration options, and much more. You get the best technology backed by the best service and support. It's little wonder that our gaming PCs have garnered tremendous praise from across the industry, including awards and recognitions from the likes of CNET, PC Gamer, Computer Shopper, Gizmodo, and other top reviewers making us the Best Gaming PC in 2019. But most importantly, we've received overwhelmingly positive testimonials by our valuable customers, ranging from hardcore gamers to designers and professionals."
  //   }
  // ]

  constructor(private fireStore: AngularFirestore) { }

  public getDesktops():any{
    return this.fireStore.collection('desktops').snapshotChanges();
  }

  buscarDesktop(documentId:string):any {
     return this.fireStore.collection('desktops').doc(documentId).snapshotChanges();
  }
}
