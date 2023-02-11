import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Животные'}
  ]

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: 'rgba(149,226,158,0.86)'},
    {id: 2, title: 'Средний', color: '#04f2e6'},
    {id: 3, title: 'Высокий', color: 'rgba(244,94,121,0.87)'},
    {id: 4, title: 'Очень высокий', color: '#ff0000'}
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Купить корм для черепашки',
      category: TestData.categories[7],
      date: new Date('2019-12-12'),
      completed: true,
      priority: TestData.priorities[0]
    },
    {
      id: 2,
      title: 'Покормить собаку',
      category: TestData.categories[7],
      date: new Date('2019-12-12'),
      completed: true,
      priority: TestData.priorities[0]
    },
    {
      id: 3,
      title: 'Купить ингредиенты для пиццы',
      category: TestData.categories[1],
      date: new Date('2019-12-12'),
      completed: true,
      priority: TestData.priorities[1]
    },
    {
      id: 4,
      title: 'Сделать проект',
      category: TestData.categories[2],
      date: new Date('2019-12-12'),
      completed: true,
      priority: TestData.priorities[2]
    },
    {
      id: 5,
      title: 'Купить торт на День Рождение',
      category: TestData.categories[3],
      date: new Date('2020-12-12'),
      completed: false,
      priority: TestData.priorities[3]
    },
  ]
}
