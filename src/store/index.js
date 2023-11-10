import {
	createPinia
} from 'pinia'

const pinia = createPinia()

async function registerStore(app) {
	app.use(pinia);
}

export default registerStore