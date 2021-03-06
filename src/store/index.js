import { createStore } from 'redux';
import defaultReducer from '../reducers/default'
import schedulesReducer from '../reducers/schedules'
import settingsReducer from '../reducers/settings'
import temporaryReducer from '../reducers/temporary'
import employeesReducer from '../reducers/employees'

const reducer = ( state = {}, action ) => {
	return {
		default: defaultReducer(state, action),
		temporary: temporaryReducer(state.temporary, action),
		settings: settingsReducer(state.settings, action),
		schedules: schedulesReducer(state.schedules, action),
		employees: employeesReducer(state.employees, action),
	}
}

const store = createStore( reducer )

export default store
