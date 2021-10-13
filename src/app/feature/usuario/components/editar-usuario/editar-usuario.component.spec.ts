// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpService } from '@core/services/http.service';
// import { UsuarioService } from '@usuario/shared/service/usuario.service';
// import { of } from 'rxjs';

// import { EditarUsuarioComponent } from './editar-usuario.component';

// describe('EditarUsuarioComponent', () => {
//   let component: EditarUsuarioComponent;
//   let fixture: ComponentFixture<EditarUsuarioComponent>;
//   let usuarioService: UsuarioService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//         declarations: [ EditarUsuarioComponent ],
//         imports: [
//           CommonModule,
//           HttpClientModule,
//           RouterTestingModule,
//           ReactiveFormsModule,
//           FormsModule
//         ],
//         providers: [UsuarioService, HttpService],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditarUsuarioComponent);
//     component = fixture.componentInstance;
//     usuarioService = TestBed.inject(UsuarioService);
//     spyOn(usuarioService, 'updateUsuario').and.returnValue(
//         of(true)
//       );
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
