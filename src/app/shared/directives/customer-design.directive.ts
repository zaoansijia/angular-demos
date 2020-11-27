import { Directive, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCustDesign]'
})
export class CustomerDesignDirective implements OnInit, AfterViewInit {
  // @ViewChild('appCustDesign') inputDom: ElementRef; // 获取定义dom
  @Input('appCustDesign') custDesignName: string;
  isEyeOn = true;
  constructor(
    private el: ElementRef,
    private render2: Renderer2
  ) {
    this.el = el.nativeElement;
  }
  // 在 Angular 第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件
  ngOnInit(): void {
  }
  // 当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用
  ngAfterViewInit(): void {
    // 增加一个border-focus的效果
    const spanEle = this.render2.createElement('span');
    this.render2.setAttribute(spanEle, 'class', 'input-border');
    const parentNode = this.render2.parentNode(this.el); // 找到input上面的父元素
    this.render2.appendChild(parentNode, spanEle);
    if (this.custDesignName && this.custDesignName === 'password') {
      const divEle = this.render2.createElement('div'); // 利用renderer2新建一个div
      const textEle = this.render2.createText('EyeOn'); // 给divEle设置innerText

      this.render2.appendChild(divEle, textEle); // 添加div和text
      this.render2.setAttribute(divEle, 'class', 'on-off'); // 添加class
      this.render2.setProperty(divEle, 'onclick', () => {
        this.render2.setProperty(divEle, 'innerText', !this.isEyeOn ? 'EyeOn' : 'EyeOff');
        this.render2.setAttribute(this.el, 'type', !this.isEyeOn ? 'password' : 'text');
        this.isEyeOn = !this.isEyeOn;
      });
      this.render2.appendChild(parentNode, divEle); // 和input同级增加EyeOnd
    }
    this.render2.addClass(this.el, 'input-item'); // 给dom添加class
  }
}
