import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UsuarioService } from '@usuario/shared/service/usuario.service';
import { UsuarioModule } from '@usuario/usuario.module';
import { of } from 'rxjs';

import { EditarUsuarioComponent } from './editar-usuario.component';

describe('EditarUsuarioComponent', () => {
  let component: EditarUsuarioComponent;
  let fixture: ComponentFixture<EditarUsuarioComponent>;
  let usuarioService: UsuarioService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, UsuarioModule, HttpClientModule, RouterModule ],
      declarations: [ EditarUsuarioComponent ]
      //providers: [ UsuarioService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUsuarioComponent);
    router = TestBed.inject(Router);
    usuarioService = TestBed.inject(UsuarioService);
    spyOn(usuarioService, 'updateUsuario').and.returnValue(of(false));
    spyOn(router, 'navigate').and.stub();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
