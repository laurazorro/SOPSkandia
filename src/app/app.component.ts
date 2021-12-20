import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
declare var vu :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sdkvu';
  constructor() { }

  ngOnInit(): void {
    vu.sop.load('assets/web-sdk-javascript-master').then(
      () => {
          vu.sop.api.headers = {
            'x-access-apikey': '849f34d2-4a42-4a69-88ae-ab6cc7f3777b'
          };            
          vu.sop.api.host = 'https://skandia.sop.dev.infomediaservice.online/vu-onboarding-rest';

          vu.sop.start().then(
              (res:any) => {
                  console.log(res)
                  if(res.code==903){
                    //this.router.navigate(['final']);
                  }else if(res.code==904){
                    Swal.fire('Has fallado tu identidad digital','Vuelve a intentarlo de nuevo','error')
                  }
              }
          ).catch((err:any)=>{
            console.log(err)
          })
      },function(value:any) {
          console.log('re',value)
      }
  )
  }
}
