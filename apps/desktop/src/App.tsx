/*
 * Copyright (C) 2023 Meast Team & its contributors
 *
 * This file is part of the Meast Launcher.
 *
 * Meast is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Meast is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Meast.  If not, see <http://www.gnu.org/licenses/>.
 */

import { useState } from 'react';
import logoVite from './assets/logo-vite.svg';
import logoElectron from './assets/logo-electron.svg';
import './App.scss';

console.log(
    '[App.tsx]',
    `Hello world from Electron ${process.versions.electron}!`
);

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <div className="logo-box">
                <a
                    href="https://github.com/electron-vite/electron-vite-react"
                    target="_blank"
                >
                    <img
                        src={logoVite}
                        className="logo vite"
                        alt="Electron + Vite logo"
                    />
                    <img
                        src={logoElectron}
                        className="logo electron"
                        alt="Electron + Vite logo"
                    />
                </a>
            </div>
            <h1>Electron + Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Electron + Vite logo to learn more
            </p>
            <div className="flex-center">
                Place static files into the<code>/public</code> folder{' '}
                <img
                    style={{ width: '5em' }}
                    src="./node.svg"
                    alt="Node logo"
                />
            </div>
        </div>
    );
}

export default App;
