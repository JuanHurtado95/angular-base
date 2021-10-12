import {EventEmitter, Injectable} from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class SwalService {

  clickConfirm: EventEmitter<void>;
  clickCancel: EventEmitter<void>;

  constructor() {
  }

  alert(title): void {
    Swal.fire(title as SweetAlertIcon);
  }

  succes(title: string): void {
    Swal.mixin({
      title,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    }).fire({
      icon: 'success',
      title: title
    });
  }

  danger(title: string): void {
    Swal.mixin({
      title,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000000,
      timerProgressBar: false,
      onOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    }).fire({
      icon: 'error',
      title: title
    });
  }

  //Falta probar!!!!

  // confirm(title: string): void {
  // Swal.fire({
  //   title: title,
  //   text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     Swal.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   }
  // })
  // }

  iniciarObservablesConfirm(): void {
    this.clickConfirm = new EventEmitter();
    this.clickCancel = new EventEmitter();
  }

  confirm(
    title = '',
    text = '',
    icon = 'warning',
    confirmButtonText = '',
    cancelButtonText = '',
    {
      clickConfirm = () => {
      }, clickCancel = () => {
    }
    } = {},
    showCancelButton = true
  ): Promise<any> {
    this.iniciarObservablesConfirm();
    return Swal.fire({
      title,
      text,
      icon: icon as SweetAlertIcon,
      showCancelButton,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText,
      cancelButtonText
    }).then(result => {
      if (result.value) {
        this.clickConfirm.subscribe(() => clickConfirm());
        this.clickConfirm.emit();
        this.clickConfirm.unsubscribe();
      } else {
        this.clickCancel.subscribe(() => clickCancel());
        this.clickCancel.emit();
        this.clickCancel.unsubscribe();
      }
    });
  }
}
