import { Directive, Host, Injectable, Input, OnInit, TemplateRef } from '@angular/core';

@Injectable()
export class STRowSource {
  private titles: { [key: string]: TemplateRef<void> } = {};
  private rows: { [key: string]: TemplateRef<void> } = {};

  add(type: string | undefined, path: string, ref: TemplateRef<void>): void {
    this[type === 'title' ? 'titles' : 'rows'][path] = ref;
  }

  getTitle(path: string): TemplateRef<void> {
    return this.titles[path];
  }

  getRow(path: string): TemplateRef<void> {
    return this.rows[path];
  }
}

@Directive({ selector: '[st-row]' })
export class STRowDirective implements OnInit {
  @Input('st-row') id!: string;

  @Input() type?: 'title';

  constructor(private ref: TemplateRef<void>, @Host() private source: STRowSource) {}

  ngOnInit(): void {
    this.source.add(this.type, this.id, this.ref);
  }
}
