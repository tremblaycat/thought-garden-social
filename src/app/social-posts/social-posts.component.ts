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
      date: 'August 21, 2020',
      thought:
        '"If I can stop one heart from breaking, I shall not live in vain." -Emily Dickinson',
    },
    {
      date: 'August 28, 2020',
      thought:
        'Today I finished an Angular group project, and then we had the assessment. I hope I did well! -CT',
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
