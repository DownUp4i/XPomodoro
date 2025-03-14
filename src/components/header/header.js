import { DivComponent } from '../../common/div-component.js';
import './header.css';

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }

    render() {
        this.el.classList.add('header');
        this.el.innerHTML = `
            <div class="logo"><span>XP</span>omodoro</div>
            <div class="header__nav">
                <div class="header__nav-item">Главная</div>
                <div class="header__nav-item">Достижения</div>
                <div class="header__nav-item">Статистика</div>
            </div>
            <div class="header__log">
                <div class="header__reg">Регистрация</div>
                <div class="header__login">Войти</div>
            </div>
        `;

        return this.el;
    }
}
