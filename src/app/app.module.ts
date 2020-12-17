import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent //配置当前项目运行的组件
  ],
  imports: [
    BrowserModule,  // 配置当前模块运行依赖的其他模块
    AppRoutingModule
  ],
  providers: [],  //配置项目所需要的服务，个人理解应该是Tomcat类型的东西
  bootstrap: [AppComponent] // 指定应用的主视图，应该是开始的根组件，可以理解为开头第一次看到的网页界面这些
})
export class AppModule { }
