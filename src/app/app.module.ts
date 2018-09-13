import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule, Store } from '@ngrx/store';
import { reducer } from './reducer/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { postReducer } from './reducer/post.reducer';
import { todoReducer } from './reducer/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './effects/posts.effect';
import { JsonPlaceholderService } from './services/json-placeholder.service';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [

BrowserModule,
    HttpClientModule,
    // StoreModule.forFeature('post', postReducer),
    StoreModule.forRoot({
      tutorial: reducer,
      post: postReducer,
      todos: todoReducer
    }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
