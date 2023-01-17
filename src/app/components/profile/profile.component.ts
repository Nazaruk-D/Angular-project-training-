import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ProfileService } from '../../services/profile.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'inst-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<any>
  constructor(private router: ActivatedRoute, private profileService: ProfileService) {}

  ngOnInit(): void {
    const userId = Number(this.router.snapshot.paramMap.get('userId'))
    if (userId) {
      this.profile$ = this.profileService.getProfile(userId)
    }
  }
}
