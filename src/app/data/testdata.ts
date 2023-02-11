import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class Testdata {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'}
  ]

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'},
    {id: 4, title: 'Очень высокий', color: '#F1128D'}
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: 'task1',
      category: Testdata.categories[1],
      date: new Date('2019-12-12'),
      completed: true,
      priority: Testdata.priorities[0]
    },
    {
      id: 2,
      title: 'task2',
      category: Testdata.categories[1],
      date: new Date('2019-12-12'),
      completed: true,
      priority: Testdata.priorities[0]
    },
    {
      id: 3,
      title: 'task3',
      category: Testdata.categories[1],
      date: new Date('2019-12-12'),
      completed: true,
      priority: Testdata.priorities[0]
    },
    {
      id: 4,
      title: 'task4',
      category: Testdata.categories[1],
      date: new Date('2019-12-12'),
      completed: true,
      priority: Testdata.priorities[0]
    },
    {
      id: 5,
      title: 'task5',
      category: Testdata.categories[0],
      date: new Date('2020-12-12'),
      completed: false,
      priority: Testdata.priorities[1]
    },
  ]
}
