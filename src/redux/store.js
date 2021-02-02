import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer.js'



export default configureStore({
	reducer: {
		counter: counterReducer
	}
})