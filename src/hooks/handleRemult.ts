import { remultSveltekit } from 'remult/remult-sveltekit';
import { createPostgresDataProvider } from 'remult/postgres';
import { DATABASE_URL } from '$env/static/private';

const dataProvider = createPostgresDataProvider({
	connectionString: DATABASE_URL
});

export const handleRemult = remultSveltekit({
	logApiEndPoints: false,
	ensureSchema: false,
	dataProvider
});
