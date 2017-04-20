import React from 'react'
import { observer } from 'mobx-react'
import HomeStore from './store'

class Home extends React.Component { 

  componentWillMount() {
    this.store = new HomeStore()
  }

  render() { 

    return (
    	<div>
			Hello Word ;)
    	</div>
    )
  }
}

export default observer(Home)
