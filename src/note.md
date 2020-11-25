# angular的学习笔记

## 安装和环境
```javascript
npm install -g @angular/cli
ng new my-app
cd my-app 
ng serve --open
```
## 操作命令
> 生成一些文件可以用 ```ng generate compoent/module/service/guard 路径(不加路径就是默认生成到app下面)```
也可以用简写```ng g c/m/s/g```
## angular的8大核心概念：

1. 组件：可被反复使用的 带有特定功能的视图

2. 模板: 普通的html+自定义组件+指令

3. 指令:让模板支持更多的逻辑功能

4. 绑定: 1、事件() 2、属性[] 3、双向数据[(ngModel)]

5. 管道: 是一个有参数有返回值的方法,帮助将原始数据经过筛选、过滤、格式化之后更好的展示出来

6. 装饰器和元数据：装饰器是用来描述当前的类；元数据是用来告诉Angular如何来处理当前的类

7. 服务

8. 依赖注入: ```@Injectable```

## 组件相关的一些概念
1. 组件元数据装饰器（```@Component```）
> 简称组件装饰器，用来告知Angular框架如何处理一个TypeScript类.
Component装饰器包含多个属性，这些属性的值叫做元数据，Angular会根据这些元数据的值来渲染组件并执行组件的逻辑

2. 模板（Template）
我们可以通过组件自带的模板来定义组件的外观，模板以html的形式存在，告诉Angular如何来渲染组件，一般来说，模板看起来很像html，但是我们可以在模板中使用Angular的数据绑定语法，来呈现控制器中的数据。

3. 控制器（controller）
> 控制器就是一个普通的```typescript```类，他会被```@Component```来装饰，控制器会包含组件所有的属性和方法，绝大多数的业务逻辑都是写在控制器里的。控制器通过数据绑定与模板来通讯，模板展现控制器的数据，控制器处理模板上发生的事件。装饰器，模板和控制器是组件的必备要素.
还有一些可选元素如下：
- 输入属性（```@inputs```）:是用来接收外部传入的数据的,Angular的程序结构就是一个组件树，输入属性允许在组件树种传递数据
- 输出属性（```@Outputs```）：用来定义一些其他组件可能需要的事件或者用来在组件之间共享数
- 提供器（```providers```）：这个是用来做依赖注入的
- 生命周期钩子（LifeCycle Hooks）：一个组件从创建到销毁的过程中会有多个钩子会被触发，看看生命周期
- 样式表：组件可以关联一些样式表
- 动画（```Animations```）： Angular提供了一个动画包来帮助我们方便的创建一些跟组件相关的动画效果，比如淡入淡出等

## 模块相关的一些知识
1. 也是需要装饰器```@ngModule```给包裹元数据，元数据包含
* ```declarations```： 组件，管道和指定
* ```imports```： 引入一些系统需要的包，必填的BroserModule，常用的HttpClientModule，RouterModule等
* ```prividers```： 服务注册
* ```exports```： 导出的一些module和指令和管道（注：如果只是作为一个公共的module供其他module导入，其实module不需要在imports导入，可以直接在exports导出即可，但是管道和指令需在declarations声明）;
* ```bootstrap```： 根目录示，一般是appCompoent;

## 关于mock数据
1. 可以下载```angular-in-memory-web-api```; 具体用法可去看看。

## 关于国际化
- 国际化可以用ngx-translate; 具体是下载`@ngx-translate/core;@ngx-translate/http-loader`;

## 路由守卫
> 当用户满足一定条件才被允许进入或者离开一个路由有, 如下：
- ```canLoad```
> 控制是否允许延迟加载整个模块
- ```canActivate```
> 处理导航到某路由的情况
- ```canActivateChild```
> 等同 canActivate，只不过针对是所有子路由
- ```canDeactivate```
> 离开时候的路由守卫。提醒用户执行保存操作后才能离开
## 自定义指令+renderer2
### 自定义指令
> 声明自定义文件，再在module里面```declarations```声明
```java
@Directive({
  selector: '[appCustDesign]'
})
export class CustDesign implements  OnInit, AfterViewInit{

}
```
### renderer2
> 操作dom的技术，参考如下代码
```java
const divEle = this.render2.createElement('div'); // 利用renderer2新建一个div
const textEle = this.render2.createText('EyeOn'); // 给divEle设置innerText
const parentNode = this.render2.parentNode(this.el.nativeElement); // 找到input上面的父元素
this.render2.appendChild(divEle, textEle); // 添加div和text
this.render2.setAttribute(divEle, 'class', 'on-off'); // 添加class
this.render2.setProperty(divEle, 'onclick', () => {
    this.render2.setProperty(divEle, 'innerText', !this.isEyeOn ? 'EyeOn' : 'EyeOff');
    this.render2.setAttribute(this.el.nativeElement, 'type', !this.isEyeOn ? 'password' : 'text');
    this.isEyeOn = !this.isEyeOn;
});

this.render2.appendChild(parentNode, divEle); // 和input同级增加EyeOn
this.render2.addClass(this.el.nativeElement, 'input-item'); // 给dom添加class
```
### 除了利用指令去获取dom，还可以用```viewChild```
```java
@ViewChild('appCustDesign') inputDom: ElementRef; // 获取定义dom
```

# git 相关
## 添加多个仓库
```
git remote add coding https://github.com/zaoansijia/angular-demos.git
git push coding master
```
## 全局设置
```
git config list --global // 查看自己的仓库的全局设置
git config --global -e
git config --list
```