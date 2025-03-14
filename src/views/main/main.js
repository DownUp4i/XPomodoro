import { AbstractView } from '../../common/view.js';
import onChange from 'on-change';
import { Header } from '../../components/header/header.js';
import { Timer } from '../../components/timer/timer.js';

export class MainView extends AbstractView {
    state = {
        list: [],
        loading: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle('XPomodoro Таймер');
    }

    appStateHook(path) {
        if (path === 'favorites') {
            console.log(path);
        }
    }

    render() {
        const main = document.createElement('div');
        this.app.innerHTML = '';
        this.renderHeader();
        this.app.append(new Timer().render());
        this.appState.favorites.push('das');
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
