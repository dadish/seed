import { List, Map } from 'immutable';
import {
  SUGGESTIONS_LOOKUP_END,
} from '../constants';

export const getItemProps = (item) => new Map({
  id: item.id,
  name: item.name,
  owner: item.owner.login,
  description: item.description,
  stargazers_count: item.stargazers_count,
  forks_count: item.forks_count,
  language: item.language,
});

export const initialSate = new List([{"id":19872456,"name":"react-router","owner":"ReactTraining","description":"Declarative routing for React","stargazers_count":19803,"watchers_count":19803,"forks_count":4781,"language":"JavaScript"},{"id":34197461,"name":"slider","owner":"react-component","description":"React Slider","stargazers_count":554,"watchers_count":554,"forks_count":172,"language":"JavaScript"},{"id":38003903,"name":"react-redux-starter-kit","owner":"davezuko","description":"Get started with React, Redux, and React-Router.","stargazers_count":7908,"watchers_count":7908,"forks_count":1803,"language":"JavaScript"},{"id":27799867,"name":"calendar","owner":"react-component","description":"React Calendar","stargazers_count":623,"watchers_count":623,"forks_count":136,"language":"JavaScript"},{"id":43640830,"name":"react-native-macos","owner":"ptmt","description":"React Native for macOS","stargazers_count":8484,"watchers_count":8484,"forks_count":335,"language":"JavaScript"},{"id":21339768,"name":"react-tutorial","owner":"reactjs","description":"Code from the React tutorial.","stargazers_count":3013,"watchers_count":3013,"forks_count":2353,"language":"JavaScript"},{"id":26704639,"name":"react-slick","owner":"akiran","description":"React carousel component ","stargazers_count":2170,"watchers_count":2170,"forks_count":531,"language":"JavaScript"},{"id":32028347,"name":"react-highcharts","owner":"kirjs","description":"react-highcharts","stargazers_count":556,"watchers_count":556,"forks_count":103,"language":"JavaScript"},{"id":21679551,"name":"react-tween-state","owner":"chenglou","description":"React animation.","stargazers_count":1597,"watchers_count":1597,"forks_count":60,"language":"JavaScript"},{"id":38934449,"name":"react-redux","owner":"reactjs","description":"Official React bindings for Redux","stargazers_count":6604,"watchers_count":6604,"forks_count":988,"language":"JavaScript"},{"id":37153337,"name":"react-native-web","owner":"necolas","description":"React Native for Web","stargazers_count":4229,"watchers_count":4229,"forks_count":276,"language":"JavaScript"},{"id":41359055,"name":"react-native-router-flux","owner":"aksonov","description":"React Native Router based on new React Native Navigation API","stargazers_count":3586,"watchers_count":3586,"forks_count":904,"language":"JavaScript"},{"id":48957263,"name":"ReduxCasts","owner":"StephenGrider","description":"Modern React with Redux","stargazers_count":624,"watchers_count":624,"forks_count":522,"language":"Ruby"},{"id":59243976,"name":"deco-ide","owner":"decosoftware","description":"The React Native IDE","stargazers_count":4628,"watchers_count":4628,"forks_count":210,"language":"JavaScript"},{"id":45942274,"name":"enzyme","owner":"airbnb","description":"JavaScript Testing utilities for React","stargazers_count":8346,"watchers_count":8346,"forks_count":669,"language":"JavaScript"},{"id":22736577,"name":"react-guide","owner":"uberVU","description":"React adventures  ","stargazers_count":581,"watchers_count":581,"forks_count":62,"language":null},{"id":63537249,"name":"create-react-app","owner":"facebookincubator","description":"Create React apps with no build configuration.","stargazers_count":21108,"watchers_count":21108,"forks_count":2461,"language":"JavaScript"},{"id":50911915,"name":"react-fundamentals-curriculum","owner":"ReactjsProgram","description":"Curriculum for React.js Program's \"React Fundamentals\" course","stargazers_count":1755,"watchers_count":1755,"forks_count":849,"language":null},{"id":44087428,"name":"react-weui","owner":"weui","description":"weui for react","stargazers_count":1234,"watchers_count":1234,"forks_count":260,"language":"JavaScript"},{"id":22234455,"name":"react-draggable","owner":"mzabriskie","description":"React draggable component","stargazers_count":1289,"watchers_count":1289,"forks_count":254,"language":"JavaScript"},{"id":55066845,"name":"rd3","owner":"yang-wei","description":"react + d3","stargazers_count":272,"watchers_count":272,"forks_count":71,"language":"JavaScript"},{"id":25427817,"name":"react-dnd","owner":"react-dnd","description":"Drag and Drop for React","stargazers_count":4879,"watchers_count":4879,"forks_count":494,"language":"JavaScript"},{"id":41790769,"name":"React-Learning","owner":"zhangmengxue","description":"React resources and practice","stargazers_count":262,"watchers_count":262,"forks_count":447,"language":null},{"id":45273566,"name":"React-For-Beginners-Starter-Files","owner":"wesbos","description":"Starter files for learning React.js with React for Beginners","stargazers_count":1284,"watchers_count":1284,"forks_count":760,"language":"CSS"},{"id":27534935,"name":"table","owner":"react-component","description":"React Table","stargazers_count":135,"watchers_count":135,"forks_count":86,"language":"JavaScript"},{"id":49157252,"name":"reactionic","owner":"reactionic","description":"React Ionic","stargazers_count":494,"watchers_count":494,"forks_count":48,"language":"CSS"},{"id":33797700,"name":"react-native-drawer","owner":"root-two","description":"React Native Drawer","stargazers_count":1350,"watchers_count":1350,"forks_count":181,"language":"JavaScript"},{"id":61893399,"name":"awesome-react-components","owner":"brillout","description":"Catalog of React Components & Libraries","stargazers_count":6799,"watchers_count":6799,"forks_count":337,"language":null},{"id":29028775,"name":"react-native","owner":"facebook","description":"A framework for building native apps with React.","stargazers_count":44450,"watchers_count":44450,"forks_count":10243,"language":"JavaScript"},{"id":49995655,"name":"React-Fundamentals","owner":"ReactjsProgram","description":"Code for \"React Fundamentals\" videos","stargazers_count":1863,"watchers_count":1863,"forks_count":534,"language":null}].map(getItemProps));

const reducer = (state = initialSate, { type, payload, meta}) => {
  switch (type) {
    case SUGGESTIONS_LOOKUP_END:
      return new List(payload.items.map(getItemProps));
    default:
      return state;
  }
};

export default reducer;