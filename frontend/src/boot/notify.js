import { Notify } from 'quasar'

// noti 기본값(별도로 noti-type을 선언하지 않으면 현재noti가 디폴트로 적용된다.)
Notify.setDefaults({
  position: 'bottom', // top, top-left, top-right, left, center, right, bottom-left, bottom, bottom-right
  timeout: 5000,
  textColor: 'white',
  actions: [{ icon: 'close', color: 'white' }],
});

// 커스텀을 적용한 noti
Notify.registerType('my-notif', {
  icon: 'announcement',
  progress: true,
  color: 'brown',
  textColor: 'white',
  classes: 'glossy',
});

Notify.registerType('noti-nlobby', {
  icon: 'announcement',
  progress: true,
  color: 'primary',
  textColor: 'white',
  classes: 'glossy',
  timeout:3000
});