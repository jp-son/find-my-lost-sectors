import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Moon from './Moon'
import Director from './Director'
import EDZ from './EDZ'
import Mercury from './Mercury'
import Mars from './Mars'
import Titan from './Titan'
import TangledShore from './TangledShore'
import Nessus from './Nessus'
import DreamingCity from './DreamingCity'
import Io from './Io'

const Main = () => (
    <main>
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/Director'} component={Director}/>
            <Route exact path={'/Moon'} component={Moon}/>
            <Route exact path={'/EDZ'} component={EDZ}/>
            <Route exact path={'/Io'} component={Io}/>
            <Route exact path={'/Mercury'} component={Mercury}/>
            <Route exact path={'/Mars'} component={Mars}/>
            <Route exact path={'/Titan'} component={Titan}/>
            <Route exact path={'/TangledShore'} component={TangledShore}/>
            <Route exact path={'/Nessus'} component={Nessus}/>
            <Route exact path={'/DreamingCity'} component={DreamingCity}/>
        </Switch>
    </main>
)

export default Main