import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import _ from 'lodash';

@Component({
  components: {},
})
export default class Dashboard extends Vue {
  public tabs = 0;
  public show = false;
  public taskItems = [
    { title: 'bugs', active: false },
    { title: 'website', active: false },
    { title: 'server', active: false },
  ];

  public taskContents = [
    {
      text: 'Sign contract for "What are conference organized afraid of?',
      active: false,
    },
    {
      text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      active: false,
    },
    {
      text:
        // tslint:disable-next-line:max-line-length
        'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      active: false,
    },
  ];

  public tableHeaders = [
    {
      text: 'Dessert (100g serving)',
      align: 'left',
      value: 'name',
    },
    { text: 'ID', value: 'id' },
    { text: 'Name', value: 'name' },
    { text: 'Salary', value: 'salary' },
  ];

  public desserts = [
    {
      id: 1,
      name: 'Dakota Rice',
      salary: '$35,738',
      country: 'Niger',
      city: 'Oud-Tunrhout',
    },
    {
      id: 2,
      name: 'Dakota Rice',
      salary: '$35,738',
      country: 'Niger',
      city: 'Oud-Tunrhout',
    },
    {
      id: 3,
      name: 'Dakota Rice',
      salary: '$35,738',
      country: 'Niger',
      city: 'Oud-Tunrhout',
    },
    {
      id: 4,
      name: 'Dakota Rice',
      salary: '$35,738',
      country: 'Niger',
      city: 'Oud-Tunrhout',
    },
    {
      id: 5,
      name: 'Dakota Rice',
      salary: '$35,738',
      country: 'Niger',
      city: 'Oud-Tunrhout',
    },
  ];

  public tableItems = [];

  // public menulist = [
  //   { title: 'Mike, John responded to your email' },
  //   { title: 'You have 5 new tasks' },
  //   { title: 'Youre now a friend with Andrew' },
  //   { title: 'Another Notification' },
  //   { title: 'Another One' },
  // ];
  public getTaskItem(title: string) {
    _.forEach(this.taskItems, (item) => {
      if (title === item.title) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}
