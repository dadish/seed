import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';

const toReadEpic = action$ => {
  return action$
    .filter(action => action.type === 'PING')
    .mapTo({ type: 'PONG' });
}

export default toReadEpic;