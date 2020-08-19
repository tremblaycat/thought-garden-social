import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'LOVE',
      thought: 'I love unicorns!',
    },
    {
      title: 'Today',
      thought: 'My doggo was cute.',
    },
  ];

  showForm: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onSubmit(post: Post) {
    this.posts.unshift(post);
    this.toggleForm();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
