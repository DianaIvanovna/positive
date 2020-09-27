import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatIconModule} from '@angular/material/icon';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatListModule} from '@angular/material/list';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatGridListModule} from "@angular/material/grid-list";
// import {MatExpansionModule} from "@angular/material/expansion";
// import {MatCardModule} from "@angular/material/card";
// import {MatTabsModule} from "@angular/material/tabs";
// import {MatStepperModule} from "@angular/material/stepper";
// import {MatFormFieldModule} from "@angular/material/form-field";
// import {MatInputModule} from "@angular/material/input";
// import {MatSelectModule} from "@angular/material/select";
// import {MatAutocompleteModule} from "@angular/material/autocomplete";
// import {MatCheckboxModule} from "@angular/material/checkbox";
// import {MatRadioModule} from "@angular/material/radio";
// import {MatDatepickerModule} from "@angular/material/datepicker";
// import {MatNativeDateModule} from "@angular/material/core";
// import {MatTooltipModule} from "@angular/material/tooltip";
// import {MatSnackBarModule} from "@angular/material/snack-bar";
// import {MatDialogModule} from "@angular/material/dialog";
// import {MatTableModule} from "@angular/material/table";

const MaterialComponents=[
  MatButtonModule, // кнопки в Material
  // MatButtonToggleModule, // кнопки переключатели
  // MatIconModule, // иконки
  // MatBadgeModule, // Значки - это небольшие дескрипторы состояния для элементов пользовательского интерфейса
  // MatProgressSpinnerModule, // спинер
  // MatToolbarModule, //навигационная панель
  // MatSidenavModule, // боковая навигация и основной контекст
  // MatMenuModule, // плавающую панель, содержащую список опций
  // MatListModule, // списки
  // MatDividerModule, // линия-разделитель
  // MatGridListModule, //гриды
  // MatExpansionModule,//расширяемое представление сведений-сводка
  //MatCardModule, //карточка
  // MatTabsModule, // вкладки
  // MatStepperModule, //Шаговый модуль
  // MatFormFieldModule, // формы
  // MatInputModule,// инпуты
  // MatSelectModule, //это элемент управления формой для выбора значения из набора параметров
  // MatAutocompleteModule, // автозаполнение
  // MatCheckboxModule,
  // MatRadioModule,
  // MatDatepickerModule, //Datepicker позволяет пользователям вводить дату либо с помощью текстового ввода, либо путем выбора даты из календарь
  // MatNativeDateModule,
  // MatTooltipModule, // всплывающие подсказки
  // MatSnackBarModule, // уведомление о каком-то действие
  // MatDialogModule, //  модальных диалогов вроде как попап
  // MatTableModule, //таблицу данных
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
