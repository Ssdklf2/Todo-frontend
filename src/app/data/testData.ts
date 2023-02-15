import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {title: 'Работа'},
    {title: 'Семья'},
    {title: 'Учеба'},
    {title: 'Отдых'},
    {title: 'Спорт'},
    {title: 'Еда'},
    {title: 'Финансы'},
    {title: 'Животные'}
  ]

  static priorities: Priority[] = [
    {title: 'Низкий', color: '#a2ff9d'},
    {title: 'Средний', color: '#81eddb'},
    {title: 'Высокий', color: '#ff8a8a'},
    {title: 'Очень высокий', color: '#ff0000'}
  ]

  static tasks: Task[] = [
    {
      title: 'Купить корм для черепашки',
      category: TestData.categories[7],
      date: new Date('2019-12-12'),
      completed: false,
      priority: TestData.priorities[0]
    },
    {
      title: 'Покормить собаку',
      category: TestData.categories[7],
      date: new Date('2019-12-12'),
      completed: false,
      priority: TestData.priorities[0]
    },
    {
      title: 'Купить ингредиенты для пиццы',
      category: TestData.categories[1],
      date: new Date('2019-12-12'),
      completed: true,
      priority: TestData.priorities[1]
    },
    {
      title: 'Сделать проект',
      category: TestData.categories[2],
      date: new Date('2019-12-12'),
      completed: true,
      priority: TestData.priorities[2]
    },
    {
      title: 'Купить торт на День Рождение',
      category: TestData.categories[3],
      date: new Date('2020-12-12'),
      completed: false,
      priority: TestData.priorities[3]
    },
  ]
}
