# remult-my-db

You wanna try something cool ?

## How to ?

Create a `.env` file with the following content

```bash
DATABASE_URL = [YOUR_CONNECTION_STRING_HERE]
```

Then run the following commands

```bash
# Install dependencies
npm i

# Pull your db info
npm exec remult-cli pull

# Start your app
npm run dev
```

Enjoy [http://localhost:5173/api/admin](http://localhost:5173/api/admin)
