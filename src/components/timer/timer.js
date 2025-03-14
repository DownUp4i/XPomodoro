import { DivComponent } from '../../common/div-component';
import './timer.css';

export class Timer extends DivComponent {
    constructor() {
        super();
    }

    render() {
        this.el.classList.add('timer');
        this.el.innerHTML = `
        <div class="timer__wrapper">
            <div class="timer__header">
                <div class="timer__header-start timer__header-item">Pomodoro</div>
                <div class="timer__header-break timer__header-item">Break</div>
                <img src="../../static/Vector.svg" class="timer__header-options timer__header-start-item" />
            </div>
                <div class="timer__main">25:00</div>
                <img src="../../static/start.svg" class="timer__start" />
        </div>`;

        return this.el;
    }
}
