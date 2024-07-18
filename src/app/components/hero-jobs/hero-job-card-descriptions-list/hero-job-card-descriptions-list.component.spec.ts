import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobCardDescriptionsListComponent } from './hero-job-card-descriptions-list.component';

describe('HeroJobCardDescriptionsListComponent', () => {
  let component: HeroJobCardDescriptionsListComponent;
  let fixture: ComponentFixture<HeroJobCardDescriptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroJobCardDescriptionsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobCardDescriptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
