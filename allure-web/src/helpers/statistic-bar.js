import {SafeString} from 'handlebars/runtime';
import settings from '../util/settings';
import {values} from '../util/statuses';

export default function statisticBar(statistic) {
    const statuses = settings.get('visibleStatuses');
    const fill = values.map(status => {
        const count = typeof statistic[status] === 'undefined' ? 0 : statistic[status];
        return count === 0 || !statuses[status]
            ? ``
            : `<span class="label label_status_${status}">${count}</span> `;
    }
    ).join('');
    return new SafeString(`${fill}`);
}
