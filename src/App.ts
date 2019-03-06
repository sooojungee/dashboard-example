import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import _ from 'lodash';

@Component({
  components: {},
})
export default class App extends Vue {
  public drawer: boolean = true;
  public visible: boolean = true;
  // public disableResizeWatcher = 'true';
  public items = [
    { title: 'Dashboard', icon: 'dashboard', active: true },
    { title: 'User Profile', icon: 'account_circle', active: false },
    { title: 'Table List', icon: 'calendar_today', active: false },
    { title: 'Typography', icon: 'text_format', active: false },
    { title: 'Icons', icon: 'bubble_chart', active: false },
    { title: 'map', icon: 'place', active: false },
    { title: 'Notifications', icon: 'notifications', active: false },
  ];

  public menulist = [
    { title: 'Mike, John responded to your email' },
    { title: 'You have 5 new tasks' },
    { title: 'Youre now a friend with Andrew' },
    { title: 'Another Notification' },
    { title: 'Another One' },
  ];

  public getItem(title: string) {
    _.forEach(this.items, (item) => {
      if (title === item.title) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }
}
