import { Component } from '@angular/core';
declare let html2canvas: any;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  string: string;

  save(fileName){
    // First we get our section to save from dom
    let section = document.querySelector('#mainContainer');

    // We pass that section to html2Canvase
    html2canvas(section).then(canvas => {
      var link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
    });
  }
  
}
