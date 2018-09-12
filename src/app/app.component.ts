import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-demo';
  class1detail = true;
  scienceVisible = true;
  commerceVisible = true;
  class1science = true;
  class1commerce = true;

  streamSelect(val){
    console.log(val)
    if(val == "commerce"){
      this.commerceVisible = !this.commerceVisible
    }
    if(val == "science"){
      this.scienceVisible = !this.scienceVisible
    }
    
  }

  class1check(){
    console.log('checked');
    this.class1detail = !this.class1detail;
  }
  
  class1ScienceSection(){
    this.class1science = !this.class1science;
  }

  class1CommerceSection(){
    this.class1commerce = !this.class1commerce;
  }
}
