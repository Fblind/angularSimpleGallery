#Angular Simple Gallery Directive

La directiva te deja elegir las imagenes del slider y al clickearlas se muestra en la imagen principal.

##Instalación:
```
$ bower install angular-simple-gallery
```

##OK, y como lo uso ?, así:

Agrega la directiva en tu vista:
```
<simple-image-gallery images="images"></simple-image-gallery>
```
Y en tu controller:
```
$scope.images = [
      'http://placehold.it/350x150',
      'http://placehold.it/800x600',
      'http://placehold.it/200x200',
      'http://placehold.it/400x200',
      'http://placehold.it/400x400',
      'http://placehold.it/1000x400',
      'http://placehold.it/900x700'
    ]
```
Y listo, ya esta para usar!

##TODOs:
* Hacerla más customizable.
* Posibilidad de integrar sliders propios. Ej: slick https://github.com/vasyabigi/angular-slick
* Traducción.
