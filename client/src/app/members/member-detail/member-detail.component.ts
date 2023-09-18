import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryModule, ImageItem } from 'ng-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  imports: [CommonModule, TabsModule, GalleryModule]
})
export class MemberDetailComponent implements OnInit {

  member: Member | undefined;
  images: GalleryModule[] = [];
  
  /**
   * Le parametre route de type ActivedRoute va nous permettre d'activer la route quand l'user cliquera sur l'icone
   * afin d'avoir les détails du user
   */
  constructor(private memberService: MembersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadMember();
  }

  /**
   * Le paramètre de la fonction get 'username' provient de notre route dans app-routing.module
   *  que nous avons spécifié
   */

  loadMember() {

    const username = this.route.snapshot.paramMap.get('username');

    if (!username) return;

    this.memberService.getMember(username).subscribe({
      
      next: member => {
        this.member = member,
        this.getImages()
      } 

    })
  }

  getImages() {
    
    if (!this.member) return;

    for (const photo of this.member.photos) {
      this.images.push(new ImageItem({src: photo.url, thumb: photo.url}))
    }
  }

}
