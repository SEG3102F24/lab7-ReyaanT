import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorComponent } from './author.component';
import { AuthorService } from './service/author.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AuthorComponent],
      providers: [
        AuthorService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
